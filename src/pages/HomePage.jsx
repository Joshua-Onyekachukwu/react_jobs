import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import JobListings from "../components/JobListings.jsx";
import ViewAllJobs from "../components/ViewAllJobs.jsx";

const HomePage = () => {
    return (
        <>
            <Hero/>
            <Stats/>
            <JobListings isHome={true}/>
            <ViewAllJobs/>
        </>
    )
}
export default HomePage
