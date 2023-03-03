import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type: 'button' | 'submit';
};

function Button({ children, type, onClick }: ButtonProps) {
  return (
    <div className='flex'>
      <button
        onClick={onClick}
        type={type}
        className='w-full my-6 py-4 px-10 rounded-3xl text-white bg-my-blue-darker hover:bg-my-blue disabled:bg-my-blue-disabled'
      >
        {children}
      </button>
    </div>
  );
}

// this (may) not work with funcional components
Button.defaultProps = {
  onClick: () => {},
};

export default Button;
