import React from 'react'
import InputField from '../component/InputField'

const Location = ({ handLeChange }) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Loaction</h4>
      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name='test' id='test' value="" onChange={handLeChange} />
          <span className='checkmark'></span>All
        </label>
        <InputField handLeChange={handLeChange} value="Mumbai" title="Mumbai" name="test" />
        <InputField handLeChange={handLeChange} value="Delhi" title="Delhi" name="test" />
        <InputField handLeChange={handLeChange} value="Hydreabad" title="Hydreabad" name="test" />
        <InputField handLeChange={handLeChange} value="Banglore" title="Banglore" name="test" />
      </div>


    </div>
  )
}

export default Location
