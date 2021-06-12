/*
import React, { useState } from 'react';
import { authApi, openDialog } from '../../../api';
import {
  validateID,
  validatePW,
  validateName,
  validateBirth,
  validateEmail,
} from '../../../api/validation';
import SignUpPresenter from './SignUpPresenter';

const SignUpContainer = ({ navigation }) => {
  const [state, setState] = useState({
    id: '',
    pw: '',
    pwCheck: '',
    name: '',
    gender: '',
    birth: '',
    email: '',
  });

  const moveTo = (screen) => () => navigation.navigate(screen);
  const replaceTo = (screen) => () => navigation.replace(screen);

  const signup = async () => {
    if (!validateID(state.id)) {
      openDialog('회원가입 실패', '올바른 아이디를 입력해주세요.');
      return;
    } else if (!validatePW(state.pw)) {
      openDialog('회원가입 실패', '올바른 비밀번호를 입력해주세요.');
      return;
    } else if (state.pw !== state.pwCheck) {
      openDialog('회원가입 실패', '비밀번호를 다시 확인해주세요.');
      return;
    } else if (!validateName(state.name)) {
      openDialog('회원가입 실패', '올바른 이름을 입력해주세요.');
      return;
    } else if (!validateBirth(state.birth)) {
      openDialog('회원가입 실패', '올바른 생년월일을 입력해주세요.');
      return;
    } else if (!validateEmail(state.email)) {
      openDialog('회원가입 실패', '올바른 이메일을 입력해주세요.');
      return;
    }

    const result = await authApi.signup(
      state.id,
      state.pw,
      state.name,
      state.gender,
      state.birth,
      state.email
    );
    const {
      status: { code },
      errors,
      data,
    } = result;

    if (code === 200) {
      navigation.replace('SignUpResult');
    } else openDialog('회원가입 실패', errors.message);
  };
  return (
    <SignUpPresenter
      moveTo={moveTo}
      signup={signup}
      state={state}
      setState={setState}
    />
  );
};

export default SignUpContainer;

TODO(상진) 
API호출 수정
*/
