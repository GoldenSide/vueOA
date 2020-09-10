import Vue from 'vue'
import Router from 'vue-router'
import layout from "@/views/layout/index"
Vue.use(Router)
const router = new Router({
    routes: [{
            path: '/',
            redirect: '/login',
            component: layout,
            name: 'PM',
            meta: {
                title: '项目管理',
            },
            children: [{
                path: 'login',
                name: 'login',
                component: () => import('@/views/login'),
                meta: {
                    title: '登录',
                    keepAlive: true
                },
            }, {
                path: 'firstPage',
                name: "firstPage",
                component: () => import('@/views/firstPage'),
                meta: {
                    title: '第一页',
                    keepAlive: true
                },

            }, ]
        },
        {
            path: '/evaluationPoints',
            component: layout,
            redirect: '/evaluationPoints/evaluationPoints',
            children: [{
                path: 'evaluationPoints',
                name: 'EvaluationPoints',
                meta: {
                    title: '考评点',
                    keepAlive: false
                },
                component: () => import('@/views/evaluationPoints')
            }]
        }

    ]
})
export default router