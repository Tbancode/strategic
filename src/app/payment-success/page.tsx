import PaymentSuccess from '@/components/UI/PaymentSuccess';

const PaymentSuccessPage = ({
  searchParams: { amount },
}: {
  searchParams: {
    amount: string;
  };
}) => {
  return <PaymentSuccess amount={amount} />;
};

export default PaymentSuccessPage;
