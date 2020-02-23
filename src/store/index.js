import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//安装插件
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        counter:1000
    },
    mutations:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        incrementCount(state,payload){
            console.log("state："+state)
            console.log("payload"+payload)
            state.counter += payload.counter;
        }
    },
    actions:{

    },
    getters:{
        powerCounter(state){
            return state.counter*state.counter;
        }
    },
    modules:{}
})

export default store
