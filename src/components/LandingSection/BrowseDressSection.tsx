import Image from 'next/image'
import React from 'react'
import CasualImage from '../../../public/images/Casual-banner.png'
import FormalImage from '../../../public/images/Formal.png'
import PartyImage from '../../../public/images/Party.png'
import GYMImage from '../../../public/images/Gym.png'

const BrowseDressSection = () => {
  return (
    <section>
        <main className='max-w-[1160px] m-auto'>
            <div className='py-10 px-5 w-full flex-between flex-col bg-black/10 rounded-3xl gap-5'>
            <div className='flex-[1] w-full flex-center py-5'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-IntegralCF font-extrabold'>BROWSE BY DRESS STYLE</h1>
            </div>
            <div className='flex-[1] w-full flex-between flex-col gap-5'>
                <div className='flex-[1] flex-between gap-5'>
                    <div className='flex-[1] flex-center relative'>
                        <Image src={CasualImage} alt='' className='w-full object-cover' />
                        <div className='h-full w-full absolute flex px-5 py-5 items-start justify-start'>
                            <h1 className='text-3xl font-Satoshi font-bold'>Casual</h1>
                        </div>
                    </div>
                    <div className='flex-[1.7] flex-center relative'>
                        <Image src={FormalImage} alt='' className='w-full object-cover' />
                        <div className='h-full w-full absolute flex px-5 py-5 items-start justify-start'>
                            <h1 className='text-3xl font-Satoshi font-bold'>Formal</h1>
                        </div>
                    </div>
                </div>
                <div className='flex-[1] flex-between gap-5'>
                    <div className='flex-[1.7] flex-center relative'>
                        <Image src={PartyImage} alt='' className='w-full object-cover' />
                        <div className='h-full w-full absolute flex px-5 py-5 items-start justify-start'>
                            <h1 className='text-3xl font-Satoshi font-bold'>Party</h1>
                        </div>
                    </div>
                    <div className='flex-[1] flex-center relative'>
                        <Image src={GYMImage} alt='' className='w-full object-cover' />
                        <div className='h-full w-full absolute flex px-5 py-5 items-start justify-start'>
                            <h1 className='text-3xl font-Satoshi font-bold'>Gym</h1>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </main>
    </section>
  )
}

export default BrowseDressSection