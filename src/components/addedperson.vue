<template>
	<div id="added">
		<h3> Lists of added Person </h3>
			Name:{{pName}}
			<br>			
			<button @click="deleteThis">
				DELETE
			</button>

			<input type="text" v-model="firstName">
			<button @click="updateThis">
				UPDATE
			</button>
			<br>
			<br>
			Text:{{pText}}
			<br>
			<button @click="deleteThisAlso">
				DELETE
			</button>
			<input type="text" v-model="secondName">
			<button @click="updateThisAlso">
				UPDATE
			</button>
		
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default{ 
	name:'addedPerson',
	data(){
		return{
			firstName:'',
			secondName:''
		}
	},
    computed:{
      ...mapState({
        pName: state => state.personName,
        pText: state => state.personText
        })
    },
    mounted(){
       this.$store.dispatch('changeName')
       this.$store.dispatch('changeText')   
    },
    methods:{
    	deleteThis(){
    		this.$store.state.personName=""
    	},
    	deleteThisAlso(){
    		this.$store.state.personText=""
    	},
    	updateThis(){
    		this.$store.state.personName=this.firstName
    	},
    	updateThisAlso(){
    		this.$store.state.personText=this.secondName
    	}
    }
}    

</script>

<style>
	#added{
		text-align:center;
	}
</style>