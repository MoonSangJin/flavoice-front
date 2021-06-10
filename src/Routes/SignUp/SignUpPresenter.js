import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../components/BackButton';

const SignUpPresenter = () => {
  return (
    <div>
      SignUpPresenter
      <Link to="/">
        <BackButton />
      </Link>
    </div>
  );
};

export default SignUpPresenter;
