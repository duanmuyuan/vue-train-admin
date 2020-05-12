<template>
  <div class="app-main-container">
    <div class="router-container">
      <div class="main-header">
        <div class="left">
          <span><el-button size="small" type="primary" icon="el-icon-plus">添加</el-button></span>
          <span><el-button size="small" type="danger" icon="el-icon-close">删除</el-button></span>
        </div>
        <div class="right">
          <el-date-picker
            v-model="dateValue"
            type="daterange"
            size="small"
            range-separator=" - "
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
          <span class="sechText">搜索：</span>
          <span class="sechBox">
            <el-input v-model="sechName" size="small" placeholder="请输入内容" />
          </span>
          <el-button size="small" type="primary">搜索</el-button>
        </div>
      </div>
      <div class="main-container">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="55"
          />
          <el-table-column
            label="日期"
            width="120"
          >
            <template slot-scope="scope">
              {{ scope.row.date }}
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120"
          />
          <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip
          />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      dateValue: '',
      sechName: '',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
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
  .main-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .right {
      display: flex;
      justify-content: flex-end;
  }
  .el-date-editor {
      width: 230px;
  }
  .sechText {
      line-height: 30px;
      color: rgba(0,0,0,1);
      padding-left: 20px;
  }
  .sechBox {
      padding-right: 20px;
      input {
          width: 230px;
      }
  }
</style>
