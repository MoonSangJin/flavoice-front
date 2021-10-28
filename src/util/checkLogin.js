const checkLogin = () => {
  const result = localStorage.getItem('token'); //token 가지고 있는것만으로 로그인됐다고 확신할 수 있는가? 추후 논의 필요
  if (result) {
    return true;
  } else {
    return false;
  }
};

export default checkLogin;
