import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackButton from '../../Components/BackButton';
import Input from '../../Components/Input';
import Logo from '../../../src/logo.png';
import Text from '../../Components/Text';
import palette from '../../lib/styles/paletts.js';

const SignUpPresenter = ({
  email,
  password,
  emailValidationMessage,
  setEmailValidationMessage,
  passwordValidationMessage,
  setPasswordValidationMessage,
  handleSignUp,
  emailChangeHandler,
  passwordChangeHandler,
  isValidEmail,
  isValidPassword,
  handleOnKeyUp,
  name,
  nameChangeHandler,
  age,
  ageChangeHandler,
}) => {
  return (
    <>
      <Link to="/">
        <BackButton />
      </Link>
      <LogoRow>
        <img src={Logo} alt={'logo'} />
      </LogoRow>
      <AuthContainer>
        <Input
          value={name}
          placeholder={'이름'}
          onChange={nameChangeHandler}
          validationMessage={''}
        />
        <Input
          value={age}
          placeholder={'나이'}
          onChange={ageChangeHandler}
          validationMessage={''}
        />
        <Input
          value={email}
          placeholder={'Email'}
          validationMessage={emailValidationMessage}
          onChange={emailChangeHandler}
          onFocus={() => setEmailValidationMessage('')}
          onBlur={isValidEmail}
          onKeyUp={handleOnKeyUp}
        />
        <Input
          value={password}
          placeholder={'Password'}
          validationMessage={passwordValidationMessage}
          onChange={passwordChangeHandler}
          onFocus={() => setPasswordValidationMessage('')}
          onBlur={isValidPassword}
          onKeyUp={handleOnKeyUp}
          type={'password'}
        />
        <CompleteButton onClick={() => handleSignUp}>
          <Text hover textAlign={'center'} white style={{ paddingTop: '2px' }}>
            가입완료
          </Text>
        </CompleteButton>
      </AuthContainer>
    </>
  );
};
const AuthContainer = styled.div``;
const LogoRow = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10%;
`;
const CompleteButton = styled.div`
  width: 150px;
  height: 33px;
  background: ${palette.logo};
  border-radius: 13px;
  margin: 0 auto;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 10px;
  text-align: center;
`;

export default SignUpPresenter;
