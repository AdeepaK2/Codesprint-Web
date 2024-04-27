import React, { useState } from 'react';
import '../App.css';

export default function ItemList({ product, addToCart, removeFromCart }) {
    const [addedToCart, setAddedToCart] = useState({});

    const handleAddToCart = (productItem) => {
        addToCart(productItem);
        setAddedToCart((prev) => ({ ...prev, [productItem.id]: true }));
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
        setAddedToCart((prev) => ({ ...prev, [productId]: false }));
    };

    return (
        <div className='flex'>
            {product.map((productItem, productIndex) => (
                <div key={productIndex} style={{ width: '33%' }}>
                    <div className='product-item'>
                        <img src={productItem.url} width="100%" alt="productimage" />
                        <p>{productItem.name} | {productItem.category}</p>
                        <p>{productItem.seller}</p>
                        <p>Rs. {productItem.price} /-</p>
                        <button
                            onClick={() => handleAddToCart(productItem)}
                            disabled={addedToCart[productItem.id]}
                        >
                            {addedToCart[productItem.id] ? 'Added' : 'Add To Cart'}
                        </button>
                        {addedToCart[productItem.id] && (
                            <button onClick={() => handleRemoveFromCart(productItem.id)}>
                                Remove From Cart
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
