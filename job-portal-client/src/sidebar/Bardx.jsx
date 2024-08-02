import React from 'react';
import Location from './Location';
import Salary from './Salary';
import JobPosting from './JobPosting';
import WorkExperience from './WorkExperience';
import EmployementType from './EmployementType';

const Bardx = ({handLeChange, handLeClick}) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-lg font-bold mb-2'>Filters</h3>

      <Location handLeChange={handLeChange}/>
      <Salary handLeChange ={handLeChange} handLeClick ={handLeClick}/>
     <JobPosting handLeChange={handLeChange}/>
     <WorkExperience handLeChange={handLeChange}/>
     <EmployementType handLeChange={handLeChange}/>
    </div>
  );
}

export default Bardx;
