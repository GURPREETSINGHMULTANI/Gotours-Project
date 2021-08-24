import axios from "axios";
import { showAlert } from "./alerts";
const stripe = Stripe('pk_test_51JRXjwIPH1JZoP6p3R0N9NsOm9VFidgPS3epX98Amc13n8hq2kif6KZ7byk2IGzJEhRNdtyF8LyfmVQR0Ahu3GCT00v5MCwb7i');

export const bookTour = async tourId => {
    try {
        // 1) Get checkout session from API
        const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
        console.log(session);

        // 2) Create checkout form + charge credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (err) {
        console.log(err);
        showAlert('error', err);
    }
}