<template>
  <div class="wrap">
    <div class="left">
      <div class="content">
        <h1>Oops!</h1>
        <h2>페이지를 찾을 수 없습니다.<br>
        올바른 URL을 입력하셨는지 확인 부탁드립니다.</h2>
        <div class="btn">
          <div class="home">
            <router-link to="/main/home">홈으로</router-link>
          </div>
          <div class="pre">
            <a @click="this.$router.go(-1)">이전 페이지</a>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .wrap { 
    width: 100%;
    height: 100vh;
    display: flex;
  }
  .left {
    width: 50%;
    position: relative;
  }
  .left .content {
    position: absolute;
    top: 142px;
    left: 50%;
    transform: translateX(-50%);
    text-align: left;
    color: var(--dark-green);
  }
  .left h1 {
    font-family: var(--font-p);
    font-size: 14rem;
    line-height: 21rem;
    font-weight: 800;
    margin-bottom: 15px;
  }
  .left h2 {
    font-family: var(--font-l);
    font-size: 1.6rem;
    line-height: 2.6rem;
    margin-bottom: 49px; 
  }
  .left .btn {
    display: flex;
    gap: 16px;
  }
  .left .btn .home, .left .btn .pre {
    width: 180px;
    height: 48px;
  }
  .home a, .pre a{
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 48px;
    border: 1px solid rgba(56, 68, 68, .16);
  }
  .right {
    width: 50%;
    background-image: url(../assets/images/404_img.png);
    background-position: center;
    background-repeat: no-repeat;
  }
</style>