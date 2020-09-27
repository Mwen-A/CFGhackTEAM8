// Calculating purchasing cost
//List of constants
function calcPrice () {
const LoremPrice = 250;
const IpsumPrice = 500;
const DolorPrice = 600;

  
    // Get the quantity of items //
    var getQuantityLorem= document.getElementById('Lorem-quantity').value;
    var getQuantityIpsum = document.getElementById('Ipsum-quantity').value;
    var getQuantityDolor = document.getElementById('Dolor-quantity').value;
  
    // calculate the total cost of the order //
let totalPrice = LoremPrice * getQuantityLorem + IpsumPrice * getQuantityIpsum + DolorPrice * getQuantityDolor;
document.getElementById("total_price").innerText = totalPrice;
}

//mapquest API
var L;
    window.onload = function() {
      L.mapquest.key = '7fLpSCYAZcTJAqSXGjifoQ5i4LJnZi7x';

      // 'map' refers to a <div> element with the ID map
      var map = L.mapquest.map('map', {
        center: [14.682113, -17.451037],
        // 1. change 'map' to 'hybrid', try other type of map
        layers: L.mapquest.tileLayer('map'),
        zoom: 18
      });

      // 3. Add icon
      L.marker([14.682113, -17.451037], {
        icon: L.mapquest.icons.marker({
          primaryColor: '#22407F',
          secondaryColor: '#3B5998',
          shadow: true,
          size: 'md',
          symbol: ''
        })
      })
      .bindPopup('Come and grab a coffee!')
      .addTo(map);
    }

//bott interactivity 

function BotBtn1(){

}

function BotBtn1(){

}

function BotBtn1(){

}

function BotBtn1(){

}

