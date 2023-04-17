const save_check = () => {
  // focus 부분
  const memberId = document.getElementById("member-id");
  const memberPw = document.getElementById("member-pw");
  const memberPwc = document.getElementById("pw-confirm");
  const memberName = document.getElementById("member-name");
  if (!memberId_check()) {
    memberId.focus();
    return false;
  } else if (!memberPw_check()) {
    memberPw.focus();
    return false;
  } else if (!pwConfirm_check()) {
    memberPwc.focus();
    return false;
  } else if (!memberName_check()) {
    memberName.focus();
    return false;
  } else {
    return true;
  }
};
const memberId_check = () => {
  const memberId = document.getElementById("member-id").value;
  const idResult = document.getElementById("id-result");
  const lock = document.getElementById("id-check");
  const expId = /^(?=.*[a-z])(?=.*\d)[a-z\d-_]{5,10}$/;
  idResult.style.color = "red";
  idResult.style.filter = "drop-shadow(2px 2px 2px gray)";
  idResult.style.margin = "10px";
  lock.style.color = "red";
  lock.className = "bi bi-check-square-fill input-group-text";

  if (memberId.length == 0) {
    idResult.innerHTML = "필수입력입니다";
    return false;
  } else if (!memberId.match(expId)) {
    idResult.innerHTML =
      "5~10자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
    return false;
  } else {
    idResult.style.color = "green";
    lock.style.color = "green";
    idResult.innerHTML = "좋아요!";
    return true;
  }
};
const memberPw_check = () => {
  const memberPw = document.getElementById("member-pw").value;
  const pwResult = document.getElementById("pw-result");
  const lock = document.getElementById("pw-lock");
  const expPw = /^(?=.*[A-z])(?=.*\d)(?=.*[!#$-_])[A-z\d!#$-_]{6,18}$/;
  pwResult.style.color = "red";
  pwResult.style.filter = "drop-shadow(2px 2px 2px gray)";
  pwResult.style.margin = "10px";
  lock.style.color = "red";
  lock.className = "bi bi-lock-fill input-group-text";
  if (memberPw.length == 0) {
    pwResult.innerHTML = "필수입력입니다";
    return false;
  } else if (!memberPw.match(expPw)) {
    pwResult.innerHTML =
      "8~16자 영문 대 소문자, 숫자, 특수문자(!,#,$,-,_)를 사용하세요.";
    return false;
  } else {
    lock.className = "bi bi-unlock-fill input-group-text";
    pwResult.style.color = "green";
    lock.style.color = "green";
    pwResult.innerHTML = "좋아요!";
    return true;
  }
};
const pwConfirm_check = () => {
  const memberPw = document.getElementById("member-pw").value;
  const memberPwc = document.getElementById("pw-confirm").value;
  const pwcResult = document.getElementById("pwc-result");
  const expPwc = /^(?=.*[A-z])(?=.*\d)(?=.*[!#$-_])[A-z\d!#$-_]{6,18}$/;
  const lock = document.getElementById("pwc-lock");
  pwcResult.style.color = "red";
  pwcResult.style.filter = "drop-shadow(2px 2px 2px gray)";
  pwcResult.style.margin = "10px";
  lock.style.color = "red";
  lock.className = "bi bi-lock-fill input-group-text";
  if (memberPwc.length == 0) {
    pwcResult.innerHTML = "필수입력입니다.";
    return false;
  } else if (memberPw != memberPwc) {
    pwcResult.innerHTML = "비밀번호가 일치하지 않습니다.";
    return false;
  } else if (memberPw == memberPwc) {
    lock.className = "bi bi-unlock-fill input-group-text";
    pwcResult.style.color = "green";
    lock.style.color = "green";
    pwcResult.innerHTML = "좋아요!";
    return true;
  }
};
const memberName_check = () => {
  const memberName = document.getElementById("member-name").value;
  const nameResult = document.getElementById("name-result");
  const lock = document.getElementById("name-check");
  nameResult.style.color = "red";
  nameResult.style.filter = "drop-shadow(2px 2px 2px gray)";
  nameResult.style.margin = "10px";
  lock.style.color = "red";
  lock.className = "bi bi-check-square-fill input-group-text";
  if (memberName.length == 0) {
    nameResult.innerHTML = "필수입력입니다.";
    return false;
  } else if (memberName.length < 2) {
    nameResult.innerHTML = "너무 짧습니다";
    return false;
  } else if (memberName.length >= 2) {
    nameResult.style.color = "green";
    lock.style.color = "green";
    nameResult.innerHTML = "좋아요!";
    return true;
  }
};

const phon_number1 = () => {
  const phonNumber1 = document.getElementById("member-phon1");
  const phonNumber2 = document.getElementById("member-phon2");
  const phonIcon = document.getElementById("phon-icon");

  if (phonNumber1.value.length != 3) {
    phonIcon.style.color = "black";
    phonIcon.className = "bi bi-reception-1 input-group-text";
  } else if (phonNumber1.value.length === 3) {
    phonIcon.className = "bi bi-reception-2 input-group-text";
    phonNumber2.focus();
  }
};
const phon_number2 = () => {
  const phonNumber2 = document.getElementById("member-phon2");
  const phonNumber3 = document.getElementById("member-phon3");
  const phonIcon = document.getElementById("phon-icon");

  if (phonNumber2.value.length != 4) {
    phonIcon.style.color = "black";
    phonIcon.className = "bi bi-reception-2 input-group-text";
  } else if (phonNumber2.value.length === 4) {
    phonIcon.className = "bi bi-reception-3 input-group-text";
    phonNumber3.focus();
  }
};
const phon_number3 = () => {
  const phonNumber2 = document.getElementById("member-phon2");
  const phonNumber3 = document.getElementById("member-phon3");
  const phonIcon = document.getElementById("phon-icon");

  if (phonNumber3.value.length != 4) {
    phonIcon.style.color = "black";
    phonIcon.className = "bi bi-reception-3 input-group-text";
    phonNumber3.focus();
  } else if (phonNumber3.value.length === 4) {
    phonIcon.className = "bi bi-reception-4 input-group-text";
    phonIcon.style.color = "green";
  }
};
const domain_select = () => {
  const domainText = document.getElementById("member-domain");
  const domain = document.getElementById("domain");
  domainText.value = domain.value;
};

function sample6_execDaumPostcode() {
  new daum.Postcode({
    oncomplete: function (data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

      // 각 주소의 노출 규칙에 따라 주소를 조합한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      var addr = ""; // 주소 변수
      var extraAddr = ""; // 참고항목 변수

      //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === "R") {
        // 사용자가 도로명 주소를 선택했을 경우
        addr = data.roadAddress;
      } else {
        // 사용자가 지번 주소를 선택했을 경우(J)
        addr = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
      if (data.userSelectedType === "R") {
        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
          extraAddr += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== "" && data.apartment === "Y") {
          extraAddr +=
            extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraAddr !== "") {
          extraAddr = " (" + extraAddr + ")";
        }
        // 조합된 참고항목을 해당 필드에 넣는다.
        document.getElementById("sample6_extraAddress").value = extraAddr;
      } else {
        document.getElementById("sample6_extraAddress").value = "";
      }

      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      document.getElementById("sample6_postcode").value = data.zonecode;
      document.getElementById("sample6_address").value = addr;
      // 커서를 상세주소 필드로 이동한다.
      document.getElementById("sample6_detailAddress").focus();
    },
  }).open();
}
