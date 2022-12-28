<template>
  <div class="container">
    <h1>회원관리</h1>
    <section class="userlist">
      <div class="top_text">
        <h2>회원 목록</h2>
        <div class="right_text">
          <div class="search">
            <input type="text" placeholder="회원 성명 또는 아이디를 입력해주세요.">
          </div>
          <div class="add">
            <a href="/main/adduser">+회원 추가</a>
          </div>
        </div>
      </div>
      <div class="table_box">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>ID</th>
              <th>Name</th>
              <th>Church</th>
              <th>Code Number</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Date Joined</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, i) in $store.state.adduser.user" :key="i">
              <td>{{$store.state.adduser.user[i].id}}</td>
              <td>{{$store.state.adduser.user[i].userId}}</td>
              <td>{{$store.state.adduser.user[i].userName}}</td>
              <td>여의도순복음교회</td>
              <td>{{$store.state.adduser.user[i].userCode}}</td>
              <td>{{$store.state.adduser.user[i].userGender}}</td>
              <td>{{$store.state.adduser.user[i].userPhone}}</td>
              <td>{{$store.state.adduser.user[i].join}}</td>
              <td><img src="@/assets/images/edit_icon.png" alt="edit"></td>
              <td><img src="@/assets/images/delet_icon.png" alt="delete" @click="deleteData"></td>
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
  data(){
    return {
      currentPage: 1,
      user: []
    }
  },
  components: {
    Pagination,
  },
  methods: {
    onPageChange(page){
      this.currentPage = page
    },
    addUser(arr){
      this.user.push(arr)
      console.log(this.user)
    }
  },
}
</script>

<style scoped>
@import '../css/style.css';
  .container section {
    max-height: 726px;
    padding: 36px 0;
  }
  .top_text {
    margin-bottom: 2.8rem;
    padding: 0 36px;
  }
</style>