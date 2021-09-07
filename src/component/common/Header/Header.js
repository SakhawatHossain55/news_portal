import React from 'react';
import HeaderButton from './HeaderButton';
import HeaderTop from './HeaderTop';

const Header = () => {
  return (
    <div className="header">
      <HeaderTop />
      <HeaderButton />
    </div>
  );
};

export default Header;
