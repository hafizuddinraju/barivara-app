
import connectMongo from '../../../dataBase/conn';
import { deleteRoom, getRoom, putRoom } from '../../../dataBase/controller';


export default async function handler(req, res) {
    
        connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection"}))

        // type of request
        const { method } = req

        switch (method){
            case "GET":
                getRoom(req, res);
                break;
            case 'PUT':
                putRoom(req, res)
                break;
            case 'DELETE':
                deleteRoom(req, res)
                break;
            default : 
                res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
                res.status(405).end(`Method ${method} Not Allowd`)
                break;
        }
}