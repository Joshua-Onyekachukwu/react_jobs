import React from "react";
import {Link} from 'react-router-dom'

const HomeCard = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Developers Card */}
                    <div className="relative overflow-hidden rounded-xl border border-gray-300 bg-gray-100 backdrop-blur-lg p-10 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <h2 className="text-3xl font-bold text-gray-900">For Developers</h2>
                        <p className="mt-3 text-lg text-gray-700">
                            Browse our React jobs and start your career today.
                        </p>
                        <Link
                            to="/jobs"
                            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700"
                        >
                            Browse Jobs
                        </Link>

                        {/* Floating Accent Shape */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
                    </div>

                    {/* Employers Card */}
                    <div className="relative overflow-hidden rounded-xl border border-gray-300 bg-indigo-100 backdrop-blur-lg p-10 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <h2 className="text-3xl font-bold text-gray-900">For Employers</h2>
                        <p className="mt-3 text-lg text-gray-700">
                            List your job to find the perfect developer for the role.
                        </p>
                        <Link
                            to="/add-job"
                            className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-indigo-700"
                        >
                            Add Job
                        </Link>

                        {/* Floating Accent Shape */}
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeCard;
