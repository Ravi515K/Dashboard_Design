import { useQuery, useQueryClient } from "@tanstack/react-query";


const useGetMember = () => {

  const queryClient = useQueryClient();
   
  const getMember = async () => {
    try {
      const res = await fetch("https://gorest.co.in/public/v2/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 39c73ae0c166fedbeb5c0b6e5b79dbf0c251b0c68f0485d6686687ab9c76c18e",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch member data");
      }

      const result = await res.json();
      
      return result;
    } catch (error) {
    
      throw error;
    }
  };

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["member"],
    queryFn: getMember,
    staleTime: 10000,
  });
  const cacheData = queryClient.getQueryData(['member'])
// console.log(isLoading,isFetching)
//   useEffect(() => {

//     const refetchMemberData = async () => {
//       await queryClient.invalidateQueries(["member"]);
//     };

  

//   }, [queryClient]);

  return { data, cacheData };
};

export default useGetMember;
