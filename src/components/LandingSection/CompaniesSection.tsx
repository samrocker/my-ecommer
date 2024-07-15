import Image from 'next/image'
import React from 'react'
import conpanyImage1 from '../../../public//images/VERSACE.png'
import conpanyImage2 from '../../../public//images/ZARA.png'
import conpanyImage3 from '../../../public//images/GUCCI.png'
import conpanyImage4 from '../../../public//images/PRADA.png'
import conpanyImage5 from '../../../public//images/CALVINKLEIN.png'

const CompaniesSection = () => {
  return (
    <section className='w-full bg-black'>
        <main className='max-w-[1440px] m-auto'>
            <div className='py-7 px-5 w-full flex-center md:flex-between flex-wrap gap-5'>
                <Image src={conpanyImage1} alt='' className=' w-20 md:w-28 object-cover' /> 
                <Image src={conpanyImage2} alt='' className=' w-20 md:w-28 object-cover' /> 
                <Image src={conpanyImage3} alt='' className=' w-20 md:w-28 object-cover' /> 
                <Image src={conpanyImage4} alt='' className=' w-20 md:w-28 object-cover' /> 
                <Image src={conpanyImage5} alt='' className=' w-20 md:w-28 object-cover' /> 
            </div>
        </main>
    </section>
)
}

export default CompaniesSection