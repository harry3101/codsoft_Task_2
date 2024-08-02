import { useEffect, useState } from "react";
import Banner from "../component/Banner";
import Dam from "./Dam";
import Card from "../component/Card";
import Bardx from "../sidebar/Bardx";
import Newsletter from "../component/Newsletter";
import JobDetails from "./JobDetails";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [currentPage,setCurrentPage ] = useState(1);
  const itemsPerPage = 0;

  useEffect(() => {
    setisLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setisLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //calculate index range 
  const calculatePageRange = () =>{
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {startIndex, endIndex};
  }



  const filteredItems = jobs.filter((job) =>
    job.jobTitle.toLowerCase().includes(query.toLowerCase())
  );

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    if (query) {
      filteredJobs = filteredItems;
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
    }

    return filteredJobs;
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (

    <div>
      <Banner query={query} handLeInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12" >

        <div className="bg-white p-4 rounded">
          <Bardx handLeChange = {handleChange} handLeClick = {handleInputChange}/>
        </div>
        <div className="col-span-2 bg-white p-4 rounded-sm"> 
          {
            isLoading ? (<p>Loading...</p>) : <Dam result={result}/>
          }
          <Dam result={result} />
      
         
        </div>
        <div className="bg-white p-4 rounded"><Newsletter/></div>
      </div>
    
    </div>


  );
};

export default Home;

