/**
 * 一级路由配置   暂时拷贝过来 还没有去嵌套
 */
import { subRoutes, otherRoutes } from './sub-routes'

let routes = [
    // 登录
    {
        name: 'login',
        path: '/login',
        meta: { requiresAuth: false },
        component: resolve => require(['@/pages/user/login'], resolve)
    },

    // 首页
    {
        path: '/',
        meta: { requiresAuth: true },
        component: resolve => require(['@/pages/layout'], resolve),
        children: [
            ...subRoutes,
            ...otherRoutes
        ]
    },

    // ## 集团用户-选择机构
    {
        path: '/agency',
        name: 'agency',
        title: '选择机构',
        meta: { requiresAuth: true },
        component: resolve => require(['@/pages/user/agency'], resolve)
    },

    // 错误
    {
        path: '*',
        name: 'not-found',
        meta: { requiresAuth: false },
        component: resolve => require(['@/pages/error/error'], resolve)
    }
]

export default routes
