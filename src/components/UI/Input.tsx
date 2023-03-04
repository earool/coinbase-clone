import React from 'react';

type InputProps = {
  isRequired: boolean;
  label: string;
  input: {
    id: string;
    type: string;
  };
};

function Input({ isRequired, label, input }: InputProps) {
  return (
    <label htmlFor={input.id} className='flex mt-2 flex-col font-medium'>
      {label.concat('', isRequired ? '*' : '')}
      <input
        type={input.type}
        id={input.id}
        className='w-full h-[2.75rem] py-2 mt-2 border border-gray-border-darker rounded-md p-2 focus:outline-none focus:border-my-blue-darker focus:border-2'
        placeholder={`Enter your ${label}...`}
      />
    </label>
  );
}

export default Input;
