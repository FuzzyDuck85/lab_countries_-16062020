import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      allCountries: [],
      selectedCountry: null,
      favouriteCountries: []
    },
    computed: {
      totalWorldPopulation: function(){
        return this.populationCalculator(this.allCountries);``
      },
      neighbouringCountries: function(){
        return this.allCountries.filter((country) => {
          return this.selectedCountry.borders.includes(country.alpha3Code);
        });
      },
      neighbouringCountriesPopulation: function(){
        return this.populationCalculator(this.neighbouringCountries);
      }
    },
    mounted(){
      this.getCountries()
    },
    methods: {
      getCountries: function(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(countries => this.allCountries = countries)
      },
      addToFavourites: function(){
        this.favouriteCountries.push(this.selectedCountry)
      },
      populationCalculator: function(allCountries){
        return allCountries.reduce((runningTotal, country) => runningTotal + country.population, 0);
      }
    }
  })
})
