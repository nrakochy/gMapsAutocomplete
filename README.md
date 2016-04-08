### Google Maps Autocomplete Example
Refactored documentation example to clarify what is going on. 
[Source](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform)

  * You need to include the API Key in the HTML head
  * Added jQuery, so you might want to remove that from the HTML if you're not interested
  * For my use, I know the region the user is searching, so I removed navigator.geolocation from the search resultsetBias function. You might want to add that back.
