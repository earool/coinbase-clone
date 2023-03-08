import React from 'react';
import useViewport from '../../hooks/useViewport';

import IconLink from '../../helpers/IconLink';
import { ReactComponent as Logo } from '../../assets/icons/headerbar/logo.svg';
import { ReactComponent as Hamburger } from '../../assets/icons/headerbar/hamburger_menu.svg';
import { ReactComponent as Assets } from '../../assets/icons/sidebar/assets.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/sidebar/homeIcon.svg';
import { ReactComponent as Pay } from '../../assets/icons/sidebar/pay.svg';
import { ReactComponent as Trade } from '../../assets/icons/sidebar/trade.svg';

function Nav() {
  const { width } = useViewport();
  const breakpoint = 640;

  const navIcons = (
    <>
      <IconLink path='/u/home' name='Home'>
        <HomeIcon />
      </IconLink>
      <IconLink path='/u/assets' name='Assets'>
        <Assets />
      </IconLink>
      <IconLink path='/u/pay' name='Pay'>
        <Pay />
      </IconLink>
      <IconLink path='/u/trade' name='Trade'>
        <Trade />
      </IconLink>
    </>
  );

  return width < breakpoint ? (
    <>
      <nav className='flex justify-between items-center my-2 mx-6'>
        <Logo className='text-my-blue cursor-pointer hover:text-my-blue-darker w-6' />
        <Hamburger className='w-6 cursor-pointer' />
      </nav>
      <nav className='row-start-3 row-end-4 flex justify-around'>
        {navIcons}
      </nav>
    </>
  ) : (
    <nav className='flex flex-col'>
      <div className='mt-5 mb-3 '>
        <div className='mx-auto w-[40px] lg:w-[136px]'>
          <Logo className='text-my-blue cursor-pointer hover:text-my-blue-darker w-9' />
        </div>
      </div>
      <div>{navIcons}</div>
    </nav>
  );
}

export default Nav;
