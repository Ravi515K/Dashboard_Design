import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios'; 


function useGetUser() {
  const token = localStorage.getItem("token") 
  
  const queryClient = useQueryClient();

  const getUserData = async () => {
    
    try {
      const response = await axios.get('https://uatapicorporatetravel.fynity.in/api/user', {
        headers: {
          "Accept" :"application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
   
      return response.data.data;
    } catch (err) {
    
      throw err;
    }
  };

  const service = useQuery({
    queryKey: ["user"],
    queryFn: getUserData,
    staleTime:1000*60*5
  });
// console.log(service)
  const cacheUserData = queryClient.getQueryData(['user']);
  //console.log(cacheUserData)
  return {service, cacheUserData};
}

export default useGetUser;
