import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
import checkLogin from '../../util/checkLogin';
import { useHistory } from 'react-router';
const HomeContainer = () => {
  const [loginChecker, setLoginChecker] = useState(false);
  const [userPitch, setUserPitch] = useState('0');

  const checkUserPitch = () => {
    setUserPitch(localStorage.getItem('pitch'));
  };

  useEffect(() => {
    if (checkLogin()) {
      setLoginChecker(true);
    }
    checkUserPitch();
  }, []);

  return (
    <div>
      <HomePresenter {...{ loginChecker, userPitch }} />
    </div>
  );
};

export default HomeContainer;
