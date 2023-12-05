import React from 'react'
import "../../../App.css"
function TopStore() {
    const data = [
        { store_name: 'Solaris Sparkle', location: 'Miami, Florida', sell: '102 Quantity', amount: '12.50k' },
        { store_name: 'CRIMSON Dusk', location: 'Denver, Colorado', sell: '214 Quantity', amount: '07.85k' },
        { store_name: 'Indigo Zephire', location: 'Orlando, Florida', sell: '143 Quantity', amount: '16.40k' },
        { store_name: 'Roseat Crest', location: 'Miami, Florida', sell: '102 Quantity', amount: '12.50k' },
        { store_name: 'Solaris Sparkle', location: 'Las Vegas, Nevada', sell: '185 Quantity', amount: '23.64' },
    ];
    return (
        <div className='mt-[75px]'>
            <div class="flex justify-between py-3 mx-auto">
                <div id="top-text">
                    <h1 className='font-semibold'>Top Store</h1>
                </div>
                <div class="btn">
                    <button className='bg-light-green w-70 rounded-lg text-10 mb-2 p-1 mr-8' >Share</button>
                </div>
            </div>
            <div>
                <table className="min-w-full sm:w-1/2 divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-2 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Store Name</th>
                            <th className="px-2 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th className="px-2 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Sell</th>
                            <th className="px-2 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-center divide-y divide-gray-200">
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="px-2 py-2 whitespace-nowrap text-sm">{item.store_name}</td>
                                <td className="px-2 py-2 whitespace-nowrap text-sm">{item.location}</td>
                                <td className="px-2 py-2 whitespace-nowrap text-sm">{item.sell}</td>
                                <td className="px-2py-2 whitespace-nowrap text-sm">{item.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TopStore
