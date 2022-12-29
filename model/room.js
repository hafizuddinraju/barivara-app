import { model, models, Schema } from "mongoose";

const roomSchema = new Schema({
    picture: String,
    name:String,
    room:Number,
    bathroom: Number,
    kitchen: Number,
    description:String,
    price:Number,
    phone:Number,
    quantity:Number
});
const Rooms = models.room || model('room', roomSchema)
export default Rooms;
