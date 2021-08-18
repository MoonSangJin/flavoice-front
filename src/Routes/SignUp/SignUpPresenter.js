import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackButton from '../../Components/BackButton';
import Input from '../../Components/Input';
import Logo from '../../../src/logo.png';
import Text from '../../Components/Text';
import palette from '../../lib/styles/paletts.js';

const SignUpPresenter = ({
  name,
  nameChangeHandler,
  phoneNumber,
  phoneNumberChangeHandler,
  age,
  ageChangeHandler,
  password,
  passwordValidationMessage,
  setPasswordValidationMessage,
  handleSignUp,
  passwordChangeHandler,
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
          value={name}
          placeholder={'Name'}
          onChange={nameChangeHandler}
          validationMessage={''}
        />
        <Input
          value={phoneNumber}
          placeholder={'PhoneNumber (without -)'}
          onChange={phoneNumberChangeHandler}
          validationMessage={''}
        />
        <Input
          value={age}
          placeholder={'Age (YYYY-MM-DD)'}
          onChange={ageChangeHandler}
          validationMessage={''}
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
        <CompleteButton onClick={handleSignUp}>
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
