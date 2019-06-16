import React, { Fragment, useState } from 'react';
import { NavBar } from '../../index';
import '../style';

const Demo = () => {
  return (
    <Fragment>
      <NavBar leftContent="leftContent" rightContent="rightContent">
        children
      </NavBar>
      <NavBar
        leftContent="leftContent"
        rightContent="rightContent"
        mode="light"
      >
        children
      </NavBar>
    </Fragment>
  );
};

export default Demo;
