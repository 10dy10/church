<template>
  <section class="nav">
    <ul>      
      <router-link to="/main/home" class="top_left">
        <div class="logo_box">
          <img src="../../assets/images/logo.png" alt="" />
        </div>
      </router-link>
      <nav>
        <li>
          <router-link to="/main/home">
            <div><img src="../../assets/images/nav_icom1.png" alt="" /></div>
            <p>HOME</p>
          </router-link>
        </li>
        <li>
          <router-link to="/main/userlist">
            <div><img src="../../assets/images/nav_icom2.png" alt="" /></div>
            <p>회원 관리</p>
          </router-link>
        </li>
        <li>
          <router-link to="/main/setting">
            <div><img src="../../assets/images/nav_icom3.png" alt="" /></div>
            <p>교회 관리</p>
          </router-link>
        </li>
        <li>
          <router-link to="/main/board">
            <div><img src="../../assets/images/nav_icom4.png" alt="" /></div>
            <p>자유게시판</p>
          </router-link>
        </li>
        <li>
          <router-link to="/main/notice">
            <div><img src="../../assets/images/nav_icom5.png" alt="" /></div>
            <p>공지사항</p>
          </router-link>
        </li>
        <li>
          <router-link to="/main/qna">
            <div><img src="../../assets/images/nav_icom6.png" alt="" /></div>
            <p>문의 내역</p>
          </router-link>
        </li>
      </nav>
    </ul>
  </section>
</template>

<script>
export default {

};
</script>

