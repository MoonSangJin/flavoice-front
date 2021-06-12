/*
import React, { useContext, useState } from 'react';
import { validateID, validatePW } from '../../../api/validation';
import { authApi, openDialog } from '../../../api';
import SignInPresenter from './SignInPresenter';
import { GlobalContext } from '../../../components/GlobalContext';

const SignInContainer = ({ navigation }) => {
  const [state, setState] = useState({
    id: '',
    pw: '',
  });

  const [globalState, setGlobalState] = useContext(GlobalContext);

  const moveTo = (screen) => () => navigation.navigate(screen);
  const replaceTo = (screen) => () => navigation.replace(screen);

  const login = async () => {
    try {
      const result = await authApi.signin(state.id, state.pw);
      const {
        status: { code },
        errors,
        data,
      } = result;

      if (code === 200) {
        setGlobalState((state) => ({ ...state, isUser: true }));
        navigation.replace('HomeScreen');
      } else if (!validateID(state.id))
        openDialog('로그인 실패', '올바른 아이디를 입력해주세요.');
      else if (!validatePW(state.pw))
        openDialog('로그인 실패', '올바른 비밀번호를 입력해주세요.');
      else openDialog('로그인 실패', errors.message);
    } catch (e) {
      openDialog('Error', e);
    }
  };

  return (
    <SignInPresenter
      moveTo={moveTo}
      login={login}
      state={state}
      setState={setState}
    />
  );
};

export default SignInContainer;


TODO(상진) 
API호출 수정
*/
