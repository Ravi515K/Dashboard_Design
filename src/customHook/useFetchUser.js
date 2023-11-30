import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios'; 


function useFetchUser() {
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

  const {data} = useQuery({
    queryKey: ["LogInUser"],
    queryFn: getUserData,
    staleTime:10000
  });
// console.log(service)
 // const cacheUserData = queryClient.getQueryData(['LogInUser']);
  //console.log(cacheUserData)
  return {data};
}

export default useFetchUser;
