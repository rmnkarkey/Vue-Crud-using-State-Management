import Vue from 'vue'
import Router from 'vue-router'
import crud from '../components/welcomepage'
import person from '../components/persons'
import updatedPerson from '../components/updated'
import addedperson from '../components/addedperson'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcomepage',
      component:crud
    },
    {
    	path:'/persons',
    	name:'person',
    	component:person
    },
    {
    	path:'/updated',
    	name:'updatedPerson',
    	component:updatedPerson
    },
    {
    	path:'/addedperson',
    	name:'addedPerson',
    	component:addedperson
    }
  ]
})
