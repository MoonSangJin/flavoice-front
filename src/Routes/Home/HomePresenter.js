import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../../Components/BackButton';
import Form from '../../Components/Form';
import Text from '../../Components/Text';
import Button from '../../Components/Button';

const HomePresenter = () => {
  return (
    <>
      <Text>FLAVOICE</Text>
      <Wrap>
        <Form>
          <Link to="/">
            <BackButton />
          </Link>
          <Link to="/">
            <Text>Home</Text>
          </Link>
          <Link to="/signin">
            <Text hover>SignIn</Text>
          </Link>
          <Link to="/signup">
            <Text hover>SignUp</Text>
          </Link>
          <Link to="/recorder">
            <Text hover>Recorder</Text>
          </Link>
          <Link to="/displayComponents">
            <Text hover>DisplayComponents</Text>
          </Link>
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
