<template>
  <div class="container">
    <section class="sec01">
      <div class="main_set">
        <h1>종합 헌금 관리</h1>
        <h2>날짜별 통계 확인 및 헌금을 종합적으로 관리하세요.</h2>
        <div class="today">
          <p>Today</p>
          <p>{{ days }}</p>
          <p>{{ times }}</p>
        </div>
      </div>
    </section>
    <div class="grid">
      <section class="sec02">
        <h3>오늘의 헌금</h3>
        <div class="offer_box">
          <div class="first">
            <div class="church_name">
              <span>여의도순복음교회</span>
            </div>
            <div class="today_offer">
              <span>+62,000,000</span>
              <span>20분 전</span>
            </div>
          </div>
          <div class="second">
            <div class="church_name">
              <span>강남교회</span>
            </div>
            <div class="today_offer">
              <span>+100,000,000</span>
              <span>2시간 전</span>
            </div>            
          </div>
          <div class="third">
            <div class="church_name">
              <span>순복음교회</span>
            </div>
            <div class="today_offer">
              <span>+1,000,000,000</span>
              <span>5시간 전</span>
            </div> 
          </div>
          <div class="etc"></div>
        </div>
      </section>
      <section class="sec03">
        <div class="top_text">
          <h3>월별 현금</h3>
          <select>
            <option v-for="year in years" :key="year">{{ year }}</option>
          </select>
        </div>
        <BarChart />
      </section>
    </div>
    <section class="sec04">
      <div class="top_text">
        <h3>일별 헌금</h3>
        <div class="select_month">
          <select>
            <option v-for="year in years" :key="year">{{ year }}</option>
          </select>
          <p> / </p>
          <select>
            <option v-for="month in months" :key="month">{{ month }}</option>
          </select>
        </div>
      </div>
      <LineChart />
    </section>
    <section class="sec05">
      <div>
        <h3>교회별 누적 헌금 금액</h3>
        <div class="top_text">
          <h4 class="total_offer">400,000,000 <span>￦</span></h4>
          <div class="search">
            <input type="text" placeholder="교회명 또는 코드번호를 입력해주세요.">
          </div>
        </div>
      </div>
      <div class="table_box">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Church</th>
              <th>Code Number</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>106</td>
              <td>여의도순복음교회</td>
              <td>2022064513</td>
              <td>20,621,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </section>
    <section class="sec06">
      <div class="top_text">
        <h3>회원별 누적 헌금 금액</h3>
        <div class="search">
          <input type="text" placeholder="회원 성명 또는 아이디를 입력해주세요.">
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
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>106</td>
              <td>abc123</td>
              <td>김민지</td>
              <td>여의도순복음교회</td>
              <td>2022040511</td>
              <td>16,12,000,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
      <div class="go_top" @click="goTop" v-if="blockTop">
        <p>^</p>
        <p>TOP</p>
      </div>
    </section>
  </div>
</template>

<script>
import BarChart from '../components/BarChart.vue'
import LineChart from '../components/LineChart.vue'
import Pagination from '../components/common/Pagination.vue'

export default {
  components: {
    BarChart,
    LineChart,
    Pagination,
  },
  data(){
    return {
      years: [],
      days: '',
      times: '',
      months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      blockTop: false,
    }
  },
  created(){
    this.yearOpt()
    this.setDay()
    this.setTimes()
    setInterval(this.setTimes.bind(this), 1000)
  },
  methods: {
    yearOpt(){
      const thisYear = new Date().getFullYear()
      for( let i = thisYear; i >= 2010; i -= 1) {
        this.years.push(i)
      }
    },
    setDay(){
      const date = new Date()
      const year = String(date.getFullYear()).substring(2, 4)
      const month = String(date.getMonth()+1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      this.days = `${year}.${month}.${day}`
    },
    setTimes(){
      const date = new Date()
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      const seconds = String(date.getSeconds()).padStart(2, '0')
      this.times = `${hours}:${minutes}:${seconds}`
    },
    goTop(){
      window.scrollTo({ top:0, behavior: 'smooth' })
    },
    handleScroll(){
      const onTop = document.documentElement.scrollTop
      if (onTop > 200) {
        this.blockTop = true
      } else {
        this.blockTop = false
      }
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
@import '../css/style.css';
</style>