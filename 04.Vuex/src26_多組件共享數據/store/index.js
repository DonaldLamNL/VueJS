// 此文件用於創建Vuex中的store

// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'
// 使用vuex插件
Vue.use(Vuex)

// 準備actions，用於響應組件中的動作
const actions = {
    // add(context,value){
    //     // console.log('actions add function',context,value)
    //     context.commit('ADD', value)
    // },
    // minus(context,value){
    //     context.commit('MINUS', value)
    // },
    addOdd(context,value){
        // console.log('actions add function',context)
        if(context.state.sum % 2){
            context.commit('ADD', value)
        }
    },
    addWait(context,value){
        setTimeout(() => {
            context.commit('ADD', value)
        }, 500);
    },
}

// 準備mutations，用於操作數據(state)
const mutations = {
    ADD(state,value){
        // console.log('mutations ADD function',state,value)
        state.sum += value
    },
    MINUS(state, value){
        state.sum -= value
    },
    ADD_PERSON(state,value){
        state.personList.unshift(value)
    }
}

// 準備state，用於存儲數據
const state = {
    sum:0,  // current sum
    school:'CUHK',
    major:'CS',
    personList:[
        {id:'001', name:'Donald'}
    ]
}

// 準備getters，用於將state中的數據進行加工
const getters = {
    tenTimes(state){
        return state.sum * 10
    }
}

// 創建 並 導出store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})