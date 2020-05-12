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
          <template slot="title">
            <i :class="item.icon" />
            <span>{{ item.title }}</span>
          </template>
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
            <i class="el-icon-message-solid" />
          </router-link>
        </el-tooltip>
        <span v-if="message" class="btn-bell-badge">5</span>
      </div>
      <!-- 用户头像 -->
      <div class="user-avator">
        <i class="el-icon-user-solid" />
      </div>
      <!-- 用户名下拉菜单 -->
      <el-dropdown class="user-name" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          {{ username }}
          <i class="el-icon-caret-bottom" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <a href="https://github.com/" target="_blank">
            <el-dropdown-item>项目仓库</el-dropdown-item>
          </a>
          <el-dropdown-item>学习中心</el-dropdown-item>
          <el-dropdown-item>管理后台</el-dropdown-item>
          <el-dropdown-item>我的账号</el-dropdown-item>
          <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { menu } from "@/api/menu"

export default {
  data() {
    return {
      collapse: false,
      fullscreen: false,
      message: 2,
      // activeIndex: '/home',
      menuList: menu
    }
  },
  computed: {
    username() {
      const username = localStorage.getItem('ms_username')
      return username || 'admin'
    },
    activeIndex() {
      const subrNum = this.$route.path.substr(1).indexOf('/')
      return subrNum > 0 ? this.$route.path.substr(0, subrNum + 1) : this.$route.path
    }
  },
  mounted() {
    if (document.body.clientWidth < 1500) {
      this.collapseChage()
    }
    console.log(this.$route.path)
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
      width: 800px;
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      top: 0;
      color: #fff;
      .is-active {
        border-bottom: none !important;
        background-color: #01517E !important;
      }
      .el-menu-item i {
        color: #fff;
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
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
    .el-icon-message-solid {
      font-size: 20px;
      color: #fff;
    }
}
.btn-bell-badge {
    position: absolute;
    right: -10px;
    top: -10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #f56c6c;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 16px;
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
