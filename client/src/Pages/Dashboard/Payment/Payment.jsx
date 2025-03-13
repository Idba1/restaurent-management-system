import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [isStripeLoaded, setIsStripeLoaded] = useState(false);

    useEffect(() => {
        stripePromise.then((stripe) => {
            if (stripe) {
                setIsStripeLoaded(true);
                console.log("Stripe is loaded", stripe);
            } else {
                console.error("Stripe failed to load");
            }
        });

        return () => {
            setIsStripeLoaded(false);
        };
    }, []);

    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
            <div>
                {isStripeLoaded ? (
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                ) : (
                    <div>Loading Stripe...</div>
                )}
            </div>
        </div>
    );
};

export default Payment;