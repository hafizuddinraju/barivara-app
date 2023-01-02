import connectMongo from "../../../dataBase/conn";
import { deleteBooking, getBookings, postBooking } from "../../../dataBase/controllerBooking";


export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection"}))

    // type of request
    const { method } = req

    switch(method){
        case 'GET' :
            //res.status(200).json({method,name:'Get'})
            getBookings(req, res)
            break;
        case 'POST':
            postBooking(req, res)
            break;
        
        case 'DELETE':
            deleteBooking(req, res)
            break;
        default : 
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowd`)
            break;
    }
  }