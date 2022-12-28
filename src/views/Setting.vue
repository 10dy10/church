<template>
  <div class="container">
    <h1>교회관리</h1>
    <section class="setting">
      <div class="top_text">
        <h2>교회목록</h2>
        <div class="right_text">
          <div class="search">
            <input type="text" placeholder="교회명 또는 코드번호를 입력해주세요.">
          </div>
          <div class="add">
            <a href="/main/addmanager">+교회 추가</a>
          </div>
        </div>
      </div>
      <div class="table_box">        
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Code Number</th>
              <th>Manager</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Total Amount of Donation</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(manager, i) in $store.state.addmanager.manager" :key="i">
              <td>{{$store.state.addmanager.manager[i].id}}</td>
              <td>{{$store.state.addmanager.manager[i].churchname}}</td>
              <td>{{$store.state.addmanager.manager[i].codenum}}</td>
              <td>{{$store.state.addmanager.manager[i].manager}}</td>
              <td>{{$store.state.addmanager.manager[i].loca}}</td>
              <td>{{$store.state.addmanager.manager[i].phone}}</td>
              <td>{{$store.state.addmanager.manager[i].total}}</td>
              <td><img src="@/assets/images/edit_icon.png" alt="수정"></td>
              <td><img src="@/assets/images/delet_icon.png" alt="지우기"></td>
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
  components: { Pagination },
  data(){
    return {
      manager: []
    }
  },
  methods: {
    addMana(arr){
      this.manager.push(arr)
    }
  }
}
</script>

<style scoped>
@import '../css/style.css';
  .container section {
    max-height: 726px;
    padding: 36px 0;
  }
  .top_text {
    padding: 0 36px;
    margin-bottom: 2.8rem;
  }
</style>