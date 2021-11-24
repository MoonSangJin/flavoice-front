import React, { useEffect } from 'react';
import Router from './Components/Router';
import Template from './lib/styles/Template';
import axios from 'axios';
const App = () => {
  const onSilentRefresh = async (refreshToken) => {
    try {
      const refreshResult = await axios.post(
        'https://flavoice.shop/accounts/token/refresh/',
        { refresh: refreshToken }
      );
      const refreshAccessToken = refreshResult['data']['access'];
      if (localStorage.getItem('token') !== refreshAccessToken) {
        console.log('access token과 refresh access 달라서 ACCESS 갱신되었음');
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${refreshAccessToken}`;
        localStorage.setItem('token', refreshAccessToken);
      }
    } catch (e) {
      alert('로그아웃 이후 다시 진행해주세요');
      console.log('refresh실패');
      console.log(e);
    }
  };

  useEffect(() => {
    onSilentRefresh(localStorage.getItem('refreshToken'));
  }, []);
  return (
    <>
      <Template>
        <Router />
      </Template>
    </>
  );
};

export default App;
