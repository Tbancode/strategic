// 'use client';
// import { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutPage from './CheckoutPage';
// import convertToSubcurrency from '../../../../../utils/convertToSubcurrency';


// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
// );



// // interface Stripe {
// //   amount: number;
// // }

// const Stripe: React.FC = () => {

//   const storedPrice = localStorage.getItem('selectedPrice');
//   const amount = storedPrice ? parseFloat(storedPrice.replace(/[^0-9.-]+/g, "")) : null;

//   if (amount === null) {
//     // Render loading state while amount is being retrieved
//     return <div>Loading...</div>;
//   }


// // const Stripe = () => {
//   // const amount = 250;
//   return (
//     <StripeWrapper>
//       <div>
//         {/* <h1>Make payment to complete seat booking!</h1> */}
//         <h2>${amount}</h2>
//       </div>

//       <Elements
//         stripe={stripePromise}
//         options={{
//           mode: 'payment',
//           amount: convertToSubcurrency(amount),
//           currency: 'usd',
//         }}
//       >
//         <CheckoutPage amount={amount} />
//       </Elements>
//     </StripeWrapper>
//   );
// };

// export default Stripe;
'use client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutPage from './CheckoutPage';
import convertToSubcurrency from '../../../../../utils/convertToSubcurrency';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Stripe: React.FC = () => {
  // const [amount, setAmount] = useState<number | null>(null);

  // useEffect(() => {
  //   // Ensure localStorage is only accessed in the client/browser
  //   if (typeof window !== 'undefined') {
  //     const storedPrice = localStorage.getItem('selectedPrice');
  //     const parsedAmount = storedPrice
  //       ? parseFloat(storedPrice.replace(/[^0-9.-]+/g, ""))
  //       : null;
  //     setAmount(parsedAmount);
  //   }
  // }, []);

  // if (amount === null) {
  //   return <div>Loading...</div>;
  // }
   const [amount, setAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAmount = async () => {
      try {
        if (typeof window !== 'undefined') {
          const storedPrice = localStorage.getItem('selectedPrice');
          const parsedAmount = storedPrice
            ? parseFloat(storedPrice.replace(/[^0-9.-]+/g, ""))
            : null;
          if (parsedAmount !== null) {
            setAmount(parsedAmount);
          } else {
            setError('No valid price found.');
          }
        }
      } catch (err) {
        setError('Error retrieving price from localStorage.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAmount();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (amount === null) {
    return <div>No amount available.</div>;
  }


  return (
    <StripeWrapper>
      <div>
        <h2>${amount}</h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: 'payment',
          amount: convertToSubcurrency(amount),
          currency: 'usd',
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </StripeWrapper>
  );
};



export default Stripe;


// const StripeWrapper = styled.div`
//   background: var(--White);
//   padding: 2rem;

//   & > div {
//     display: flex;
//     flex-direction: column;
//     gap: 0.75rem;
//     margin-bottom: 0.75rem;
    
//     h1 {
//       font-family: var(--font-lora);
//       color: var(--blue);
//       font-size: 2rem;
//     }

//     h2 {
//       font-family: var(--font-satoshi);
//       color: var(--Gold);
//     }
//   }
// `;


// 'use client';
// import styled from 'styled-components';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { useState } from 'react';
// import CheckoutPage from './CheckoutPage';
// import convertToSubcurrency from '../../../../../utils/convertToSubcurrency';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// interface StripeProps {
//   amount: number;
// }


// const Stripe: React.FC = () => {
//   // Default amount state
//   const [amount, setAmount] = useState<number>(5200);

//   // Function to update the amount when a span is clicked
//   const handleAmountClick = (selectedAmount: number) => {
//     setAmount(selectedAmount);
//   };

//   return (
//     <StripeWrapper>
//       <div>
//         <h1>Make payment to complete seat booking!</h1>
//         <h2> Confirm amount to pay: ${amount}</h2>

//         {/* Four span elements with different amounts */}
//         <AmountOptions>
//           <span onClick={() => handleAmountClick(5200)}>$5,200</span>
//           <span onClick={() => handleAmountClick(6800)}>$6,800</span>
//           <span onClick={() => handleAmountClick(7000)}>$7,000</span>
//           <span onClick={() => handleAmountClick(8700)}>$8,700</span>
//         </AmountOptions>
//       </div>

//       <Elements
//         stripe={stripePromise}
//         options={{
//           mode: 'payment',
//           amount: convertToSubcurrency(amount),
//           currency: 'usd',
//         }}
//       >
//         <CheckoutPage amount={amount} />
//       </Elements>
//     </StripeWrapper>
//   );
// };

// export default Stripe;

const StripeWrapper = styled.div`
  /* background: var(--White);
  padding: 2rem; */
  background: rgba(4, 104, 244, 0.1); /* Transparent white */
  /* backdrop-filter: blur(5px); Background blur for glass effect */
  /* -webkit-backdrop-filter: blur(10px); For Safari support */
  border-radius: 16px; /* Rounded corners */
  /* border: 1px solid rgba(255, 255, 255, 0.3); Subtle white border */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
  padding: 2rem;
  color: black;
  /* height: 600px; */
  max-width: 600px; /* To limit the width of the stripe component */
  margin: 0 auto; /* Center the component */

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    
    h1 {
      font-family: var(--font-lora);
      color: var(--Gold);
      font-size: 1.5rem;
    }

    h2 {
      font-family: var(--font-satoshi);
      color: var(--Grey);
      
    }
  }
`;

const AmountOptions = styled.div`
  display: flex;
  gap: 1rem;
  
  span {
    background-color: var(--Gold, #ffbd00);
    color: var(--White);
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
    font-family: var(--font-satoshi);
    margin-bottom: 50px;

    &:hover {
      background-color: var(--Gold);
    }
  }
`;
