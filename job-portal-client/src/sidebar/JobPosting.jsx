import React from 'react';
import InputField from '../component/InputField';

const JobPosting = ({handLeChange}) => {
  const now = new Date();
   const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
   const sevenDayssAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
   const ThirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);
   //console.log(twentyFourHoursAgo);
   const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
   const sevenDaysAgoDate = sevenDayssAgo.toISOString().slice(0, 10);
   const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().slice(0, 10);
  // console.log(twentyFourHoursAgo);
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Date of posting</h4>
    <div>
      <label className='sidebar-label-container'>
        <input type="radio" name='test' id='test' value="" onChange={handLeChange} />
        <span className='checkmark'></span>All Time
      </label>
      <InputField handLeChange={handLeChange} value={twentyFourHoursAgo} title="Last 24 hours" name="test" />
      <InputField handLeChange={handLeChange} value={sevenDaysAgoDate} title="Last seven days" name="test" />
      <InputField handLeChange={handLeChange} value={ThirtyDaysAgo} title="Last 30 days" name="test" />
      
    </div>


  </div>
  );
}

export default JobPosting;
