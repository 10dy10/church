<template>  
  <div class="container">
    <h1>교회관리</h1>
    <section class="addmanager">
      <div class="top_text">
        <h2>교회 관리자 등록</h2>
      </div>
      <div class="manager_form">
        <form @submit="checkForm">
          <div>
            <label for="manager_id">아이디</label>
            <input
              type="text"
              maxlength="15"
              placeholder="아이디"
              id="manager_id"
              v-model="manager.managerId"
            />
            <a class="overlap">중복체크</a>
          </div>
          <div>
            <label for="manager_pw">비밀번호</label>
            <input
              type="password"
              maxlength="20"
              placeholder="비밀번호"
              id="manager_pw"
              v-model="manager.pw"
            />
          </div>
          <div>
            <label for="manager_pw2">비밀번호 확인</label>
            <input
              type="password"
              maxlength="20"
              placeholder="비밀번호 확인"
              id="manager_pw2"
              v-model="manager.pw2"
            />
          </div>
          <div>
            <label for="manager_name">이름</label>
            <input
              type="text"
              placeholder="성함을 입력해주세요."
              v-model="manager.manager"
              id="manager_name"
            />
          </div>
          <div>
            <label for="manager_phone">관리자 연락처</label>
            <input
              type="text"
              placeholder="핸드폰 번호를 - 없이 입력해주세요."
              id="manager_phone"
              maxlength="11"
              v-model.number="manager.phone"
            />
          </div>          
          <div>
            <label for="manager_email">관리자 이메일</label>
            <input 
              type="text"
              placeholder="관리자 이메일을 입력해주세요."
              v-model="manager.email"
              id="manager_email"
            />
          </div>
          <div>
            <label for="church_name">교회명</label>
            <input
              type="text"
              v-model.number="manager.churchname"
              placeholder="교회명을 입력해주세요."
              id="church_name"
            />
          </div>
          <div>
            <label for="church_call">교회 연락처</label>
            <input
              type="text"
              placeholder="교회 연락처를 입력해주세요."
              id="church_call"
              maxlength="11"
              v-model.number="manager.churchCall"
            />
          </div>
          <div>
            <label for="church_loca">지역</label>
            <select
              name="church_loca"
              id="church_loca"
              v-model="manager.loca"
            >
              <option>서울</option>
              <option>인천</option>
              <option>경기</option>
              <option>부산</option>
              <option>광주</option>
              <option>대구</option>
              <option>대전</option>
              <option>울산</option>
              <option>강원</option>
              <option>충청</option>
              <option>전라</option>
              <option>경상</option>
              <option>제주</option>
            </select>
          </div>
          <div>
            <a @click="this.$router.go(-1)" class="back">취소</a>
            <button @click="managerInfo" class="sub">등록</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  data(){
    return {
      manager: {
        id: "3",
        managerId: "",
        pw: "",
        pw2: '',
        manager: "",
        phone: "",
        email: "",
        churchname: "",
        churchCall: "",
        loca: ""
      },
      error: []
    }
  },
  methods: {
    checkForm(){
      this.error = []
      
      if(this.manager.managerId == '') {
        Swal.fire('Error!', '아이디를 입력해주세요.')
        .then(()=>{
          document.querySelector('#manager_id').focus()
        })
      } else if (this.manager.pw == '') {
        Swal.fire( 'Error!', '비밀번호를 입력해주세요.')
        .then(()=>{
          document.querySelector('#manager_pw').focus()
        })
      } else if (this.manager.manager == '') {
        Swal.fire('Error!', '성함을 입력해주세요.')
        .then(()=>{
          document.querySelector('#manager_name').focus()
        })
      } else if (this.manager.phone == '') {
        Swal.fire('Error!', '핸드폰번호 8자리를 입력해주세요.')
        .then(()=>{
          document.querySelector('#manager_phone').focus()
        })
      } else if (this.manager.email == '') {
        Swal.fire('Error!', '이메일을 입력해주세요.')
        .then(()=>{
          document.querySelector('#manager_email').focus()
        })
      } else if (this.manager.churchname == '') {
        Swal.fire('Error!', '교회명을 입력해주세요.')
        .then(()=>{
          document.querySelector('#church_name').focus()
        })
      } else if (this.manager.churchCall == '') {
        Swal.fire('Error!', '교회 연락처를 입력해주세요.')
        .then(()=>{
          document.querySelector('#church_call').focus()
        })
      } else if (this.manager.loca == '') {
        Swal.fire('Error!', '지역을 선택해주세요.')
      } else if (!(this.manager.pw === this.manager.pw2)){
        Swal.fire('Error!', '비밀번호와 확인이 다르게 입력되었습니다.')
      } else {
        this.$store.commit('addmanager/addManager', this.manager)
        this.$router.push({ path: "/main/setting" })
      }
    },
    validEmail: function() {
      // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // return re.test(email)
    }
  },
  computed: {

  }
}
</script>

<style scoped>
  form {
    display: flex;
    flex-flow: column;
    gap: 2.5rem;
  }
  form input {
    width: 30rem;
    border-bottom: 1px solid var(--gray);
  }
  .manager_form div {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  label {
    width: 15rem;
    text-align: left;
  }
  .back, .sub {
    width: 13rem;
    height: 5rem;
    border-radius: 10px;
    line-height: 5rem;
    background-color: var(--sub-color);
    color: var(--white);
  }
  .back {
    background-color: rgb(206, 201, 201);
  }
  .overlap {
    width: 10rem;
    height: 4rem;
    line-height: 4rem;
    color: var(--white);
    border-radius: 10px;
    background-color: var(--sub-color);
  }
  select {
    border-bottom: 1px solid var(--gray);
  }
</style>