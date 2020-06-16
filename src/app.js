import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () =>{
  new Vue({
    el: '#app',
    data: {
      allCountries: [],
      selectedCountry: null
      // filterCountry: 0,
    },
    mounted(){
      this.locateCountry();
    },
    computed: {
      totalWorldPopulation: function(){
        return this.allCountries.reduce((runningTotal, country) => {
          return runningTotal + country.population;
        }, 0);
      },
    },
    methods:{
      locateCountry: function(){
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.allCountries = data)
      }
    }
  })
})
