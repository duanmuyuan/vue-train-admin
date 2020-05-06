<template>
  <div class="headNav">
    <div class="left">
      西宁工务机械段职工培训云平台
    </div>
    <div class="content">
      <el-menu
        class="el-menu-demo"
        :default-active="activeIndex"
        mode="horizontal"
        background-color="#0470B5"
        text-color="#fff"
        active-text-color="#fff"
        unique-opened
        router
        @select="handleSelect"
      >
        <el-menu-item
          v-for="item in menuList"
          :key="item.index"
          :index="item.index"
        >
          {{ item.title }}
        </el-menu-item>
      </el-menu>
      <!--<ul>
        <li><img src=""/></li>
      </ul>-->
    </div>
    <div class="right header-user-con">
      <!-- 消息中心 -->
      <div class="btn-bell">
        <el-tooltip
          effect="dark"
          :content="message?`有${message}条未读消息`:`消息中心`"
          placement="bottom"
        >
          <router-link to="/tabs">
            <i class="el-icon-bell" />
          </router-link>
        </el-tooltip>
        <span v-if="message" class="btn-bell-badge" />
      </div>
      <!-- 用户头像 -->
      <div class="user-avator">
        <!--<img src="../../assets/img/img.jpg" />-->
        <i class="el-icon-user" />
        admin
      </div>
      <!-- 用户名下拉菜单 -->
      <el-dropdown class="user-name" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          {{ username }}
          <i class="el-icon-caret-bottom" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
            <el-dropdown-item>项目仓库</el-dropdown-item>
          </a>
          <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse: false,
      fullscreen: false,
      message: 2,
      activeIndex: 'dashboard',
      menuList: [
        {
          index: "dashboard",
          icon: "el-icon-s-home",
          title: "管理首页"
        },
        {
          index: "course",
          icon: "el-icon-s-platform",
          title: "线上"
        },
        {
          index: "practice",
          icon: "el-icon-s-home",
          title: "线下"
        },
        {
          index: "exam",
          icon: "el-icon-s-home",
          title: "考试"
        },
        {
          index: "training",
          icon: "el-icon-s-home",
          title: "数据报表"
        },
        {
          index: "library",
          icon: "el-icon-s-home",
          title: "数据分析"
        },
        {
          index: "personal",
          icon: "el-icon-s-home",
          title: "系统"
        }
      ]
    }
  },
  computed: {
    username() {
      const username = localStorage.getItem('ms_username')
      return username || this.name
    }
  },
  mounted() {
    if (document.body.clientWidth < 1500) {
      this.collapseChage()
    }
  },
  methods: {
    // 用户顶部菜单
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command === 'loginout') {
        localStorage.removeItem('ms_username')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .headNav {
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .left {
      padding-left: 20px;
      line-height: 60px;
      color: #FFFFFF;
      font-size: 22px;
      font-weight: bold;
  }
  .right {
      padding-right: 20px;
  }
  .content {
      width: 600px;
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      top: 0;
      .is-active {
        border-bottom: none !important;
        background-color: #01517E !important;
      }
  }
  .header-user-con {
    display: flex;
    height: 60px;
    align-items: center;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
    color: #fff;
}
.user-avator {
    margin-left: 20px;
    color: #fff;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
</style>
