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
      <Form style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/">
          <BackButton />
        </Link>
        <Link to="/">
          <Button content={'Home'} />
        </Link>
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
