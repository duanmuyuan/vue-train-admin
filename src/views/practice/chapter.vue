<template>
  <div class="app-main-container">
    <el-row>
      <el-col :span="6" :offset="18">
        <div class="flexBox">
          <span class="sechText">搜索：</span>
          <span class="sechBox">
            <el-input v-model="sechName" size="small" placeholder="请输入内容" />
          </span>
          <el-button size="small" type="primary">搜索</el-button>
        </div>
      </el-col>
    </el-row>
    <div class="tablePane">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column
          fixed
          prop="date"
          label="日期"
        />
        <el-table-column
          prop="name"
          label="姓名"
        />
        <el-table-column
          prop="province"
          label="省份"
        />
        <el-table-column
          prop="city"
          label="市区"
        />
        <el-table-column
          prop="address"
          label="地址"
        />
        <el-table-column
          prop="zip"
          label="邮编"
        />
        <el-table-column
          prop="zip"
          label="邮编"
        />
        <el-table-column
          fixed="right"
          label="操作"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
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
  name: 'Practice',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }],

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
    handleClick(row) {
      console.log(row)
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
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
