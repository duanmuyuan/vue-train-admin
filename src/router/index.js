import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/index'),
      meta: { title: '信息概括', icon: 'home' }
    }]
  },
  {
    path: '/course',
    component: Layout,
    redirect: '/course',
    children: [
      {
        path: '',
        name: 'Course',
        component: () => import('@/views/course/index'),
        meta: { title: '课程列表', icon: 'course' }
      },
      {
        path: 'catalog/:id',
        name: 'Catalog',
        component: () => import('@/views/course/catalog'),
        meta: { title: '课程目录', icon: 'course' }
      },
      {
        path: 'list',
        name: 'CourseList',
        component: () => import('@/views/course/list'),
        meta: { title: '学习内容', icon: 'course' }
      },
      {
        path: 'online',
        name: 'Online',
        component: () => import('@/views/course/online'),
        meta: { title: '在线选课', icon: 'course' }
      }
    ]
  },
  {
    path: '/practice',
    component: Layout,
    redirect: '/practice',
    children: [
      {
        path: '',
        name: 'Practice',
        component: () => import('@/views/practice/index'),
        meta: { title: '综合练习', icon: 'practice' }
      },
      {
        path: 'chapter',
        name: 'Chapter',
        component: () => import('@/views/practice/chapter'),
        meta: { title: '章节练习', icon: 'practice' }
      },
      {
        path: 'result',
        name: 'Result',
        component: () => import('@/views/practice/result'),
        meta: { title: '综合成绩', icon: 'practice' }
      },
      {
        path: 'chrslt',
        name: 'Chrslt',
        component: () => import('@/views/practice/chapterResult'),
        meta: { title: '章节成绩', icon: 'practice' }
      },
      {
        path: 'testpaper',
        name: 'Testpaper',
        component: () => import('@/views/practice/testpaper'),
        meta: { title: '试卷详情', icon: 'practice' }
      }
    ]
  },
  {
    path: '/exam',
    component: Layout,
    redirect: '/exam',
    children: [
      {
        path: '',
        name: 'exam',
        component: () => import('@/views/exam/index'),
        meta: { title: '我的考试', icon: 'exam' }
      },
      {
        path: 'getinto',
        name: 'Getinto',
        component: () => import('@/views/exam/getinto'),
        meta: { title: '进入考试', icon: 'exam' }
      },
      {
        path: 'start',
        name: 'Start',
        component: () => import('@/views/exam/start'),
        meta: { title: '开始考试', icon: 'exam' }
      },
      {
        path: 'end',
        name: 'End',
        component: () => import('@/views/exam/end'),
        meta: { title: '考试成绩', icon: 'exam' }
      }
    ]
  },
  {
    path: '/training',
    component: Layout,
    redirect: '/training',
    children: [
      {
        path: '',
        name: 'training',
        component: () => import('@/views/training/index'),
        meta: { title: '我的培训班', icon: 'training' }
      },
      {
        path: 'assess',
        name: 'Assess',
        component: () => import('@/views/training/assess'),
        meta: { title: '质量评估', icon: 'training' }
      }
    ]
  },
  {
    path: '/library',
    component: Layout,
    redirect: '/library',
    children: [
      {
        path: '',
        name: 'library',
        component: () => import('@/views/library/index'),
        meta: { title: '公共文库', icon: 'library' }
      },
      {
        path: 'edit',
        name: 'Edit',
        component: () => import('@/views/library/edit'),
        meta: { title: '文库编辑', icon: 'library' }
      },
      {
        path: 'preview',
        name: 'Preview',
        component: () => import('@/views/library/preview'),
        meta: { title: '文库预览', icon: 'library' }
      }
    ]
  },
  {
    path: '/personal',
    component: Layout,
    redirect: '/personal',
    children: [
      {
        path: '',
        name: 'Personal',
        component: () => import('@/views/personal/index'),
        meta: { title: '我的档案', icon: 'personal' }
      },
      {
        path: 'certificate',
        name: 'Certificate',
        component: () => import('@/views/personal/certificate'),
        meta: { title: '我的证书', icon: 'personal' }
      },
      {
        path: 'classhours',
        name: 'Classhours',
        component: () => import('@/views/personal/classhours'),
        meta: { title: '学时学分', icon: 'classhours' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
