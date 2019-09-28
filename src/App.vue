<template>
  <div id="app">
    <div class="__p_1366_uid_456">
        <div class="__p_1366_uid_457">
          <router-link to="/"><span class="__p_1366_uid_458">首页</span></router-link>
          <router-link to="/novel"><span class="__p_1366_uid_458">文章</span></router-link>
          <router-link to="/label"><span class="__p_1366_uid_458">标签</span></router-link>
          <router-link to="/about"><span class="__p_1366_uid_458">关于我</span></router-link>
        </div>
        <div class="__p_1366_uid_461">
          <div>
            <img src="http://vve.qiniu.qjzd.net/Fv7Y5BUuGU3vVuNZq5YUBd9xAO_5" class="__p_1366_uid_468" />
            <span class="__p_1366_uid_469">壮壮</span>
          </div>
          <el-form label-position="right" class="__p_1366_uid_470">
            <el-input placeholder="请输入搜索内容" type="text" size="small" class="__p_1366_uid_472"></el-input>
            <el-button type="primary" size="mini" class="__p_1366_uid_473">搜索</el-button>
          </el-form>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

  
    .__p_1366_uid_458 {
      font-size: 16px;
      color: #A09696;
      margin-left: 10px;
      margin-right: 10px;
    }
  
    .__p_1366_uid_457 {
      text-align: right;
      padding-right: 20px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  
    .__p_1366_uid_468 {
      width: 70px;
      height: 70px;
      display: inline-block;
      vertical-align: middle;
      border-radius: 35px;
    }
  
    .__p_1366_uid_469 {
      font-size: 30px;
      display: inline-block;
      vertical-align: middle;
      margin-left: 20px;
    }
  
  
    .__p_1366_uid_472 {
      width: 300px;
    }
  
    .__p_1366_uid_473 {
      background: #22A1D9;
      border: 1px solid #22A1D9;
    }
  
    .__p_1366_uid_470 {
      height: 50px;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 30px;
      padding-right: 10px;
    }
  
    .__p_1366_uid_461 {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #D5D5D5;
      padding-bottom: 20px;
    }

    .__p_1366_uid_500 {
      color: #00aeff;
      float: right;
      margin-left: 0;
      margin-right: 0;
      text-align: right;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  
    .__p_1366_uid_494 {
      padding-top: 20px;
      padding-bottom: 40px;
      margin-top: 20px;
      border-bottom: 2px solid #D5D5D5;
      margin-left: 220px;
    }
  

  
    .__p_1366_uid_456 {
      background: RGB(242, 242, 242);
      padding-left: 200px;
    padding-right: 200px;
    }
  </style>