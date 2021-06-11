import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Form from '../../Components/Form';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import Logo from '../../logo.png';

const HomePresenter = () => {
  return (
    <>
      <Form style={{ display: 'flex', alignItems: 'center' }}>
        <img src={Logo} style={{ marginBottom: '30px' }} />
        <Link to="/signin">
          <Button content={'Sign In'} />
        </Link>
        <Link to="/signup">
          <Button content={'Sign Up'} />
        </Link>
        <Link to="/recorder">
          <Button content={'Recorder'} />
        </Link>
        <Link to="/displayComponents">
          <Button content={'Display Components'} />
        </Link>
      </Form>
    </>
  );
};

export default HomePresenter;
