<template>
  <div class="app-main-container">
    <!-- <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first"><i /></el-tab-pane>
      <el-tab-pane label="已完成" name="second"><i /></el-tab-pane>
      <el-tab-pane label="未完成" name="third"><i /></el-tab-pane>
      <el-tab-pane label="未开始" name="fourth"><i /></el-tab-pane>
    </el-tabs> -->
    <el-row>
      <el-col :span="16">
        <el-select v-model="value" class="main-select" size="small" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-model="value" class="main-select" size="small" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-model="value" class="main-select" size="small" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-model="value" class="main-select" size="small" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="6" :offset="2">
        <div class="flexBox">
          <span class="sechText">搜索：</span>
          <span class="sechBox">
            <el-input v-model="sechName" size="small" placeholder="请输入内容" />
          </span>
          <el-button size="small" type="primary">搜索</el-button>
        </div>
      </el-col>
    </el-row>
    <div class="main-pane">
      <div v-for="item in 7" :key="item" class="main-pane-item">
        <div class="item-img">
          <el-image :src="imgSrc">
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
          </el-image>
          <!--  -->
        </div>
        <el-progress class="progress" :text-inside="true" :stroke-width="20" :percentage="50" status="exception" />
        <div class="item-content">
          <h6>[必修]培训课程名称</h6>
          <p>类型：专业知识</p>
          <p>学时：360分钟</p>
          <p>学分：8</p>
          <p>剩余时间：13天</p>
        </div>
        <div class="item-btn">
          <el-button type="primary">开始学习</el-button>
        </div>
      </div>
      <div v-for="item in 3" :key="item+100" class="main-pane-item" style="visibility: hidden" />
    </div>
    <div class="pagenumber">
      <el-pagination
        background
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Course',
  data() {
    return {
      imgSrc: require('@/assets/dome_images/u95.jpg'),
      activeName: 'first',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      sechName: "",
      currentPage: 4
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main-container {
  .main-select {
    width: 150px;
  }
}
.main-pane {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  // flex-flow: row wrap;
  // align-content: flex-start;
  .main-pane-item {
    margin: 15px 0;
    width: 23%;
    // background-color: #F7F8FA;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    .item-img {
      width: 100%;
      img {
        width: 100%;
        display: block;
      }
    }
    .item-btn {
      width: 100%;
      padding: 0 15px 15px;
      box-sizing: border-box;
      button {
        width: 100%;
      }
    }
    .item-content {
      padding: 15px;
      line-height: 1.6;
      h6 {
        font-size: 18px;
      }
      p {
        font-size: 12px;
      }
    }
  }
}
</style>
