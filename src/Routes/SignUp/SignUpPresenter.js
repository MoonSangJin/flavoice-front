import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackButton from '../../Components/BackButton';
import Logo from '../../../src/logo.png';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const SignUpPresenter = ({ handleChange, handleSubmit }) => {
  return (
    <>
      <Link to="/">
        <BackButton />
      </Link>
      <LogoRow>
        <img src={Logo} alt={'logo'} />
      </LogoRow>
      <AuthContainer id="signupForm" onSubmit={handleSubmit}>
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
          label="password (8 or more characters)"
          onChange={handleChange('password1')}
          margin="dense"
          type="password"
          // TODO : 추후 고도화 작업시 password1,password2 일치 여부와, 8자 이상등 필터링 조건 필요 (상진)
        />
        <TextField
          required
          id="filled-required"
          label="password repeat"
          onChange={handleChange('password2')}
          margin="dense"
          type="password"
        />
        <TextField
          required
          id="filled-required"
          label="phone_number (without -)"
          onChange={handleChange('phone_number')}
          margin="dense"
        />
        <TextField
          required
          id="filled-required"
          label="birthday (YYYY-MM-DD)"
          onChange={handleChange('birthday')}
          margin="dense"
        />
        <TextField
          required
          id="filled-required"
          label="M/F"
          onChange={handleChange('gender')}
          margin="dense"
        />
        <Button type="submit" form="signupForm" variant="contained">
          Complete
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

export default SignUpPresenter;
