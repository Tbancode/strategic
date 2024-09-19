'use client';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';


import {
  CTAWrapper,
  CTAInner,
  CTATextCtn,
  Form,
  NameSegment,
  FormGroup,
  Label,
  Input,
  SubmitBtn,
  
} from './styles';
import Stripe from '../Stripe';

type CTASectionProps = {
  title: string;
  subtitle: string;
  values?: any;
  setValues?: Dispatch<SetStateAction<any>>;
  isHomepage: boolean;
  buttonText: string;
  isDark?: boolean;
  maxWidth?: string;
};

const CTASection = ({
  title,
  subtitle,
  values,
  setValues,
  isHomepage,
  buttonText,
  isDark,
  maxWidth,
}: CTASectionProps) => {
  const [section, setSection] = useState('form');

  const handleSubmit = () => {
    setSection('payment');
  };

  // const handleClick = ( price: string) => {
  //   localStorage.setItem('selectedPrice', price);  // Store the price in localStorage
  //   console.log(`Price saved: ${price}`);
  // };
  const handleClick = (price: string) => {
    if (typeof window !== 'undefined') {
      // Ensure localStorage is only accessed on the client side
      localStorage.setItem('selectedPrice', price);
      console.log(`Price saved: ${price}`);
    }
  };
 
  return (
    <CTAWrapper className={isDark ? 'add_styles' : ''}>
       <CTAInner>
       <CTATextCtn>
           <h1
            style={{
              maxWidth,
            }}
          >
            {title}
          </h1> 
          <p>{subtitle}</p> 
          </CTATextCtn>
        {section === 'form' && (
          <Form onSubmit={handleSubmit}>
            <NameSegment>
              <FormGroup>
                <Label>First Name</Label>
                <Input type="text" name="first_name" id="first_name" />
              </FormGroup>
              <FormGroup>
                <Label>Last Name</Label>
                <Input type="text" name="last_name" id="last_name" />
              </FormGroup>
            </NameSegment>
            <FormGroup>
              <Label>Email Address</Label>
              <Input type="email" name="email" id="email" />
            </FormGroup>
            <FormGroup>
              <Label>Country</Label>
              <Input type="text" name="country" />
            </FormGroup>
            {isHomepage && (
              <FormGroup>
                <Label>Job Title</Label>
                <Input type="text" />
              </FormGroup>
            )}
            <SubmitBtn onClick={() => handleClick('$250' )} type="submit" className={isDark ? 'add_styles' : ''}>
              {buttonText}
            </SubmitBtn>
          </Form>
        )}
        {section === 'payment' && <Stripe />}
        
      </CTAInner> 
    
    </CTAWrapper>
  );
};

export default CTASection;

// import Script from 'next/script';

// declare global {
//   interface Window {
//     paypal: any;
//   }
// }

// const PayPalButton: React.FC = () => {
//   const paypalRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const loadPayPalScript = () => {
//       if (window.paypal && paypalRef.current) {
//         window.paypal
//           .Buttons({
//             style: {
//               shape: 'rect',
//               color: 'gold',
//               layout: 'horizontal',
//               label: 'paypal',
//             },
//             createOrder: function (data: any, actions: any) {
//               return actions.order.create({
//                 purchase_units: [
//                   {
//                     amount: {
//                       value: '1.99', // Replace with your actual amount
//                     },
//                   },
//                 ],
//               });
//             },
//             onApprove: function (data: any, actions: any) {
//               return actions.order.capture().then(function (details: any) {
//                 alert(
//                   'Transaction completed by ' + details.payer.name.given_name
//                 );
//               });
//             },
//           })
//           .render(paypalRef.current);
//       }
//     };

//     if (document.querySelector('script[src*="paypal.com/sdk/js"]')) {
//       loadPayPalScript();
//     } else {
//       const script = document.createElement('script');
//       script.src =
//         'https://www.paypal.com/sdk/js?client-id=BAA4-M89tt1ZTnrxYqVVDasn-fHX8N78c-NIAgogZpVFflUj6OdBsv-zWDBh29T-EDUqaDw167SNOBYyss&currency=USD';
//       script.async = true;
//       script.onload = loadPayPalScript;
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <>
//       <Script
//         src="https://www.paypal.com/sdk/js?client-id=BAA4-M89tt1ZTnrxYqVVDasn-fHX8N78c-NIAgogZpVFflUj6OdBsv-zWDBh29T-EDUqaDw167SNOBYyss&currency=USD"
//         strategy="lazyOnload"
//       />
//       <div ref={paypalRef}></div>
//     </>
//   );
// };
