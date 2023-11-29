import React from 'react'

function Pagination({totalUsers, paginate, currentPage}) {
    
    const totalPages = Math.ceil(totalUsers/3)
   const arr = []
  // console.log(totalPages)
    for(let i=1;i<=totalPages;i++){
        arr.push(i)
    }
   // console.log(arr)
    return (
        <div className='flex justify-center mt-[30px]'>
            <button disabled={currentPage===1} onClick={()=>paginate(-1)}>Prev</button>
            <p className='flex justify-center items-center w-[50px] rounded-full border border-black mx-5'>{currentPage}</p>
            <button disabled={currentPage===totalPages} onClick={()=>paginate(1)}>Next</button>
           
        </div>
    )
}

export default Pagination
