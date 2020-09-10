import vue from 'vue';
import vuex from 'vuex';
import state from './state.js';
import * as getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
import createLogger from 'vuex/dist/logger'
vue.use(vuex);
export default new vuex.Store({
    strict: process.env.NODE_ENV == 'development',
    state,
    getters,
    mutations,
    actions,
    plugins:process.env.NODE_ENV=='development'? [createLogger()] : []
});

// 1.为避免性能损失，生产环境出现不可控错误，建议关闭严格模式， 
// 2.日志调试插件，功能同(devtools)
// 3.模块化拼接，注意命名空间