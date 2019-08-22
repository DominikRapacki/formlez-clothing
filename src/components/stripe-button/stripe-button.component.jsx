import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_6XcQVjeO4bz5kOGCq7f9Djsu";

  const onToken = token => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Formlez Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Edp.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      pnaelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
