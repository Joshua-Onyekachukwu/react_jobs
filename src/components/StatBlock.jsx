import React from 'react'
import HomeCard from "./HomeCard.jsx";


const stats = [
    { id: 1, name: 'Creators on the platform', value: '8,000+' },
    { id: 2, name: 'Flat platform fee', value: '3%' },
    { id: 3, name: 'Uptime guarantee', value: '99.9%' },
    { id: 4, name: 'Paid out to creators', value: '$70M' },
];

const StatBlock = () => {
    return (
        <div className="mx-auto max-w-2xl lg:max-w-none">

            {/* Title Section */}
            <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                    Trusted by Creators Worldwide
                </h2>
                <p className="mt-4 text-lg text-black-300">
                    We empower content creators with a seamless platform to grow and earn.
                </p>
            </div>

                <div className="mt-10 items-center">
                    <HomeCard/>
                </div>


            {/* Stats Section */}
            <dl className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div
                        key={stat.id}
                        className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-black/70 to-black/90 backdrop-blur-lg p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-black/80 hover:to-black/95"
                    >
                        <dd className="order-first text-4xl font-extrabold text-white">
                            {stat.value}
                        </dd>
                        <dt className="mt-2 text-sm font-sm text-white/90">
                            {stat.name}
                        </dt>
                    </div>
                ))}
            </dl>
        </div>
    )
}
export default StatBlock
