// 'use client';

// import React, { useEffect, useState } from 'react';
// import {
//   useStripe,
//   useElements,
//   PaymentElement,
// } from '@stripe/react-stripe-js';
// import convertToSubcurrency from '../../../../../utils/convertToSubcurrency';
// import SpinnerComponent from '@/components/Common/Spinner';
// import styled, { css, keyframes } from 'styled-components';

// const CheckoutPage = ({ amount }: { amount: number }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [errorMessage, setErrorMessage] = useState<string>();
//   const [clientSecret, setClientSecret] = useState('');
//   const [loading, setLoading] = useState(false);

//   const baseDomain =
//     process.env.NEXT_PUBLIC_NODE_ENV! === 'development'
//       ? 'http://localhost:3000'
//       : 'https://www.strategic-solutions.global';

//   useEffect(() => {
//     fetch('/api/create-payment-intent', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, [amount]);

//   useEffect(() => {
//     if (errorMessage) {
//       const timer = setTimeout(() => setErrorMessage(undefined), 2000);
//       return () => clearTimeout(timer);
//     }
//   }, [errorMessage]);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setLoading(true);

//     if (!stripe || !elements) {
//       return;
//     }

//     const { error: submitError } = await elements.submit();

//     if (submitError) {
//       setErrorMessage(submitError.message);
//       setLoading(false);
//       return;
//     }

//     const { error } = await stripe.confirmPayment({
//       elements,
//       clientSecret,
//       confirmParams: {
//         return_url: `${baseDomain}/payment-success?amount=${amount}`,
//       },
//     });

//     if (error) {
//       setErrorMessage(error.message);
//     }

//     setLoading(false);
//   };

//   if (!clientSecret || !stripe || !elements) {
//     return <SpinnerComponent />;
//   }

//   return (
//     <Form onSubmit={handleSubmit}>
      
//       {clientSecret && <PaymentElement />}

//       {errorMessage && <div>{errorMessage}</div>}

//       <button disabled={!stripe || loading}>
//         {!loading ? `Pay $${amount}` : 'Processing...'}
//       </button>
//     </Form>
//   );
// };

// export default CheckoutPage;

// // Define the pulse animation
// const pulse = keyframes
//   0%, 100% {
//     opacity: 1;
//   }
//   50% {
//     opacity: 0.5;
//   }
// `;

// // Define the Form styled component
// const Form = styled.form`
//   div {
//     color: red;
//     margin-top: 0.5rem;
//     font-size: 1rem;
//     font-family: var(--font-satoshi);
//   }
//   button {
//     margin-top: 1rem; /* mt-2 */
//     width: 100%; /* w-full */
//     background-color: var(--Charcoal); /* bg-black */
//     height: 4rem; /* p-5 */
//     border: none;
//     border-radius: 0.25rem; /* rounded-md */
//     color: var(--White); /* text-white */
//     font-family: var(--font-satoshi); /* font-satoshi */
//     font-size: 1.125rem;
//     font-weight: bold; /* font-bold */
//     cursor: pointer;

//     &:disabled {
//       opacity: 0.5; /* disabled:opacity-50 */
//       animation: ${pulse} 2s infinite; /* disabled:animate-pulse */
//       cursor: not-allowed;
//     }
//   }
// `;


'use client';

import React, { useEffect, useState } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement,
  // PaymentElementOptions,
  CardElement
} from '@stripe/react-stripe-js';
import convertToSubcurrency from '../../../../../utils/convertToSubcurrency';
import SpinnerComponent from '@/components/Common/Spinner';
import styled, { css, keyframes } from 'styled-components';







const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  localStorage.setItem('selectedName', name);
    localStorage.setItem('selectedEmail', email)
    localStorage.setItem('selectedPhone', phone)

  const baseDomain =
    process.env.NEXT_PUBLIC_NODE_ENV! === 'development'
      ? 'http://localhost:3000'
      : 'https://www.strategic-solutions.global';

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(undefined), 2000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    localStorage.setItem('paymentFormData', JSON.stringify({
      name,
      email,
      phone
      
    }));

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
        receipt_email: email,
        payment_method_data: {
          billing_details: {
            name: name,
            email: email,
            phone: phone,
          },
        },
      },
    });

    if (error) {
      setErrorMessage(error.message);
     }

  
    setLoading(false);
  };
  

  if (!clientSecret || !stripe || !elements) {
    return <SpinnerComponent />;
  }

  const options: any = {
    appearance: {
      theme: 'stripe',  // You can change this to 'night' or others if desired
      variables: {
        colorPrimary: '#000000',
        colorText: '#ffffff',  // White text for inputs
        fontSizeBase: '16px',
      },
      rules: {
        '.Input': {
          color: '#ffffff',  // Set input text color to white
        },
        '.Label': {
          color: '#ffffff',  // Set label text color to white
        },
        '.Error': {
          color: '#ff0000',  // Set error message color to red
        },
        '::placeholder': {
          color: '#bbbbbb',  // Set placeholder text color
        }
      },
    },
  };
  
  

  return (
    <Form className='form' onSubmit={handleSubmit}>
      <label htmlFor="name">Names</label>
      <input
        id="name"
        name='Names'
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name='Email'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        type="tel"
        name='Phone'
        placeholder='(+81) 334444637'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      
      
      {clientSecret && <PaymentElement options={options} />}

      {errorMessage && <div>{errorMessage}</div>}

      <button disabled={!stripe || loading}>
        {!loading ? `Pay $${amount}` : 'Processing...'}
      </button>
    </Form>
  );
};

export default CheckoutPage;

// Define the pulse animation
const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

// Define the Form styled component
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #d8d7d5;
    
  .StripeElement {
    color: white !important; /* Ensure this is specific enough */
}

  label {
    font-size: 1rem;
    font-family: var(--font-satoshi);
    /* color: var(--); */
    font-weight: 350;
    color: #2d2d2d;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 0px solid var(--Charcoal);
    border-radius: 0.25rem;
    font-family: var(--font-satoshi);
    
  }

  div {
    color: #ffffff;
    margin-top: 0.5rem;
    font-size: 1rem;
    font-family: var(--font-satoshi);
  }

  button {
    margin-top: 1rem;
    width: 100%;
    background-color: var(--Charcoal);
    height: 4rem;
    border: none;
    border-radius: 0.25rem;
    color: var(--White);
    font-family: var(--font-satoshi);
    font-size: 1.125rem;
    font-weight: bold;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      animation: ${pulse} 2s infinite;
      cursor: not-allowed;
    }
  }
`;
