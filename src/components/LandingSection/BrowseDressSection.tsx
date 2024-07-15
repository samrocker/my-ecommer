import Image from 'next/image'
import React from 'react'
import CasualImage from '../../../public/images/Casual-banner.png'
import FormalImage from '../../../public/images/Formal.png'

const BrowseDressSection = () => {
  return (
    <section>
        <main className='max-w-[1380px] m-auto'>
            <div className='py-5 px-5 w-full flex-between flex-col bg-black/10 rounded-3xl'>
            <div className='flex-[1] w-full flex-center py-10 '>
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-IntegralCF font-extrabold'>BROWSE BY DRESS STYLE</h1>
            </div>
            <div className='flex-[1] w-full flex-center'>
                <div className='flex-[1] w-full flex-between gap-5'>
                    <div className='flex-[1] flex-center'>
                        <Image src={CasualImage} alt='' className='w-full object-cover' />
                    </div>
                    <div className='flex-[2.5] flex-center'>
                    <Image src={FormalImage} alt='' className='w-full object-cover' />
                    </div>
                </div>
                <div className='flex-[1] flex-between gap-5'></div>
            </div>
            </div>
        </main>
    </section>
  )
}

export default BrowseDressSection