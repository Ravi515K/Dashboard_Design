import React from 'react'

function useGorestMember() {
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
          let result = await res.json();
    
          dispatch(GetData(result));
          return result;
        } catch {
          (err) => console.log(err);
        }
      };
    
      const { data } = useQuery({
        queryKey: ["member"],
        queryFn: getMember,
        staleTime: 10000,
      });

      return {data}
}

export default useGorestMember
