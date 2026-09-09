const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

const TELEGRAM_CHAT_IDS = ['1605354843', '5922657292'];

app.set('trust proxy', 1);
app.use(express.json());

/* =========================
   RATE LIMIT
========================= */

const requests = new Map();

const RATE_LIMIT = 5;
const RATE_TIME = 10 * 60 * 1000;

const rateLimit = (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();

    let data = requests.get(ip);

    if (!data || now - data.startedAt > RATE_TIME) {
        data = {
            count: 0,
            startedAt: now,
        };
    }

    data.count += 1;

    requests.set(ip, data);

    if (data.count > RATE_LIMIT) {
        return res.status(429).json({
            success: false,
            message: 'Too many requests',
        });
    }

    next();
};

/* =========================
   HELPERS
========================= */

const escapeHtml = (value = '') =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

/* =========================
   CONTACT API
========================= */

app.post('/api/contact', rateLimit, async (req, res) => {
    try {
        const { type = 'form', user, phone, email, captchaToken } = req.body;

        /* =========================
           BASIC VALIDATION
        ========================= */

        if (!email || !captchaToken) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields',
            });
        }

        if (type === 'form' && (!user || !phone)) {
            return res.status(400).json({
                success: false,
                message: 'Missing form fields',
            });
        }

        if (!TELEGRAM_BOT_TOKEN || !TURNSTILE_SECRET_KEY) {
            console.error('Missing server environment variables');

            return res.status(500).json({
                success: false,
            });
        }

        /* =========================
           TURNSTILE VALIDATION
        ========================= */

        const turnstileResponse = await axios.post(
            'https://challenges.cloudflare.com/turnstile/v0/siteverify',
            new URLSearchParams({
                secret: TURNSTILE_SECRET_KEY,
                response: captchaToken,
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            },
        );

        const turnstileData = turnstileResponse.data;

        if (!turnstileData.success) {
            console.log('Turnstile failed:', turnstileData['error-codes']);

            return res.status(403).json({
                success: false,
                message: 'Captcha failed',
            });
        }

        /* =========================
           SAFE VALUES
        ========================= */

        const safeEmail = escapeHtml(email.trim());
        const safeUser = user ? escapeHtml(user.trim()) : '';
        const safePhone = phone ? escapeHtml(phone.trim()) : '';

        /* =========================
           TELEGRAM MESSAGE
        ========================= */

        let message = '';

        if (type === 'mail') {
            message = `
<b>На сайті новий запит на зв'язок.</b>

<i>E-Mail:</i> <a href="mailto:${safeEmail}">${safeEmail}</a>
            `.trim();
        } else {
            message = `
<b>На сайті нове заповнення форми зворотнього зв'язку.</b>

<i>Ім'я:</i> ${safeUser}
<i>Телефон:</i> <a href="tel:${safePhone}">${safePhone}</a>
<i>E-Mail:</i> <a href="mailto:${safeEmail}">${safeEmail}</a>
            `.trim();
        }

        /* =========================
           SEND TO TELEGRAM
        ========================= */

        const telegramRequests = TELEGRAM_CHAT_IDS.map((chatId) =>
            axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML',
            }),
        );

        await Promise.all(telegramRequests);
        console.log(`[CONTACT] ${new Date().toISOString()} | type=${type} | email=${safeEmail}`);
        return res.json({
            success: true,
        });
    } catch (error) {
        console.error('Contact API error:', error.response?.data || error.message);

        return res.status(500).json({
            success: false,
        });
    }
});

/* =========================
   START SERVER
========================= */

app.listen(PORT, '127.0.0.1', () => {
    console.log(`API працює: http://127.0.0.1:${PORT}`);
});
