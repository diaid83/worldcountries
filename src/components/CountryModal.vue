
<template>
  <div>
    <div class="modal">
      <div class="modal-background" @click="close"></div>
      <div class="modal-content">
        <div class="modal-card">
          <div class="card-image">
            <figure class="image is-3by2 m-5">
              <img :src="countryData.flag" alt="flag" />
            </figure>
          </div>

          <div class="card-content has-text-justified">
            <div class="columns is-mobile">
              <h4 class="column is-4 is-half-mobile">Country:</h4>
              <div class="column has-text-right-mobile">
                {{ countryData.name }}
              </div>
            </div>

            <div class="columns is-mobile">
              <div class="column is-4">Capital:</div>
              <div class="column has-text-right-mobile">
                {{ countryData.capital }}
              </div>
            </div>

            <div class="columns is-mobile">
              <div class="column is-4">Region:</div>
              <div class="column has-text-right-mobile">
                {{ countryData.region }}
              </div>
            </div>

            <div class="columns is-multiline is-mobile">
              <div class="column is-4">
                <p>Timezones:</p>
              </div>
              <div class="column is-8 has-text-right-mobile">
                <div
                  v-for="(item, i) in countryData.timezones"
                  :key="`item-${i}`"
                >
                  {{ item }}
                </div>
              </div>
            </div>

            <div class="columns is-mobile">
              <div class="column is-4">Population:</div>
              <div class="column has-text-right-mobile">
                <div v-if="countryData.population > 1000">
                  {{ Math.round(countryData.population / 1000) }}K
                </div>
                <div v-else>{{ countryData.population }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        class="modal-close is-large"
        @click="close"
        aria-label="close"
      ></button>
    </div>
  </div>
</template> 

<script>
export default {
  name: "CountryModal",
  props: ["countryData"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style>
.modal {
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 20px 1px;
  margin: auto;
  width: fit-content;
  height: fit-content;
  overflow: hidden;
}
.modal-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #2c3e50;
  opacity: 0.1;
  cursor: pointer;
}
.modal-content {
  max-height: 80vh;
  max-width: 90vw;
}
.modal-card {
  overflow-y: auto;
  overflow-x: hidden;
  background-color: bisque;
}

/* ---------------------------------- */
</style>