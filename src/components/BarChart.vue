<template>
  <div>
    <canvas id="barChart" height="100"></canvas>
    <p>(단위:만 원)</p>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  data:() => ({
    type: 'bar',
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          // stacked: true
        }
      }
    }
  }),
  mounted(){
    this.createChart()
  },
  methods:{
    createChart(){
      const ctx = document.getElementById('barChart').getContext('2d')
      const gradient = ctx.createLinearGradient(0, 0, 0, 600)
      gradient.addColorStop(0, 'rgb(60, 212, 212)')
      gradient.addColorStop(0.4, 'rgb(153, 199, 199 )')
      new Chart(ctx, {
        type:'bar',
        data:{
          labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ],
          datasets: [{
            label: '월별 헌금',
            data: [ 450, 500, 280, 300, 380, 510, 310, 180, 250, 300, 410, 600 ],
            backgroundColor: 
              // 'rgba(60, 212, 212, 0.2)',
              gradient
            ,
          }]
        },
        options:this.options
      })

    }
  }
}
</script>

<style scoped>
  p {
    text-align: right;
    font-family: var(--font-l);
    font-size: 1.2rem;
    margin-top: 6px;
  }
</style>