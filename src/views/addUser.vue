<template>
  <div class="container">
    <h1>회원관리</h1>
    <section class="adduser">
      <div class="top_text">
        <h2>회원정보 수정</h2>
      </div>
      <div class="user_form">
        <form>
          <div>
            <label for="user_id">아이디</label>
            <input
              type="text"
              maxlength="15"
              placeholder="아이디"
              id="user_id"
              v-model.trim="user.userId"
            />
          </div>
          <div>
            <label for="user_pw">비밀번호</label>
            <input
              type="password"
              maxlength="20"
              placeholder="비밀번호"
              id="user_pw"
              v-model.trim="user.userPw"
            />
          </div>
          <div>
            <label for="user_name">이름</label>
            <input
              type="text"
              placeholder="성함을 입력해주세요."
              v-model.trim="user.userName"
              id="user_name"
            />
          </div>
          <div>
            <label for="user_birth">생년월일</label>
            <input
              type="num"
              placeholder="생년월일 8자리를 입력해주세요."
              maxlength="8"
              v-model.number="user.userBirth"
              id="user_birth"
            />
          </div>
          <div>
            <label for="user_email">이메일</label>
            <input
              type="email"
              placeholder="이메일 주소를 입력해주세요."
              id="user_email"
              v-model="user.userEmail"
            />
          </div>
          <div>
            <label for="user_phone">휴대전화</label>
            <input
              type="tel"
              placeholder="핸드폰 번호를 - 없이 입력해주세요."
              id="user_phone"
              v-model.number="user.userPhone"
            />
          </div>
          <div>
            <label for="user_gender">성별</label>
            <select
              name="user_gender"
              id="user_gender"
              v-model="user.userGender"
            >
              <option>남</option>
              <option>여</option>
            </select>
          </div>
          <div>
            <label for="church_name">교회명</label>
            <input type="text" value="여의도순복음교회" readonly />
          </div>
          <div>
            <label for="church_code">교회코드</label>
            <input type="text" value="202201" readonly />
          </div>
          <div>
            <a @click="this.$router.go(-1)" class="back">취소</a>
            <a @click="userInfo" class="sub">등록</a>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      user: {
        id: 3,
        userId: "",
        userPw: "",
        userName: "",
        userBirth: "",
        userEmail: "",
        userGender: "",
        join: `${new Date().getFullYear()}.${String(new Date().getMonth()+1).padStart(2, '0')}.${String(new Date().getDate()).padStart(2, '0')}`
      },
    };
  },
  methods: {
    userInfo() {
      if (this.user.userId == "") {
        Swal.fire('Error!', '아이디를 입력해주세요.')
        .then(()=>{
          document.querySelector("#user_id").focus();
        })
      } else if (this.user.userPw == "") {
        Swal.fire('Error!', '비밀번호를 입력해주세요.')
        .then(()=>{
          document.querySelector("#user_pw").focus();
        })
      } else if (this.user.userName == "") {
        alert("성함을 입력해주세요.");
        document.querySelector("#user_name").focus();
      } else if (this.user.userBirth == "") {
        alert("생년월일 8자리를 입력해주세요.");
        document.querySelector("#user_birth").focus();
      } else if (this.user.userEmail == "") {
        alert("이메일을 입력해주세요.");
        document.querySelector("#user_email").focus();
      } else if (this.user.userGender == "") {
        alert("성별을 선택해주세요.");
      } else {
        this.$store.commit('adduser/updateUser',this.user)
        this.$router.push({ path: "/main/userlist"})
      }
    },
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 2rem;
}
form {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  gap: 2.5rem;
  text-align: left;
}
label {
  width: 20rem;
}
form > div {
  display: flex;
  align-items: center;
}
form input {
  width: 40rem;
  border-bottom: 1px solid rgba(56, 68, 68, 0.5);
}
form > div:last-child {
  display: flex;
  gap: 1rem;
  height: 5rem;
  margin-top: 3rem;
}
.back,
.sub {
  height: 100%;
  width: 13rem;
  border-radius: 10px;
  line-height: 5rem;
  text-align: center;
}
.back {
  background-color: lightgray;
}
.sub {
  background-color: var(--sub-color);
  color: var(--white);
}
</style>
