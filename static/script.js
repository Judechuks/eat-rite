// members/static/script.js
document.addEventListener("DOMContentLoaded", () => {
  const navBar = document.querySelector(".navbar");
  const menuBar = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu a");
  const selectDrop = document.querySelector(".dropdown");

  // close menu when the navbar is clicked
  navBar.addEventListener('click', () => {
    menuBar.classList.toggle('active');
  })

  // close menu when each menuLink is clicked
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', () => {
      menuBar.classList.toggle('active');
    })
  })

  // could have used the allcountries api, but the news api supports some countries, which are the countries listed here
  const countries = [
    {'country_name': 'United Arab Emirates', 'cca2': 'ae'},
    {'country_name': 'Argentina', 'cca2': 'ar'},
    {'country_name': 'Austria', 'cca2': 'at'},
    {'country_name': 'Australia', 'cca2': 'au'},
    {'country_name': 'Belgium', 'cca2': 'be'},
    {'country_name': 'Bulgaria', 'cca2': 'bg'},
    {'country_name': 'Brazil', 'cca2': 'br'},
    {'country_name': 'Canada', 'cca2': 'ca'},
    {'country_name': 'Switzerland', 'cca2': 'ch'},
    {'country_name': 'China', 'cca2': 'cn'},
    {'country_name': 'Colombia', 'cca2': 'co'},
    {'country_name': 'Cuba', 'cca2': 'cu'},
    {'country_name': 'Czech Republic', 'cca2': 'cz'},
    {'country_name': 'Germany', 'cca2': 'de'},
    {'country_name': 'Egypt', 'cca2': 'eg'},
    {'country_name': 'France', 'cca2': 'fr'},
    {'country_name': 'United Kingdom', 'cca2': 'gb'},
    {'country_name': 'Greece', 'cca2': 'gr'},
    {'country_name': 'Hong Kong', 'cca2': 'hk'},
    {'country_name': 'Hungary', 'cca2': 'hu'},
    {'country_name': 'Indonesia', 'cca2': 'id'},
    {'country_name': 'Ireland', 'cca2': 'ie'},
    {'country_name': 'Israel', 'cca2': 'il'},
    {'country_name': 'India', 'cca2': 'in'},
    {'country_name': 'Italy', 'cca2': 'it'},
    {'country_name': 'Japan', 'cca2': 'jp'},
    {'country_name': 'South Korea', 'cca2': 'kr'},
    {'country_name': 'Lithuania', 'cca2': 'lt'},
    {'country_name': 'Latvia', 'cca2': 'lv'},
    {'country_name': 'Morocco', 'cca2': 'ma'},
    {'country_name': 'Mexico', 'cca2': 'mx'},
    {'country_name': 'Malaysia', 'cca2': 'my'},
    {'country_name': 'Nigeria', 'cca2': 'ng'},
    {'country_name': 'Netherlands', 'cca2': 'nl'},
    {'country_name': 'Norway', 'cca2': 'no'},
    {'country_name': 'New Zealand', 'cca2': 'nz'},
    {'country_name': 'Philippines', 'cca2': 'ph'},
    {'country_name': 'Poland', 'cca2': 'pl'},
    {'country_name': 'Portugal', 'cca2': 'pt'},
    {'country_name': 'Romania', 'cca2': 'ro'},
    {'country_name': 'Serbia', 'cca2': 'rs'},
    {'country_name': 'Russia', 'cca2': 'ru'},
    {'country_name': 'Saudi Arabia', 'cca2': 'sa'},
    {'country_name': 'Sweden', 'cca2': 'se'},
    {'country_name': 'Singapore', 'cca2': 'sg'},
    {'country_name': 'Slovenia', 'cca2': 'si'},
    {'country_name': 'Slovakia', 'cca2': 'sk'},
    {'country_name': 'Thailand', 'cca2': 'th'},
    {'country_name': 'Turkey', 'cca2': 'tr'},
    {'country_name': 'Taiwan', 'cca2': 'tw'},
    {'country_name': 'Ukraine', 'cca2': 'ua'},
    {'country_name': 'United States', 'cca2': 'us'},
    {'country_name': 'Venezuela', 'cca2': 've'},
    {'country_name': 'South Africa', 'cca2': 'za'}
  ];
  
  let output = "";
  countries.forEach((country) => {
    output += `<option value="${country.cca2}">${country.country_name}</option>`;
  });
  selectDrop.innerHTML = output;
});