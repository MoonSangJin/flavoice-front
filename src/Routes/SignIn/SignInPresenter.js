import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../components/BackButton';

const SignInPresenter = () => {
  return (
    <div>
      SignInPresenter
      <Link to="/">
        <BackButton />
      </Link>
    </div>
  );
};

export default SignInPresenter;
