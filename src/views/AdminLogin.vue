<template>
  <main>
    <article>
      <div>
        <div class="img_box">
          <img src="../assets/images/login_symbol.png" />
        </div>
        <div class="login_txt">
          <h1>Get Started</h1>
          <h2>모바일 교회앱 양과목장의 관리자 페이지입니다.</h2>
        </div>  
      </div>
    </article>
    <article>
      <div>
        <div class="login_top">
          <h3>로그인</h3>
          <h4>관리자 로그인을 해주세요.</h4>
        </div>
        <div class="login_mid">
          <form>
            <label for="user_id">아이디</label>
            <input type="text" placeholder="ID" id="user_id" />
            <label for="user_password">비밀번호</label>
            <input
              type="password"
              name="user_password"
              placeholder="password"
              id="user_password"
            />
            <router-link to="/main/home">
              <button>로그인</button>
            </router-link>
          </form>
        </div>
        <div class="login_bot">
          <div class="save_id">
            <input type="checkbox" name="" id="saveid" />
            <label for="saveid">아이디 저장</label>
          </div>
          <div class="set_pw">비밀번호 재설정</div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
export default {

};
</script>

<style scoped>
  #app {
    background-color: var(--white);
  }
  main {
    height: 100vh;
    display: flex;
    overflow: hidden;
  }
  article:first-child {
    width: 50%;
    height: 100%;
    position: relative;
    background-image: url(../assets/images/login_backimg.png);
  }
  article:first-child > div {
    display: flex;
    flex-flow: column;
    gap: 2.6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h1 {
    font-family: var(--font-p);
    font-size: 4.2rem;
    font-weight: 700;
    line-height: 6.3rem;
    color: var(--white);
  }
  h2 {
    font-size: 1.6rem;
    color: var(--white);
    font-family: var(--font-l);
    line-height: 2.1rem;
  }
  article:last-child {
    width: 50%;
    height: 100%;
    position: relative;
  }
  article:last-child > div {
    position: absolute;
    top: 50%;
    left: 8.6rem;
    transform: translateY(-50%);
    width: 35.2rem;
  }
  h3 {
    font-family: var(--font-b);
    font-size: 2.8rem;
    line-height: 3.7rem;
    margin-bottom: 6px;
  }
  h4 {
    font-family: var(--font-l);
    font-size: 1.6rem;
    line-height: 2.1rem;
  }
  .login_top {
    margin-bottom: 4.1rem;
    text-align: left;
  }
  .login_mid {
    margin-bottom: 2.4rem;
  }
  form {
    display: flex;
    text-align: left;
    flex-flow: column;
  }
  form label {
    font-family: var(--font-b);
    font-size: 1.6rem;
    margin-bottom: .9rem;
  }
  form input {
    width: 100%;
    height: 5.6rem;
    border-radius: 4px;
    border: 1px solid #F2F2F2;
    background-color: var(--back-gray);
    margin-bottom: 2.1rem;
    padding: 1rem;
  }
  form button {
    width: 100%;
    height: 5.6rem;
    border-radius: 4px;
    background-color: var(--main-color);
    color: var(--white);
    font-family: var(--font-b);
    font-size: 1.6rem;
  }
  .login_bot {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-content: center;
  }
  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    border: 1px solid #D1D1D1;
    border-radius: 4px;
    position: relative;
  }
  input[type="checkbox"]::after {
    display: none;
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 9px;
    height: 9px;
    border-radius: 2px;
    background-color: var(--main-color);
  }
  input[type="checkbox"]:checked::after {
    display: block;
  }
  .save_id {
    display: flex;
    align-items: center;
  }
  .set_pw {
    line-height: 2.4rem;
  }
  @media screen and (max-width: 900px) {
    article:last-child > div {
      left: 10px;
    }
  }

  @media screen and (max-width: 745px) {
    main {
      /* padding: 0 1.8rem; */
      flex-flow: column;
    }
    article:first-child, article:last-child {
      width: 100%;
    }
    article:first-child {
      height: 55%;
      background-size: cover;
    }
    article:first-child > div {
      gap: 1rem;
    }
    article:last-child > div {
      left: 50%;
      transform: translate(-50%, -50%);
    }
    h1 {
      font-size: 2.4rem;
    }
    .img_box img {
      width: 40%;
    }
  }
</style>
