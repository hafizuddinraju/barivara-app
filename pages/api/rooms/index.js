import connectMongo from '../../../dataBase/conn'
 import { getRooms, postRoom, putRoom, deleteRoom } from '../../../dataBase/controller';

export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection"}))

    // type of request
    const { method } = req

    switch(method){
        case 'GET' :
            //res.status(200).json({method,name:'Get'})
           await getRooms(req, res)
            break;
        case 'POST':
           await postRoom(req, res)
            break;
        case 'PUT':
           await putRoom(req, res)
            break;
        case 'DELETE':
          await  deleteRoom(req, res)
            break;
        default : 
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowd`)
            break;
    }
  }