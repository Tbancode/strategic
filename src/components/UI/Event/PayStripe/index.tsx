'use client';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import select from '../../../../../public/svgs/select.svg';

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
  List, 
  Details
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

const PayStripe = ({
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
  const [selectedCardSubtitle, setSelectedCardSubtitle] = useState('');
  const [selectedCardTitle, setSelectedCardTitle] = useState('');
  const [selectedContent, setSelectedContent] = useState([]);

  useEffect(() => {
    const subtitle = localStorage.getItem('selectedCardSubtitle');
    const content = localStorage.getItem('selectedContent');
    const title = localStorage.getItem('selectedCardTitle');
    
    if (subtitle) setSelectedCardSubtitle(subtitle);
    if (title) setSelectedCardTitle(title); 
    if (content) setSelectedContent(JSON.parse(content));
  }, []);
  const mark = select
  return (
    <CTAWrapper className={isDark ? 'add_styles' : ''}>
      <CTATextCtn>
          
          <Details>     
            <h2>{selectedCardTitle}</h2>
            <h3>{selectedCardSubtitle}</h3>
      <List>
        {selectedContent.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </List> 
      </Details>
 
            
        </CTATextCtn>

      <Stripe />
    </CTAWrapper>
  );
};

export default PayStripe;

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
