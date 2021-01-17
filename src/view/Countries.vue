<template>
  <div>
    {{ countries }}
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