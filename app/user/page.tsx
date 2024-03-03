import Link from 'next/link'
import React from 'react'

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}


function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users", { cache: 'no-cache' }).then(res => res.json())
}


const userPage = async () => {
    const users: User[] = await getUser()
    return (
        <div>
            <h1 className='text-[30px] font-semibold mb-5'>TODO:</h1>
            {
                users.map((user: User) => (
                    <div key={user.id}>
                        <Link href={`/user/${user.id}`} >
                            <h3 className='text-[25px] font-medium'>{user.name}</h3>
                        </Link>

                        <p>{user.email}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default userPage