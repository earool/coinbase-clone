import React from 'react';
import { useNavigate } from 'react-router-dom';

import LeftArrow from '../../assets/icons/left-arrow.png';

function GoBackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('..');
  };

  return (
    <button
      onClick={goBack}
      className='bg-gray-border rounded-3xl p-2 mr-5 mt-2'
    >
      <div>
        <img src={LeftArrow} alt='back arrow' className='w-6' />
      </div>
    </button>
  );
}

export default GoBackButton;
