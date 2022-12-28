<template>
  <div class="container">
    <h1>자유게시판</h1>
    <router-view></router-view>
    <section class="board">
      <div class="top_text">
        <h2>자유게시판 관리</h2>
        <div class="search">
          <input type="text" placeholder="검색어를 입력하세요.">
        </div>
      </div>
      <div class="table_box">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Date</th>
              <th>Writer</th>
              <th>Church</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>
                <a href="/main/board/post">문의 제목이 나타납니다.</a>
              </td>
              <td>2022.04.04</td>
              <td>김민지</td>
              <td>여의도순복음교회</td>
              <td><img src="../assets/images/delet_icon.png" alt=""></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </section>
  </div>
</template>

<script>
import Pagination from '@/components/common/Pagination.vue'

export default {
  components: {
    Pagination
  }
}
</script>

<style scoped>
  .container section {
    max-height: 726px;
    padding: 36px 0;
  }
  .top_text {
    padding: 0 36px;
    margin-bottom: 2.8rem;
  }
</style>