<template>
  <div ref="chartDOM" class="chartDOM" />
</template>

<script>
export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = this.$echarts.init(this.$refs.chartDOM);
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  }
};
</script>

<style lang="scss">
.chartDOM {
  height: 300px;
}
</style>
