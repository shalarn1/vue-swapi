<template>
  <table>
    <thead>
      <th v-for="(header, index) of tableHeaders" :key="index">{{ header.name }}</th>
    </thead>
    <tbody>
      <tr v-for="(row, index) of tableData" :key="index" @click="goToDetails(row.uid)">
        <td v-for="(header, idx) of tableHeaders" :key="idx">
          <div v-if="$helper.areLinks(row[header.key])">
            <div v-for="(link, i) of row[header.key].slice(0,3)" :key='i' @click.stop>
              <a :href="$helper.detailsLinkFor(link)">
                {{ $helper.detailsLinkFor(link) }} &rarr;
              </a>
            </div>
          </div>
          <div v-else-if="$helper.isLink(row[header.key])">
            <a :href="$helper.detailsLinkFor(row[header.key])">
              {{ $helper.detailsLinkFor(row[header.key]) }} &rarr;
            </a>
          </div>
          <span v-else >
            {{ row[header.key] }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: {
      tableData: {
        type: Array,
        required: true
      },
      tableHeaders: {
        type: Array,
        required: true
      }
    },

    methods: {
      goToDetails(uid) {
        this.$router.push({ path: `${this.$route.path}/${uid}` })
      },
    },
  }
</script>

<style scoped>
table {
  margin-top: 1rem;
  width: 90%;
}
table, tr, th, td {
  padding: 5px;
  border-collapse: collapse;
  border: 5px solid var(--color-border);
}

thead, th {
  border-bottom: 1px solid #505050;
  background-color: #585858;
  color: #f8f8f8;
}

tr:hover {
  border: 6px solid var(--color-text);
  cursor: pointer;
}

tr:nth-child(even) {
  background-color: #e6e6e6;
}
tr:nth-child(odd) {
  background-color: #f8f8f8;
}
</style>