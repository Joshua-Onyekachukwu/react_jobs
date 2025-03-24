import React, { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    if (!job) {
        return <p className="text-red-500">Error: Job data is missing.</p>;
    }

    let description = job.description || "No description available.";

    if (!showFullDescription && description.length > 120) {
        description = description.substring(0, 120) + "...";
    }

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
                <span className="text-xs font-semibold text-gray-600 bg-gray-200 px-3 py-1 rounded-full">
                    {job.type || "Unknown"}
                </span>
            </div>

            {/* Job Title with Link to Details */}
            <Link to={`/jobs/${job.id}`} className="text-2xl font-bold text-indigo-600 hover:underline">
                {job.title || "Untitled Job"}
            </Link>

            {/* Job Description */}
            <p className="text-gray-700 mt-3">
                {description}
                {job.description && job.description.length > 120 && (
                    <span>
                        <button
                            onClick={() => setShowFullDescription((prev) => !prev)}
                            className="text-indigo-500 hover:text-indigo-600 ml-1"
                        >
                            {showFullDescription ? "Less" : "More"}
                        </button>
                    </span>
                )}
            </p>

            <h4 className="text-indigo-500 font-semibold mt-4">
                {job.salary ? `${job.salary} / Year` : "Salary not specified"}
            </h4>

            <div className="border-t border-gray-300 my-4"></div>

            <div className="flex justify-between items-center">
                <span className="text-orange-700 text-sm">
                    <FaMapMarker className="inline text-lg mb-1" /> {job.location || "Location not specified"}
                </span>

                <Link
                    to={`/jobs/${job.id}`}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition"
                >
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default JobListing;
