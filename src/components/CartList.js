import { useEffect, useState } from 'react';
import '../App.css';

function CartList({ cart, updateCartCount }) {
    const [CART, setCART] = useState([]);

    useEffect(() => {
        setCART(cart);
    }, [cart]);

    const handleDeleteItem = (index) => {
        const updatedCart = [...CART];
        updatedCart.splice(index, 1); // Remove the item at the specified index
        setCART(updatedCart);
        updateCartCount(updatedCart.length); // Update the count in the header
    };

    return (
        <div>
            {CART?.map((cartItem, cartIndex) => {
                return (
                    <div key={cartIndex}>
                        <img src={cartItem.url} width={40} alt={cartItem.name} />
                        <span> {cartItem.name} </span>
                        <button
                            onClick={() => {
                                const updatedCart = CART.map((item, index) => {
                                    return cartIndex === index
                                        ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                                        : item;
                                });
                                setCART(updatedCart);
                            }}
                        >
                            -
                        </button>
                        <span> {cartItem.quantity} </span>
                        <button
                            onClick={() => {
                                const updatedCart = CART.map((item, index) => {
                                    return cartIndex === index
                                        ? { ...item, quantity: item.quantity + 1 }
                                        : item;
                                });
                                setCART(updatedCart);
                            }}
                        >
                            +
                        </button>
                        <span> Rs. {cartItem.price * cartItem.quantity} </span>
                        <button onClick={() => handleDeleteItem(cartIndex)}>Delete</button>
                    </div>
                );
            })}
            <p>
                Total: Rs.{' '}
                {CART.map((item) => item.price * item.quantity).reduce((total, value) => total + value, 0)}
            </p>
        </div>
    );
}

export default CartList;

