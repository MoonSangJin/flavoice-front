import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackButton from '../../Components/BackButton';
import Input from '../../Components/Input';
import Logo from '../../../src/logo.png';
import Text from '../../Components/Text';

const SignInPresenter = ({
  phoneNumber,
  phoneNumberChangeHandler,
  phoneNumberValidationMessage,
  setPhoneNumberValidationMessage,
  password,
  passwordChangeHandler,
  passwordValidationMessage,
  setPasswordValidationMessage,
  handleSignIn,
  isValidPassword,
  handleOnKeyUp,
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
          value={phoneNumber}
          placeholder={'PhoneNumber (without -)'}
          validationMessage={phoneNumberValidationMessage}
          onChange={phoneNumberChangeHandler}
          //toDo(상진) : onFocus 부분
          onKeyUp={handleOnKeyUp}
        />
        <Input
          value={password}
          placeholder={'Password (at least 8 characters)'}
          validationMessage={passwordValidationMessage}
          onChange={passwordChangeHandler}
          onFocus={() => setPasswordValidationMessage('')}
          onBlur={isValidPassword}
          onKeyUp={handleOnKeyUp}
          type={'password'}
        />
        <CompleteButton onClick={handleSignIn}>
          <Text hover textAlign={'center'} white>
            로그인
          </Text>
        </CompleteButton>
      </AuthContainer>
    </>
  );
};
const AuthContainer = styled.div`
  margin-top: 64px;
`;
const LogoRow = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10%;
`;
const CompleteButton = styled.div`
  width: 150px;
  height: 33px;
  background: #4b93d3;
  border-radius: 13px;
  margin: 0 auto;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 10px;
`;

export default SignInPresenter;
