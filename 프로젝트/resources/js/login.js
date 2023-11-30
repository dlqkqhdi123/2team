// 기본정보 관련 변수 선언
const idKey = "userId";
const memberId = document.querySelector("#id");
const password = document.querySelector("#password");
const remCheck = document.querySelector("#remember-check");
const loginInfo = localStorage.getItem(idKey);
// 로그인
function loginCheck() {
  if (memberId.value == "") {
    alert("아이디를 입력해주세요.");
    setTimeout(function () {
      memberId.focus();
      return false;
    }, 5);
  } else if (password.value == "") {
    alert("비밀번호를 입력해주세요.");
    setTimeout(function () {
      password.focus();
      return false;
    }, 5);
  } else {
    setTimeout(function () {
      if (frm.idcheck.checked) saveLogin(frm.id.value);
      else saveLogin("");
      location.href = "../../index_login.html";
      return true;
    }, 5);
  }
}
// 아이디저장
if (loginInfo != null) {
  memberId.value = loginInfo;
  console.log("아이디");
}

function confirmSave(checkbox) {
  let isRemember;
  if (checkbox.checked) {
    isRemember = confirm(
      "이 PC에 로그인 정보를 저장하시겠습니까? PC방등의 공공장소에서는 개인정보가 유출될 수 있으니 주의해주십시오."
    );
    if (!isRemember) checkbox.checked = false;
  }
}

function setsave(name, value, expiredays) {
  let today = new Date();
  today.setDate(today.getDate() + expiredays);
  document.cookie =
    name +
    "=" +
    escape(value) +
    "; path=/; expires=" +
    today.toGMTString() +
    ";";
}
function saveLogin(id) {
  if (id != "") {
    setsave("userid", id, 7);
  } else {
    setsave("userid", id, -1);
  }
}

function getLogin() {
  let cook = document.cookie + ";";
  let idx = cook.indexOf(key, 0);
  let val = "";
  if (idx != -1) {
    cook = cook.substring(idx, cook.length);
    begin = cook.indexOf("=", 0) + 1;
    end = cook.indexOf(";", begin);
    val = unescape(cook.substring(begin, end));
  }
  if (val != "") {
    document.frm.id.value = id;
    document.frm.idcheck.checked = true;
  }
}
