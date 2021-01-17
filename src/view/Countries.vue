<template>
  <div class="container is-fluid">
    <div class="columns is-multiline">
      <div
        class="column is-one-third-desktop is-half-tablet is-one-quarter-fullhd"
        v-for="item in countries"
        :key="item.name"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Countries",

  computed: {
    getcountries() {
      return this.$store.getters.allCountries;
    },
    countries() {
      return this.$store.state.countries;
    },
  },
  mounted() {
    this.$store.dispatch("getCountries");
  },
};
</script>