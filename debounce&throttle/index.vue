<template>
  <div class="about">
    <el-input v-model="inputVal" placeholder="请输入内容" @input="inputChange"></el-input>
  </div>
</template>

<script>
import {_debounce, _throttle} from './utils.js'
export default {
  data() {
    return {
      inputVal:'',
      count:0,
    };
  },
  methods: {
    // input值改变时触发
    inputChange:_debounce(function(){
      console.log(this.inputVal)
    },1000),
    // 滚动条滚动时触发
    scroll(){
      this.count += 1;
      console.log('scroll触发了'+ this.count +'次')
    }
  },
  mounted() {
    window.addEventListener('scroll', _throttle(this.scroll,5000));
  },
};
</script>

<style lang="stylus" scoped>
.about{
  width:100%;
  height:800px;
}
</style>
