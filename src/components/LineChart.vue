<template>
  <div>
    <canvas id="lineChart" height="58"></canvas>
    <p>(단위:만 원)</p>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  data:() => ({
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
      const ctx = document.getElementById('lineChart').getContext('2d')
      const gradient = ctx.createLinearGradient(0, 0, 0, 300)
      gradient.addColorStop(0, 'rgb(60, 212, 212)')
      gradient.addColorStop(0.4, 'rgb(153, 199, 199 )')
      new Chart(ctx, {
        type:'line',
        data:{
          labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',
            '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29' ,'30', '31'  
          ],
          datasets: [{
            label: '일별 헌금',
            data: [ 50, 70, 42, 30, 40, 22, 31, 10, 8, 17, 12, 9, 
              16, 25, 41, 28, 5, 3, 30, 9, 12, 51, 31, 40, 27, 21, 38, 6, 14, 5, 8
            ],
            backgroundColor: 'rgba(16, 230, 230, 0.1)',
            borderColor: 'rgba(16, 230, 230, .6)',
            borderWidth: 1,
            fill: 'start',
            pointBorderColor: "#00D2D2",
            pointBorderWidth: 5,
            pointRadius:1,
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