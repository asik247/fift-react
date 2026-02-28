import React from 'react';

const Bottol = ({ bottol }) => {
    const { id, brand, type, color, price_usd, img_url, in_stock}  = bottol;
    console.log(bottol);
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img src={img_url} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                      {id}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bottol;
/**
 * {
    "id": 10,
    "brand": "UrbanHydrate",
    "type": "Water Bottle",
    "material": "Stainless Steel",
    "capacity_ml": 700,
    "color": "White",
    "price_usd": 15.6,
    "img_url": "https://ibb.co.com/bRvFJwWK",
    "in_stock": true
}
 */