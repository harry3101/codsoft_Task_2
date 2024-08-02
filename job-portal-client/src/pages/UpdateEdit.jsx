import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateEdit = () => {
  const{id} = useParams();
  console.log(id)
  return (
    <div>
      Update jobs
    </div>
  );
}

export default UpdateEdit;
