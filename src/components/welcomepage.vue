<template>
  <div>
    <h1 id="welcome">Welcome</h1>
    <ul>
      <li><router-link :to="{name: 'person'}">Persons</router-link></li>
      <li><router-link :to="{name: 'addedPerson'}">Added Person</router-link></li>
      <li><router-link :to="{name: 'updatedPerson'}">Updated Person</router-link></li>
    </ul>   
  </div>
</template>

<script>
  export default{
    name:'crud'
  }
</script>

<style scopped>
  ul>li{
    display: inline;
    padding-left:250px;
  }

  #welcome{
    text-align: center
  }

</style>