<template>
  <div class="container is-fluid">
    <div class="container is-max-fullhd">
      <div class="columns is-multiline">
        <div
          class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-fullhd"
          v-for="(country, index) in countries"
          :key="index"
        >
          <div class="card" @click="showModal(country)">
            <div class="card-image">
              <figure class="image is-3by2 m-5">
                <img :src="country.flag" alt="flag" />
              </figure>
            </div>

            <div class="card-content has-text-justified">
              <div class="columns is-mobile">
                <h4 class="column is-4 is-half-mobile">Country:</h4>
                <div class="column has-text-right-mobile">
                  {{ country.name }}
                </div>
              </div>

              <div class="columns is-mobile">
                <div class="column is-4">Capital:</div>
                <div class="column has-text-right-mobile">
                  {{ country.capital }}
                </div>
              </div>

              <div class="columns is-mobile">
                <div class="column is-4">Region:</div>
                <div class="column has-text-right-mobile">
                  {{ country.region }}
                </div>
              </div>

              <div class="columns is-multiline is-mobile">
                <div class="column is-4">
                  <p>Timezones:</p>
                </div>
                <div class="column is-8 has-text-right-mobile">
                  <div
                    v-for="(item, i) in country.timezones"
                    :key="`item-${i}`"
                  >
                    {{ item }}
                  </div>
                </div>
              </div>

              <div class="columns is-mobile">
                <div class="column is-4">Population:</div>
                <div class="column has-text-right-mobile">
                  <div v-if="country.population > 1000">
                    {{ Math.round(country.population / 1000) }}K
                  </div>
                  <div v-else>{{ country.population }}</div>
                </div>
              </div>
            </div>
          </div>
          <CountryModal
            v-show="isModalVisible"
            @close="closeModal"
            :countryData="countryData"
            v-if="countryData"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountryModal from "../components/CountryModal";

export default {
  name: "Countries",
  components: {
    CountryModal,
  },
  data() {
    return {
      isModalVisible: false,
      countryData: null,
    };
  },
  methods: {
    showModal(country) {
      this.countryData = country;
      this.isModalVisible = true;
      console.log("country", country);
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  computed: {
    getCountries() {
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