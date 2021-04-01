new WOW().init();

function init_map() {

      var var_location = new google.maps.LatLng(40.725118, -73.997699);

      var var_mapoptions = {
        center: var_location,

        zoom: 14
      };

      var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "New York"
      });

      var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

      var_marker.setMap(var_map);

    }

    google.maps.event.addDomListener(window, 'load', init_map);

    formData = {
      'name'     : $('input[name=name]').val(),
      'email'    : $('input[name=email]').val(),
      'subject'  : $('input[name=subject]').val(),
      'message'  : $('textarea[name=message]').val(),
      'updates'  : $('input:checkbox[name=updates]').is(':checked')
      };



function myFunction() {
  alert("Your form has been submitted!");
}
