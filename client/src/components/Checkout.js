import StripeCheckout from 'react-stripe-checkout';

const STRIPE_PUBLISHABLE = 'pk_test_51J5LDEJvWWZLzYeMLK8q3BCY9XJFsPOG3Q8wJsXLBLGc35UGQGtJ19SbNPAjecdj5Mwxlwnt7cfkj8SAkj8J31730008AF0Mvo';

const onToken = (user, checkout) => token =>
    checkout(user, token.id);

const Checkout = ({ amount, user, checkout }) =>
    <StripeCheckout
        amount={amount * 100}
        token={onToken(user, checkout)}
        currency='INR'
        stripeKey={STRIPE_PUBLISHABLE}
    />

export default Checkout;