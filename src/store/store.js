import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
	personName:'',
	personText:''	
}

const getters={
	getThis:function(state,{data}){
		return state.personName
	}
}

const mutations={
	changeName(state,{data}){
		state.personName=data
		
	},
	changeText(state,{data}){
		state.personText=data
	}	
}		


const actions={
	FixedChange(texts){
		texts.commit('changeName')
	},
	TextChange(text){
		text.commit('changeText')
	}
}

export default new Vuex.Store({
	state,getters,mutations,actions
})