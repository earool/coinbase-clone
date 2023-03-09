import React, { ReactNode } from 'react';

type IconBtnMMenuProps = {
  children: ReactNode;
  name: string;
};

function IconBtnMMenu({ children, name }: IconBtnMMenuProps) {
  return (
    <div className='flex m-w-[90px] flex-col items-center'>
      <button className=' mb-2 [&>svg]:w-5 [&>svg]:h-5 p-1 rounded-full text-white  bg-my-blue hover:bg-my-blue-darker'>
        {children}
      </button>
      <p className='text-sm text-gray-500'>{name}</p>
    </div>
  );
}
export default IconBtnMMenu;
