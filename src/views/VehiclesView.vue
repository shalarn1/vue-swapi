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
        vehicles: null,
        nextPageReq: null,
        prevPageReq: null,
        totalPages: 0,
        totalRecords: 0,
        page: 1,
        limit: 39,
      }
    },

    computed: {
      tableHeadersData() {
        return this.vehicles.map((vehicle) => {
          return this.assembleHeaderData(vehicle);
        });
      },

      path() {
        const path = this.$route.path
        const query = this.$route.query
        return this.$helper.paginatedPath(path, query, this.page, this.limit)
      }
    },

    methods: {
      async fetchVehicles() {
        try {
          const vehicles = await this.$api.fetchPeopleOrVehicles(this.path)
          this.vehicles = vehicles.results
          this.nextPageReq = vehicles.next
          this.prevPageReq = vehicles.previous
          this.totalPages = vehicles.total_pages
          this.totalRecords = vehicles.total_records
          this.loading = false
        } catch (error) {
          console.error('Error fetching vehicles...', error)
        }
      },

      assembleHeaderData(vehicle) {
        const vehicleProps = vehicle.result.properties
        return {
          uid: vehicle.result.uid,
          name: `${vehicleProps.name} – ${vehicleProps.model}`,
          manufacturer: vehicleProps.manufacturer,
          crew: vehicleProps.crew,
          passengers: vehicleProps.passengers,
          pilots: vehicleProps.pilots
        };
      },
    },

    created () {
      this.loading = true
      this.fetchVehicles()
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