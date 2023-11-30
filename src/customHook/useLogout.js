import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import axiosInstance from "../axios-instance/apiInstance";

function useLogout() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const Logout = async () => {
   const res = await axiosInstance.post('/logout',{}, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      return res
  };

  const TokenRemove = () =>{
    localStorage.removeItem("token")
    navigate('/login')
  }

  const mutation = useMutation({
    mutationFn:Logout,
    onSuccess:()=>{
      TokenRemove()
    }
  })

  return {mutation}
}

export default useLogout;
