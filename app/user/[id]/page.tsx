import Link from 'next/link'
import React from 'react'

interface Props {
    params: {
        id: string
    }
}

function getUser(id: string) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
}

const singleUser = async ({ params }: Props) => {
    const userData = await getUser(params.id)
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{userData.name}</div>
                <p className="text-gray-700 text-base">Username: {userData.username}</p>
                <p className="text-gray-700 text-base">Email: {userData.email}</p>
                <p className="text-gray-700 text-base">Address: {userData.address.street}, {userData.address.suite}, {userData.address.city}, {userData.address.zipcode}</p>
                <p className="text-gray-700 text-base">Phone: {userData.phone}</p>
                <p className="text-gray-700 text-base">Website: {userData.website}</p>
                <p className="text-gray-700 text-base">Company: {userData.company.name}</p>
                <Link href='/user' className='mt-5 text-end block'>Back to User {"-->"}</Link>
            </div>
        </div>
    )
}

export default singleUser


