import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../../components/BackButton';

const HomePresenter = () => {
  return (
    <>
      HomePresenter
      <Wrap>
        <Link to="/">
          <BackButton />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/signin">SignIn</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/recorder">Recorder</Link>
        <Link to="/displayComponents">DisplayComponents</Link>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default HomePresenter;
