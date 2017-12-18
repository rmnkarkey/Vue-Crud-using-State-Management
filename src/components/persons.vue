<template>
	<div id="collections">
		<h3> lists of person </h3>
		<label> Name of person </label>
		<br>
		<input type="text" v-model="name">
		<br>
		<label> Texts:</label>
		<br>
		<input type="text" class="text-box" v-model="text">
		<br>
		<button @click="addPeople">
			ADD PEOPLE
		</button>
		
	</div>
</template>

<script>
import { mapState } from 'vuex'
	export default{
		name:'person',
		data(){
			return{
			name:'',
			text:''
		}
		},
		methods:{
			addPeople(){
				this.$store.state.personName=this.name
				this.$store.state.personText=this.text
				alert("added")
			}
		}
	}
</script>

<style scopped>

.text-box{
	height:200px;
}
#collections{
	text-align:center;
}
</style>