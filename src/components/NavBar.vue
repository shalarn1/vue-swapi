<script>
  export default {
    data() {
      return {
        navItems: [
          { route: "/films", name: "Films" },
          { route: "/people", name: "Characters" },
          { route: "/vehicles", name: "Vehicles" },
        ]
      }
    }
  }
</script>
<template>
  <nav>
    <RouterLink v-for="item in navItems" :to="item.route" activeClass="active">{{ item.name }}</RouterLink>
  </nav>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.active {
  text-decoration: underline;
  background-color: hsla(160, 100%, 37%, 0.2);
}
</style>