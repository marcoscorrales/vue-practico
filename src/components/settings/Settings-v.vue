
<template>
  <div>
     <div v-for=" respuesta in respuestas" :key="respuesta.id">
            <li>{{respuesta}}</li>
        </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      respuestas : []
    }
  },
  mounted(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => this.respuestas = data)
    .then(data => console.log(data))
    
    .catch(err => console.log(err.message))
  }
}
</script>
