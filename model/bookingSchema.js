import { model, models, Schema } from "mongoose";

const bookingSchema = new Schema({
    picture: String,
    price:Number,
    phone:Number,
    quantity:Number,
    email:String,
    product_id: String,
});
const Bookings= models.booking || model('booking', bookingSchema)
export default Bookings;
