import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';


function useGetUser() {
  const token = localStorage.getItem("token") 

  const queryClient = useQueryClient();

  const getUserData = async () => {
    
    try {
      const response = await axios ('https://uatapicorporatetravel.fynity.in/api/user', {
        headers: {
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

  const cacheUserData = queryClient.getQueryData(['user']);
 
  return {service, cacheUserData};
}

export default useGetUser;
