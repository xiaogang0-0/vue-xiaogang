/**
 * 二级路由配置  暂时拷贝过来 还没有去嵌套
 */

let subRoutes = [

    // ## 首页
    //
    {
        path: '',
        name: 'home',
        title: '首页',
        meta: { requiresAuth: true },
        component: resolve => require(['@/pages/home/home'], resolve)
    },

    // ## 资源管理
    // 资源中心
    {
        path: '/res-center',
        name: 'res-center',
        title: '资源中心',
        meta: { requiresAuth: true },
        component: resolve => require(['@/pages/resource/res-center'], resolve)
    },
    // 办理报名
    {
        path: '/res-apply',
        name: 'res-apply',
        title: '办理报名',
        meta: { requiresAuth: true },
        component: resolve => require(['@/pages/resource/res-apply/apply-basic-msg'], resolve),
    },

    // 办理报名-选择课程
    {
        name: 'res-apply-edit-order',
        path: '/res-apply-edit-order',
        title: '选择课程',
        meta: { requiresAuth: true, perm: 1 },
        component: resolve => require(['@/pages/resource/res-apply/apply-edit-order'], resolve)
    },

    // 办理报名-编辑订单
    {
        name: 'res-apply-order',
        path: '/res-apply-order',
        title: '编辑订单',
        meta: { requiresAuth: true, perm: 1 },
        component: resolve => require(['@/pages/resource/res-apply/apply-order'], resolve)
    },

    // 办理报名-打印
    {
        name: 'res-apply-print',
        path: '/res-apply-print',
        title: '打印',
        meta: { requiresAuth: true, perm: 1 },
        component: resolve => require(['@/pages/resource/res-apply/apply-print'], resolve)
    },


    // ## 教务管理
    //
    // 学员中心
    {
        path: '/teach-student',
        name: 'teach-student',
        title: '学员中心',
        meta: { requiresAuth: true },
        component: resolve => require(['@/pages/teach/student'], resolve)
    },

    // 学员中心-课程变动
    {
        path: '/teach-student-change-course',
        name: 'teach-student-change-course',
        title: '学员中心-课程变动',
        meta: { requiresAuth: true, perm: 1},
        component: resolve => require(['@/pages/teach/student/student-change-course'], resolve)
    },

    // 学员中心-申请退费
    {
        path: '/teach-student-apply-return-money',
        name: 'teach-student-apply-return-money',
        title: '学员中心-申请退费',
        meta: { requiresAuth: true, perm: 1 },
        component: resolve => require(['@/pages/teach/student/student-apply-return-money'], resolve)
    },

    // 学员中心-申请退费列表
    {
        path: '/teach-student-return-money-list',
        name: 'teach-student-return-money-list',
        meta: { requiresAuth: true, perm: 1 },
        component: resolve => require(['@/pages/teach/student/student-return-money-list'], resolve)
    },

    // 学员中心-退费(审核)
    {
        path: '/student-check-return-money',
        name: 'student-check-return-money',
        meta: { requiresAuth: true, perm: 1 },
        component: resolve => require(['@/pages/teach/student/student-check-return-money'], resolve)
    },

    // 学员中心-退费打印
    {
        path: '/student-check-return-money-print',
        name: 'student-check-return-money-print',
        meta: { requiresAuth: true, perm: 1 },
        component: resolve => require(['@/pages/teach/student/student-apply-return-money-print'], resolve)
    },

    // 学员中心-学习档案
    {
        path: '/teach-student-study-record',
        name: 'teach-student-study-record',
        meta: { requiresAuth: true, perm: 1 },
        component: resolve => require(['@/pages/teach/student/student-study-record'], resolve)
    },


    // 班级管理
    {
        path: '/teach-grade',
        name: 'teach-grade',
        meta: { requiresAuth: true },
        component: resolve => require(['@/pages/teach/grade'], resolve),
    },

    // 班级管理-添加
    {
        path: '/teach-grade-add',
        name: 'teach-grade-add',
        meta: { requiresAuth: true, perm: 1 },
        component: resolve => require(['@/pages/teach/grade/add'], resolve),
    },

    // 班级管理-编辑
    {
        path: '/teach-grade-edit',
        name: 'teach-grade-edit',
        meta: { requiresAuth: true, perm: 1 },
        component: resolve => require(['@/pages/teach/grade/edit'], resolve),
    },

    // 班级管理-排课
    {
        path: '/teach-grade-schedule',
        name: 'teach-grade-schedule',
        title: '班组课排课',
        meta: { requiresAuth: true, perm: 1 },
        component: resolve => require(['@/pages/teach/grade/garde-schedule'], resolve),
    },

    // 班级管理-网络授课
    {
        path: '/teach-grade-network-teach',
        name: 'teach-grade-network-teach',
        title: '网络售课',
        meta: { requiresAuth: true, perm: 1  },
        component: resolve => require(['@/pages/teach/grade/network-teach'], resolve),
    },

    // 班级管理-考勤
    {
        name: 'teach-grade-attendance',
        path: '/teach-grade-attendance',
        title: '班组课考勤',
        meta: { requiresAuth: true, perm: 1  },
        component: resolve => require(['@/pages/teach/grade/attendance'], resolve),
    },

    // 课耗管理
    {
        path: '/teach-course',
        name: 'teach-course',
        title: '课耗管理',
        meta: { requiresAuth: true },
        component: resolve => require(['@/pages/teach/course'], resolve),
    },

    // 1对1排课
    {
        path: '/teach-one-scheduling',
        name: 'teach-one-scheduling',
        title: '1对1排课',
        meta: { requiresAuth: true, perm: 1 },
        component: resolve => require(['@/pages/teach/scheduling/one-scheduling'], resolve),
    },

    // 班组课
    {
        path: '/teach-grade-scheduling',
        name: 'teach-grade-scheduling',
        title: '班组课',
        meta: { requiresAuth: true, perm: 1 },
        component: resolve => require(['@/pages/teach/scheduling/grade-scheduling'], resolve),
    },

    // 教师课表
    {
        path: '/teach-schedule',
        name: 'teach-schedule',
        title: '教师课表',
        meta: { requiresAuth: true },
        component: resolve => require(['@/pages/teach/schedule'], resolve)
    },
    // 进出明细
    {
        path: '/teach-turnover',
        name: 'teach-turnover',
        title: '进出明细',
        meta: { requiresAuth: true },
        component: resolve => require(['@/pages/teach/turnover'], resolve)
    }

]

let otherRoutes = [
    // ## 培训视频
    //
    {
        path: '/train-video',
        name: 'train-video',
        title: '培训视频',
        meta: { requiresAuth: true },
        component: resolve => require(['@/pages/train/video'], resolve)
    },
    // 讲师详情
    {
        path: '/train-video-teacher',
        name: 'train-video-teacher',
        title: '讲师详情',
        meta: { requiresAuth: true },
        component: resolve => require(['@/pages/train/teacher'], resolve)
    }
]

export {
    subRoutes,
    otherRoutes
}
