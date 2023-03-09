import React from 'react';

import IconBtnMMenu from '../../helpers/IconBtnMMenu';
import { ReactComponent as BuyIcon } from '../../assets/icons/headerbar/plus.svg';
import { ReactComponent as SellIcon } from '../../assets/icons/headerbar/minus.svg';
import { ReactComponent as SendIcon } from '../../assets/icons/headerbar/up_arrow.svg';
import { ReactComponent as ReceiveIcon } from '../../assets/icons/headerbar/down_arrow.svg';
import { ReactComponent as ConvertIcon } from '../../assets/icons/headerbar/convert.svg';
import { ReactComponent as MoreIcon } from '../../assets/icons/headerbar/more.svg';

function MobileTransactionMenu() {
  const icons = [
    { iconComp: <BuyIcon />, name: 'Buy' },
    { iconComp: <SellIcon />, name: 'Sell' },
    { iconComp: <SendIcon />, name: 'Send' },
    { iconComp: <ReceiveIcon />, name: 'Receive' },
    { iconComp: <ConvertIcon />, name: 'Convert' },
  ];
  const moreIcon = { iconComp: <MoreIcon />, name: 'More' };

  return (
    <div className='mb-3 max-w-screen-sm grid-flow-col grid grid-cols-MMenuColGrid  justify-items-center'>
      {icons.map((icon) => (
        <IconBtnMMenu key={icon.name} name={icon.name}>
          {icon.iconComp}
        </IconBtnMMenu>
      ))}
    </div>
  );
}

export default MobileTransactionMenu;
