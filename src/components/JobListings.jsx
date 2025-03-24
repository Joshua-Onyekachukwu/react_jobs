import React from 'react'
import {useState, useEffect} from 'react'

import JobListing from "./JobListing.jsx";
import Spinner  from "./Spinner.jsx";


const JobListings = ({isHome = false}) => {

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        const fetchJobs = async () => {
            const apiUrl = isHome
                ? '/api/jobs?_limit=3'
                : '/api/jobs';
            try {
                const res = await fetch(apiUrl, {});
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.log('Error Feteching Data', error);
            } finally {
                setLoading(false)
            }
        }
        fetchJobs();
    } , []);

    return (
        <section className="bg-white px-6 py-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-indigo-600 mb-12 text-center">
                    { isHome ? 'Recent Jobs' : 'Browse Jobs' }
                </h2>

                    {loading ? (
                        <Spinner loading={loading}/>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {jobs.map((job) => (
                                <JobListing key={job.id} job={job}/>
                            ))}
                        </div>
                    )}

        </div>
</section>

)
}

export default JobListings;
