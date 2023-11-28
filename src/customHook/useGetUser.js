import React from 'react'

function useGetUser() {
    const token = localStorage.getItem("token")

    const getUserData = () => {
        try{
            axios.get('https://uatapicorporatetravel.fynity.in/api/user',{
                headers:{
                    'Accept':"application/json",
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then((res)=>{
               // console.log(res)
                return res.data
            }).catch((err)=>{
                console.log(err)
            })
        }catch{(err)=>{
            console.log(err)
        }}
    }
    
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["user"],
        queryFn: getUserData,
        staleTime: 10000,
      })

    return {data}
}

export default useGetUser
