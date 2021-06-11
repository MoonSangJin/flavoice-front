import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../../components/BackButton';
import Form from '../../components/Form';
import Text from '../../components/Text';

const HomePresenter = () => {
  return (
    <>
      HomePresenter
      <Wrap>
        <Form>
          <Link to="/">
            <BackButton />
          </Link>
          <Link to="/">
            <Text> Home</Text>
          </Link>
          <Link to="/signin">SignIn</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/recorder">Recorder</Link>
          <Link to="/displayComponents">DisplayComponents</Link>
        </Form>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default HomePresenter;
