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
            <h1 className='text-[30px] font-semibold mb-5'>Users:</h1>
            <section className='grid grid-cols-3 gap-2'>
                {
                    users.map((user: User) => (
                        <div key={user.id} className='border border-y-red-950 p-2'>
                            <Link href={`/user/${user.id}`} >
                                <h3 className='text-[25px] font-medium'>{user.name}</h3>
                            </Link>

                            <p>{user.email}</p>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}

export default userPage