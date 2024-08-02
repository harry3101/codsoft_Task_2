import React from 'react';
import InputField from '../component/InputField';

const EmployementType = ({handLeChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Work Experience</h4>
    <div>
      <label className='sidebar-label-container'>
        <input type="radio" name='test' id='test' value="" onChange={handLeChange} />
        <span className='checkmark'></span>Types of exployment
      </label>
      <InputField handLeChange={handLeChange} value="temporary" title="Temporary" name="test" />
      <InputField handLeChange={handLeChange} value="Full-time" title="Full-time" name="test" />
      <InputField handLeChange={handLeChange} value="Part-time" title="Part-time" name="test" />
    
    </div>


  </div>
  );
}

export default EmployementType;
