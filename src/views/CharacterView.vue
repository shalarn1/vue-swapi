<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        loading: true,
        data: null,
        error: null
      }
    },

    mounted () {
      console.log(this.$route.path)
      this.$axios.get(this.$route.path)
        .then(response => { this.data = response.result })
        .catch(error => {
          this.error = error
          console.log('Error:', error)
          })
        .finally(() => { this.loading = false })
    }
  }
</script>
<template>
  <div>
    <h1 v-if="loading"> Loading. This is an character's page</h1>
    <div v-else>
      <div v-for="(value, key) of data">
        <span v-if="key !== 'properties'"> {{ key }}: {{value}} </span>
      </div>
      <div v-for="(value, key) of data.properties">
        <span v-if="!Array.isArray(value)"> {{ key }}: {{value}} </span>
        <div v-else>
          {{ key }}:
          <a
            v-for="(link) of value"
            href="#"
          >
            {{ link }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
