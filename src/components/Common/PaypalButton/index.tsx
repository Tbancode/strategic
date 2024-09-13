'use client';
import { useEffect } from 'react';
import { DISPATCH_ACTION, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

const PayPalButton = () => {
  const [{ options }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: DISPATCH_ACTION.RESET_OPTIONS,
      value: {
        ...options,
        currency: 'USD',
      },
    });
  }, []);

  return (
    <PayPalButtons
      createOrder={async () => {
        const response = await fetch('/api/create-paypal-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const order = await response.json();
        return order.id;
      }}
      onApprove={async (data, actions) => {
        if (actions.order) {
          const details = await actions.order.capture();
          const { id } = details;
          // Handle successful payment here
          console.log('Payment completed successfully', id);
        } else {
          console.error('Order actions not available');
        }
      }}
    />
  );
};

export default PayPalButton;
