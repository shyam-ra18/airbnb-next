// import { strip } from "@/lib/stripe";
// import { absoluteUrl } from "@/lib/utils";
// import getCurrentUser from "@/app/actions/getCurrentUser";

// export const getPaymentGateway = async ({ price }: string) => {
//   const reservationUrl = absoluteUrl("/billing-property");
//   const currentUser = getCurrentUser();

//   if (!currentUser) throw new Error("User not found");

//   const stripeSession = await strip.checkout.sessions.create({
//     success_url: reservationUrl,
//     cancel_url: reservationUrl,
//     payment_method_types: ["card"],
//     mode: "payment",
//     customer_email: currentUser?.email,
//     line_items: [
//       {
//         price: price,
//       },
//     ],
//   });
// };
