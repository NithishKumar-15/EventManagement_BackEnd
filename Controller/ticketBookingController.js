import Stripe from "stripe";

const ticketBookingController=async(req,res)=>{

    try{
        const stripe=new Stripe(process.env.STRIPESECREATKEY);
        const session=await stripe.checkout.sessions.create({
            line_items:
                [
                    {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: req.body.eventName,
                                description: "Your Ticket Booked"
                            },
                            unit_amount: Number(100),
                        },
                        quantity: 1
                    }
                ],
                mode:'payment',
                success_url:'http://localhost:5173/SuccessPage',
                cancel_url:'http://localhost:5173/PaymentCancel'
            
        })

        res.send({message:"ticked booked",id:session.id});

    }catch(e){
        res.status(500).send({message:"internal server error"});
    }
}

export default ticketBookingController;