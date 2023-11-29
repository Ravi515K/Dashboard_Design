import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";

function useLogout() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const Logout = async () => {
   const res = await axios
      .post("https://uatapicorporatetravel.fynity.in/api/logout", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
