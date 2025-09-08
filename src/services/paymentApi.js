export const createPaymentOrder = async () => {
    const orderDetails = {
        amount: 20,
        currency: "INR",
        receipt: "rec123456789",
        restaurantID: "1dcc3cd4-cf8b-47b5-856c-97fedd02d455",
        userID: "59c6bc08-f00b-4c02-bae5-722c0c709c07",
        tableNo: "7",
        payment_capture: 1,
        paymentMode: "UPI",
    };

    try {
        const response = await fetch(
            "https://v3xm78zikc.execute-api.us-east-1.amazonaws.com/dev/razorpay-create-order",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderDetails),
            }
        );

        if (!response.ok) throw new Error("Failed to create order");

        const data = await response.json();
        return data; 
    } catch (err) {
        console.error("Payment API error:", err);
        throw err;
    }
};
