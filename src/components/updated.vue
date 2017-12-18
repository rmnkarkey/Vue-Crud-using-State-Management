<template>
	<div id="updated">
		<h3>Lists of Updated Persons</h3>
			Name: {{pName}}
			<br>
			<br>
			Text: {{pText}}
	</div>
</template>

<script>
import { mapState } from 'vuex'
	export default{
		name:'updatedPerson',
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
	    
	}
</script>	

<style scopped>
	#updated{
		text-align: center
	}
</style>