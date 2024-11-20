<script>
  import VTable from '../components/VTable.vue'

  export default {
    components: {
      VTable,
    },

    data() {
      return {
        loading: false,
        error: null,
        headers: this.$helper.tableHeaders(this.$route.path),
        people: null,
        nextPageReq: null,
        prevPageReq: null,
        totalPages: 0,
        totalRecords: 0,
        page: 1,
        limit: 82,
      }
    },

    computed: {
      tableHeadersData() {
        return this.people.map((person) => {
          return this.assembleHeaderData(person);
        });
      },

      path() {
        const path = this.$route.path
        const query = this.$route.query
        return this.$helper.paginatedPath(path, query, this.page, this.limit)
      }
    },

    methods: {
      async fetchPeople() {
        try {
          const people = await this.$api.fetchPeopleOrVehicles(this.path)
          this.people = people.results
          this.nextPageReq = people.next
          this.prevPageReq = people.previous
          this.totalPages = people.total_pages
          this.totalRecords = people.total_records
          this.loading = false
        } catch (error) {
          console.error('Error fetching people...', error)
        }
      },

      assembleHeaderData(person) {
        const personProps = person.result.properties
        return {
          uid: person.result.uid,
          name: personProps.name,
          gender: personProps.gender,
          birth_year: personProps.birth_year,
          homeworld: personProps.homeworld,
          films: personProps.films
        };
      },
    },

    created () {
      this.loading = true
      this.fetchPeople()
    }
  }
</script>
<template>
  <div>
    <div v-if="loading"> loading </div>
    <div v-else>
      <v-table :table-data="tableHeadersData" :table-headers="headers"/>
    </div>
  </div>
</template>