import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
import checkLogin from '../../util/checkLogin';

const HomeContainer = () => {
  const [loginChecker, setLoginChecker] = useState(false);

  useEffect(() => {
    if (checkLogin()) {
      setLoginChecker(true);
    }
  }, []);

  return (
    <div>
      <HomePresenter {...{ loginChecker }} />
    </div>
  );
};

export default HomeContainer;
