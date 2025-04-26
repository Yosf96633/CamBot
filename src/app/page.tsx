// import ParticlesBackground from '@/components/ParticlesBackground'
'use client'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'

const page = () => {
    const {data:session , status} = useSession()
    return (
    <div className=' h-screen flex flex-col justify-center items-center'>
      {/* <ParticlesBackground/> */}
      <Avatar>
           <AvatarFallback>{session?.user.name?.at(0)}</AvatarFallback>
           <AvatarImage src={session?.user.image} />
      </Avatar>
        <h1 className=' text-8xl font-bold '>{session?.user.name}</h1>
       { status==="authenticated" && <Button className=' w-fit mx-auto my-5' onClick={()=>{
          signOut();
       }}>Sign out
        </Button>}
    </div>
  )
}

export default page