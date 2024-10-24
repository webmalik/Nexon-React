import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  useEffect(() => {
    const container = document.querySelector('.wrapper'); // Получаем ваш существующий блок .wrapper

    if (container) {
      // Устанавливаем высоту страницы
      const height = container.clientHeight;
      document.body.style.height = `${height}px`;

      // Создаем анимацию с GSAP и ScrollTrigger
      gsap.to(container, {
        y: -(height - document.documentElement.clientHeight),
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true, // Обновление триггеров при изменении размера экрана
        },
      });
    }

    // Очищаем анимацию при размонтировании компонента
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null; // Компонент не рендерит ничего, так как управляет анимацией существующих элементов
};

export default SmoothScroll;
