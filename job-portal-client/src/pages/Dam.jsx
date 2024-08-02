const Dam = ({ result }) => {
  return (
    <div>
      {result.map((job) => (
        <div key={job.id}>
          <img src={job.companyLogo} alt={`${job.companyName} logo`} />
          <h2 className="text-lg font-semibold mb-2">{job.jobTitle}</h2>
          <p className="text-primary mb-1">{job.companyName}</p>
          <p>{job.jobLocation}</p>
          <p>{job.minPrice} - {job.maxPrice} {job.salaryType}</p>
          <p>{job.experienceLevel}</p>
          <p>{job.employmentType}</p>
          <p>{job.postingDate}</p>
          <p>{job.description}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Dam;
