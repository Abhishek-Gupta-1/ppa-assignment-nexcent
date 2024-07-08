import React from 'react'
import Image from 'next/image'
import { ClientsData } from '@/data/ClientsData'

const Customer = () => {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-900 flex items-center">
            <div className="container mx-auto flex">
                <div className="w-1/2 hidden lg:flex md:flex justify-center ">
                    <Image src="/customer/customer.png" alt="Main Image" width={300} height={300} />
                </div>
                <div className="w-3/4 text-left mx-auto max-w-3xl">
                    <p className=" mt-4">
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>
                    <p className="mt-6 text-xl font-bold text-green-500">Tim Smith</p>
                    <p className="">British Dragon Boat Racing Association</p>

                    <div className="mt-6 flex justify-center lg:gap-x-12 md:gap-x-4">
                        {ClientsData.map((data) => (
                            <Image key={data.alt} src={data.src} alt={data.alt} width={30} height={30} className='w-8 h-8' />

                        ))}
                        <button className="py-2 text-green-500">
                            Meet all customers→
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customer;











