import './style.scss';

import { aboutShopifyReasonData } from '../../../data/aboutData';

const ShopifyReason = ({ data = aboutShopifyReasonData }) => {
    return (
        <section className="shopify-reason not-sticky">
            <div className="container">
                <h2 className="shopify-reason__title ttt">{data.title}</h2>

                <div className="shopify-reason__items">
                    {data.items.map((item) => (
                        <article className="shopify-reason__item" key={item.id}>
                            <h3 className="shopify-reason__item-title">{item.title}</h3>

                            <p className="shopify-reason__item-text">{item.text}</p>
                        </article>
                    ))}
                </div>

                <p className="shopify-reason__text">{data.text}</p>
            </div>
        </section>
    );
};

export default ShopifyReason;
