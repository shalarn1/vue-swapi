<script>
  export default {
    data() {
      return {
        loading: true,
        error: null,
        record: null,
        headers: this.$helper.tableHeaders(this.$route.path),
      }
    },

    computed: {
      recordData() {
        if (this.record) {
          const props = this.record.properties
          const record = { links: {}, headers: {}, props: {}}
          for(const [key, value] of Object.entries(props)) {
            if (this.$helper.areLinks(value)) {
              record.links[key] = value
            } else {
              if (this.isHeaderData(key)) {
                record.headers[key] = value
              } else {
                record.props[key] = value
              }
            }

          }
          return record
        } else {
          return null
        }
      },
    },

    methods: {
      async fetchRecord() {
        try {
          const record = await this.$api.fetchRecord(this.$route.path)
          this.record = record.result
          this.loading = false
        } catch (error) {
          console.error('Error fetching record...', error)
        }
      },

      isHeaderData(key) {
        if (this.headers) {
          return this.headers.some(h => h.key === key)
        } else {
          return false
        }
      },

      capitalize(str) {
        const words = str.match(/[A-Za-z][^_\-A-Z]*/g) || [];
        return words.map((word) => {
          return word.charAt(0).toUpperCase() + word.substring(1)
        }).join(" ")
      },

    },

    created () {
      this.loading = true
      this.fetchRecord()
    }
  }
</script>

<template>
  <div v-if="loading"> loading </div>
  <div class="details" v-else>
    <div v-if="headers" class="section">
      <div v-for="(header, index) in headers" :key="index">
        <a
          v-if="$helper.isLink(recordData.headers[header.key])"
          :href="$helper.detailsLinkFor(recordData.headers[header.key])"
        >
            <span class="bold">{{ capitalize(header.key) }}:</span>
            {{ $helper.detailsLinkFor(recordData.headers[header.key]) }}
        </a>
        <span v-else-if="recordData.headers[header.key]" >
          <span class="bold">{{ capitalize(header.key) }}:</span>
          {{ recordData.headers[header.key] }}
        </span>
      </div>
    </div>
    <div class="section">
      <div v-for="(value, key) of recordData.props">
          <a v-if="$helper.isLink(value)" :href="$helper.detailsLinkFor(value)">
            <span class="bold">{{ capitalize(key) }}:</span>
            {{ $helper.detailsLinkFor(value) }}
          </a>
          <span v-else>
             <span class="bold">{{ capitalize(key) }}:</span> 
            {{ value }}
          </span>
      </div>
    </div>
    <div class="section">
      <div class="section" v-for="(value, key) of recordData.links">
        <div class="bold">{{ capitalize(key) }}:</div>
        <div>
          <span v-for="(link) of value">
            <a :href="$helper.detailsLinkFor(link)">
              {{ $helper.detailsLinkFor(link) }},
            </a>
          </span>
        </div>
      </div>
    </div>
    <div class="bold"> Metadata </div>
    <div v-for="(value, key) of record">
      <span v-if="key !== 'properties'"> {{ capitalize(key) }}: {{value}} </span>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .details {
    margin-top: 5rem;
  }

  .section {
    margin-bottom: 1rem;
  }
}

a {
  display: inline-block;
}

.bold {
  font-weight: bold;
}
</style>