const goIndex = () => {
  history.back();
};
const login_check = () => {
  const loginId = document.getElementById("login-id");
  const loginPw = document.getElementById("login-pw");
  const result = document.getElementById("login-result");
  const expId = /^(?=.*[a-z])(?=.*\d)[a-z\d-_]{5,10}$/;
  const expPw = /^(?=.*[A-z])(?=.*\d)(?=.*[!#$-_])[A-z\d!#$-_]{6,18}$/;
  if (!loginId_check()) {
    loginId.focus();
    return false;
  } else if (!loginPw_check()) {
    loginPw.focus();
    return false;
  } else {
    if (!loginId.value.match(expId) || !loginPw.value.match(expPw)) {
      result.style.color = "red";
      result.style.filter = "drop-shadow(2px 2px 2px gray)";
      result.innerHTML = `아이디 또는 비밀번호를 잘못 입력했습니다.<br>입력하신 내용을 다시 확인해주세요.`;
      return false;
    } else {
      return true;
    }
  }
};
const loginId_check = () => {
  const loginId = document.getElementById("login-id");
  const result = document.getElementById("login-result");

  if (loginId.value.length == 0) {
    result.style.color = "red";
    result.style.filter = "drop-shadow(2px 2px 2px gray)";
    result.innerHTML = "아이디를 입력해주세요";
    return false;
  } else {
    return true;
  }
};

const loginPw_check = () => {
  const loginPw = document.getElementById("login-pw");
  const result = document.getElementById("login-result");

  if (loginPw.value.length == 0) {
    result.style.color = "red";
    result.style.filter = "drop-shadow(2px 2px 2px gray)";
    result.innerHTML = "비밀번호를 입력해주세요";
    return false;
  } else {
    return true;
  }
};
