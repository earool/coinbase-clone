import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as RightCaret } from '../../assets/icons/others/right_caret.svg';
import MobileTransactionMenu from '../../components/Home/MobileTransactionMenu';

function HomeMain() {
  const balance = 0;
  const balanceString = balance.toFixed(2);

  return (
    <main className='grid pt-6 mx-3 grid-cols-1 border-y-2 sm:border-y-0 sm:border-x-2 border-gray-light'>
      <div>
        <h6 className='text-sm text-gray-500'>My balance</h6>
        <Link to='/u/assets' className='flex items-center mb-6'>
          <h3 className='text-4xl -ml-[1px] font-medium'>
            USD {balanceString}
          </h3>
          <RightCaret className='ml-1 w-5' />
        </Link>
        <MobileTransactionMenu />
      </div>
    </main>
  );
}

export default HomeMain;
