import React, { useEffect, useState } from 'react';
import './JobList.css'; // Optional for styling

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  // Simulate fetching job data
  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch('/jobs.json'); // Replace with your API endpoint or local JSON file
      const data = await response.json();
      setJobs(data);
    };
    
    fetchJobs();
  }, []);

  return (
    <div className="job-list">
      <h1>Software Development Job Listings</h1>
      <ul>
        {jobs.map((job, index) => (
          <li key={index} className="job-item">
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <a href={job.url} target="_blank" rel="noopener noreferrer">View Job</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;