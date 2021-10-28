import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackButton from '../../Components/BackButton';
import Logo from '../../../src/logo.png';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';

const SignInPresenter = ({ handleChange, handleSubmit }) => {
  const history = useHistory();
  const handleSignupButton = () => {
    history.push('/signup');
  };
  return (
    <>
      <LogoRow>
        <img src={Logo} alt={'logo'} />
      </LogoRow>
      <AuthContainer id="signinForm" onSubmit={handleSubmit}>
        <TextField
          required
          id="filled-required"
          label="Email"
          onChange={handleChange('email')}
          margin="dense"
        />
        <TextField
          required
          id="filled-required"
          label="password"
          onChange={handleChange('password')}
          margin="dense"
          type="password"
        />
        <Button
          type="submit"
          form="signinForm"
          variant="contained"
          style={{ marginBottom: '8px', marginTop: '5px' }}
        >
          Login
        </Button>

        <Button type="button" variant="contained" onClick={handleSignupButton}>
          Sign UP
        </Button>
      </AuthContainer>
    </>
  );
};

const AuthContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10%;
`;
const LogoRow = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10%;
`;

export default SignInPresenter;
