import { useQuery } from "@tanstack/react-query";
import LayoutDashboard from "../../layout/layoutDashboard";


import { BiEdit, BiTrashAlt } from "react-icons/bi";
import Spinner from "../../components/Spinner";
import { getSession, useSession } from "next-auth/react";
import { deleteBooking, getBookings } from "../../lib/helperBooking";

const mybooking = () => {
  const{data:session}= useSession();
  const {
    data: allBooking = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await getBookings();
      return res;
    },
  });
  if(isLoading){
    return <Spinner></Spinner>
  }
  console.log(allBooking);
  const onDelete = async(id)=>{
    console.log(id)
    const res = await deleteBooking(id)
    if(res){
      refetch();
    }

  }
  const filter = allBooking?.filter(book => book.email === session?.user?.email)
   return (
    <LayoutDashboard>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-10 py-2">
              <span className="text-gray-200">Avatar</span>
            </th>
            <th className="px-10 py-2">
              <span className="text-gray-200">Email</span>
            </th>

            <th className="px-10 py-2">
              <span className="text-gray-200">Price</span>
            </th>
            <th className="px-10 py-2">
              <span className="text-gray-200">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
            {
                filter?.map(book =>{
                    return(
                        <tr className="bg-gray-50 text-center">
        <td className="px-16 py-2 flex flex-row items-center">
            <img src={book?.picture || '#'} alt="" className="h-8 w-8 rounded-full object-cover" />
            
        </td>
        <td className="px-16 py-2">
            <span>{book?.email || "Unknown"}</span>
        </td>
        <td className="px-16 py-2">
            <span>{book?.price || "Unknown"}</span>
        </td>
        
        
       
        <td className="px-16 py-2 flex justify-around gap-5">
            
            <button className="cursor" onClick={()=>onDelete(book._id)} ><BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt></button>
        </td>
    </tr>
                    )
                })
            }
        </tbody>
      </table>
    </LayoutDashboard>
  );
};
export async function getServerSideProps({req}){
  const session = await getSession({req})
  if(!session){
    return{
      redirect:{
        destination:"/login",
        premanent:false
      }
    }
  }
  return{
    props:{session}
  }
}

export default mybooking;
