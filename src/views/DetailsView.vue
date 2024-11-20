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
          const links = []
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
          return record;
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
        return this.headers.some(h => h.key === key)
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
    <div class="section">
      <div v-for="header in headers">
        <a
          v-if="$helper.isLink(recordData.headers[header.key])"
          :href="$helper.detailsLinkFor(recordData.headers[header.key])"
        >
            {{ header.key }}: {{ $helper.detailsLinkFor(recordData.headers[header.key]) }}
        </a>
        <span v-else>{{ header.key }}: {{ recordData.headers[header.key] }}</span>
      </div>
    </div>
    <div class="section">
      <div v-for="(value, key) of recordData.props">
          <a v-if="$helper.isLink(value)" :href="$helper.detailsLinkFor(value)">
            {{ key }}: {{ $helper.detailsLinkFor(value) }}
          </a>
          <span v-else>{{ key }}: {{ value }}</span>
      </div>
    </div>
    <div class="section">
      <div v-for="(value, key) of recordData.links">
        {{ key }}:
        <div v-for="(link) of value">
          <a :href="$helper.detailsLinkFor(link)">
            {{ $helper.detailsLinkFor(link) }}
          </a>
        </div>
      </div>
    </div>
    <div> Metadata </div>
    <div v-for="(value, key) of record">
      <span v-if="key !== 'properties'"> {{ key }}: {{value}} </span>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .details {
    margin-top: 5rem;
  }

  .section {
    margin-bottom: 1rem;
  }
}
</style>