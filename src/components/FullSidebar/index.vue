<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- <el-menu
        default-active="activeIndex"
        class="el-menu-vertical-side"
        router
        @open="handleOpen"
        @close="handleClose"
      >
        <template v-for="(item,idx) in sideItem">
          <template v-if="item.children">
            <el-submenu :key="idx" :index="item.index">
              <template slot="title">
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item-group>
                <template v-for="(child,index) in item.children">
                  <template v-if="child.children">
                    <el-submenu :key="index" :index="child.index">
                      <template slot="title">
                        <span>{{ child.title }}</span>
                      </template>
                      <el-menu-item-group><template v-for="(childItem,childIdx) in child.children">
                        <el-menu-item :key="childIdx" :index="childItem.index">
                          <span slot="title">{{ childItem.title }}</span>
                        </el-menu-item>
                      </template>
                      </el-menu-item-group>
                    </el-submenu>
                  </template>
                  <template v-else>
                    <el-menu-item :key="index" :index="child.index">
                      <span slot="title">{{ child.title }}</span>
                    </el-menu-item>
                  </template>
                </template>
              </el-menu-item-group>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :key="idx" :index="item.index">
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu> -->
      <el-menu default-active="activeIndex" class="el-menu-vertical-side" @select="selected">
        <template v-for="(item,idx) in sideItem">
          <el-menu-item :key="idx" :index="item.index">
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import { sidebar } from "@/api/menu"

export default {
  data() {
    return {
      activeIndex: "0"
    }
  },
  computed: {
    // activeIndex() {
    //   console.log(this.$route.path)
    //   return this.$route.path
    // },
    sideItem: function() {
      const subrNum = this.$route.path.substr(1).indexOf('/')
      const path = subrNum > 0 ? this.$route.path.substr(1, subrNum) : this.$route.path.substr(1)
      console.log(path)
      return sidebar[path]
    }
  },
  // watch: {
  //   '$route'(to, from) {
  //     // 对路由变化作出响应...
  //     console.log(to, from)
  //     const tonum = to.path.substr(1).indexOf('/')
  //     const frnum = from.path.substr(1).indexOf('/')
  //     const topath = tonum > 0 ? to.path.substr(1, tonum + 1) : to.path.substr(1)
  //     const frpath = frnum > 0 ? from.path.substr(1, frnum + 1) : from.path.substr(1)
  //     if (topath !== frpath) {
  //       // this.sideItem.set(sidebar[topath])
  //       this.$set(this.sideItem, sidebar[topath])
  //       console.log(topath, sidebar[topath])
  //     }
  //   }
  // },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    selected(key, keyPath) {
      console.log(key, keyPath)
      this.activeIndex = key
      this.$router.push({ path: key })
    }
  }
}
</script>
<style lang="scss" scoped>
.el-menu-vertical-side {
  .is-active {
    background-color: #CCE3F9;
  }
}
</style>
