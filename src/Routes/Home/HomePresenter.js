import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../../Components/BackButton';
import Form from '../../Components/Form';
import Text from '../../Components/Text';

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
          <Link to="/signin">
            <Text>SignIn</Text>
          </Link>
          <Link to="/signup">
            <Text>SignUp</Text>
          </Link>
          <Link to="/recorder">
            R<Text>ecorder</Text>
          </Link>
          <Link to="/displayComponents">
            <Text>DisplayComponents</Text>
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
