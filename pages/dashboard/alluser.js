import { useQuery } from "@tanstack/react-query";
import LayoutDashboard from "../../layout/layoutDashboard";
import { deleteUser, getUsers } from "../../lib/helperUser";

import { BiEdit, BiTrashAlt } from "react-icons/bi";
import Spinner from "../../components/Spinner";
import { getSession } from "next-auth/react";

const alluser = () => {
  const {
    data: alluser = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await getUsers();
      return res;
    },
  });
  if(isLoading){
    return <Spinner></Spinner>
  }
  console.log(alluser);
  const onDelete = async(id)=>{
    console.log(id)
    const res = await deleteUser(id)
    if(res){
      refetch();
    }

  }
   return (
    <LayoutDashboard>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-16 py-2">
              <span className="text-gray-200">Email</span>
            </th>

            <th className="px-16 py-2">
              <span className="text-gray-200">Status</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
            {
                alluser?.map(user =>{
                    return(
                        <tr className="bg-gray-50 text-center">
        {/* <td className="px-16 py-2 flex flex-row items-center">
            <img src={avatar || '#'} alt="" className="h-8 w-8 rounded-full object-cover" />
            <span className="text-center ml-2 font-semibold">{name || "Unknown"}</span>
        </td> */}
        <td className="px-16 py-2">
            <span>{user.email || "Unknown"}</span>
        </td>
        
        
        <td className="px-16 py-2">
            <button className="cursor"><span className={`${status == "Active" ? 'bg-green-500' : 'bg-rose-500'} text-white px-5 py-1 rounded-full`}>{status || "Unknown"}</span></button>
        </td>
        <td className="px-16 py-2 flex justify-around gap-5">
            {/* <button className="cursor"  ><BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit></button> */}
            <button className="cursor" onClick={()=>onDelete(user._id)} ><BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt></button>
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

export default alluser;
