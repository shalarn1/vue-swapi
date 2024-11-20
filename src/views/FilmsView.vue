<script>
  import VTable from '../components/VTable.vue'

  export default {
    components: {
      VTable,
    },

    data() {
      return {
        loading: false,
        headers: this.$helper.tableHeaders(this.$route.path),
        films: null,
        error: null
      }
    },

    computed: {
      tableHeadersData() {
        return this.films.map((film) => {
          return this.assembleHeaderData(film);
        });
      },
    },

    methods: {
      async fetchFilms() {
        try {
          const films = await this.$api.fetchFilms()
          this.films = films.result
          this.loading = false
        } catch (error) {
          console.error('Error fetching films...', error)
        }
      },

      assembleHeaderData(film) {
        const filmProps = film.properties
        return {
          uid: film.uid,
          episode_id: `Episode ${filmProps.episode_id}`,
          title: filmProps.title,
          release_date: filmProps.release_date,
          director: filmProps.director,
          characters: filmProps.characters
        };
      },
    },

    created () {
      this.loading = true
      this.fetchFilms()
    }
  }
</script>

<template>
  <main>
    <div v-if="loading"> loading </div>
    <div v-else>
      <v-table :table-data="tableHeadersData" :table-headers="headers"/>
    </div>
  </main>
</template>