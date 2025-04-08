import React, { useState } from 'react';
import axios from 'axios';

const Order = () => {
  const [orderDetails, setOrderDetails] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const handleOrder = async () => {
    try {
      const response = await axios.post('http://localhost:4000/order', { token, orderDetails });
      alert('Order placed successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Place Order</h2>
      <textarea placeholder="Order Details" value={orderDetails} onChange={(e) => setOrderDetails(e.target.value)} />
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default Order;
