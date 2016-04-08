var AutocompleteForm = (function(){
  var autocomplete;
  /**** Component Form should match HTML form element IDs in DOM ****/
  var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
  };

  function init(location) {
    var addressElement = document.getElementById('autocomplete');
    var options = {types: ['geocode']}
    autocomplete = new google.maps.places.Autocomplete(addressElement, options);
    autocomplete.addListener('place_changed', fillInAddress); 
    biasResults(location);
  }

  function clearForm(form){
    console.log("Iterating!");
    for (var component in form) {
      document.getElementById(component).value = '';
      document.getElementById(component).disabled = false;
    }
  }

  function setFormValues(form, place){
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (form[addressType]) {
        var val = place.address_components[i][form[addressType]];
        document.getElementById(addressType).value = val;
      }
    }
  }

  function fillInAddress() {
    var place = autocomplete.getPlace();
    var form = componentForm;
    clearForm(form);
    setFormValues(form, place);
  }

  function biasResults(location) {
    var geolocation = {
      lat: location.lat,
      lng: location.lng
    };

    var circle = new google.maps.Circle({
      center: geolocation,
      radius: location.radius
    });
    autocomplete.setBounds(circle.getBounds());
  }

  return {
    init: init
  }
})();