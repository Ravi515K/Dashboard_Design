import React from 'react'
import Sidebar from './LeftSection/sidebar'
import Profile from './LeftSection/Profile'
import { useSelector } from 'react-redux'
import TeamMember from './RightSection/TeamMember'


function DetailPage() {
    const obj = useSelector((state)=>state.AddMember.singleData)
     console.log(obj)
    return (
        <div>
            <div>
                <div className='w-1/4 md:w-1/5'>
                    <div className='hidden lg:block md:block'> <Sidebar className='h-200' /></div>
                    <div className='hidden lg:block md:block'><Profile /></div>
                </div>
            </div>
            <div>
                <h1>Team Member</h1>
                <div>
                    <div>
                        <img src={obj.imgUrl} alt="" />
                    </div>
                    <h2>{obj.name}</h2>
                    <h4>{obj.role}</h4>
                </div>
            </div>
            <div>
                <TeamMember />
            </div>
        </div>
    )
}

export default DetailPage
