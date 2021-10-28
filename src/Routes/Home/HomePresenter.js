import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Form from '../../Components/Form';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import Logo from '../../logo.png';

const HomePresenter = ({ loginChecker }) => {
  return (
    <>
      <Form style={{ display: 'flex', alignItems: 'center' }}>
        <img src={Logo} style={{ marginBottom: '30px' }} />
        {!loginChecker && (
          <Link to="/">
            <Button content={'Sign In'} />
          </Link>
        )}
        <Link to="/recorder">
          <Button content={'Recorder'} />
        </Link>
        <Link to="/displayResult">
          <Button content={'Display Result'} />
        </Link>
        {/* <Link to="/displayComponents">
          <Button content={'Display Components'} />
        </Link> */}
      </Form>
    </>
  );
};

export default HomePresenter;
