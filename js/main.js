// Created by Stina Sköld

// variabel to store API key
var apiKey = 'b9710296a6cb141241e13573ccd47bc2';
// variabel to store url for AJAX request
var url;
// variabel to store which Flickr API method is to be used
var method;

// Use data to display photos
function displayPhotos(data) {
  var html = '<ul>';
  $.each(data.photos.photo,function(i,photo) {
    photoURL = 'https://farm' + photo.farm +'.staticflickr.com/' + photo.server +'/' + photo.id + '_' + photo.secret;
    html += '<li>';
    html += '<a href="' + photoURL + '_b.jpg" target="_blank">';
    html += '<img src="' + photoURL + '_n.jpg"></a></li>';
  });
  html += '</ul>';
  $('#photos').html(html);
}

// Append paragraph with info about search
function displayInfo(div) {
  $(".info").remove();
  $(div).append('<p class="info">Processing search...</p>');
}

// AJAX request and callback function
function ajaxRequest(url) {
  $.getJSON(url, function(data) {
    $(".info").text('Your search is completed.');
    displayPhotos(data);
  });
}

// On click, make request for photos with keywords provided by user
$("#keyword-btn").click(function() {
    $('#photos').empty();
    // Append search info to parent element
    displayInfo($(this).parent());
    // Store input from user in variable keywords
    var keywords = $("#keyword-search").val();

    method = 'flickr.photos.search';
    url = 'https://api.flickr.com/services/rest/?method=' + method + '&format=json&api_key=' + apiKey + '&tags=' + keywords + '&tag_mode=all&sort=interestingness-desc&jsoncallback=?';

    ajaxRequest(url);
});

// On click, make request for photos with location provided by user
$("#location-btn").click(function() {
    $('#photos').empty();
    // Append search info to parent element
    displayInfo($(this).parent());
    // Store input from user in variables latitude and longitude
    var latitude = $("#latitude").val();
    var longitude = $("#longitude").val();

    method = 'flickr.photos.search';
    url = 'https://api.flickr.com/services/rest/?method=' + method + '&format=json&api_key=' + apiKey + '&lat=' + latitude + '&lon=' + longitude + '&sort=interestingness-desc&jsoncallback=?';

    ajaxRequest(url);
});

// On click, make request for interesting photos
$("#interesting-btn").click(function() {
    $('#photos').empty();
    // Append search info to parent element
    displayInfo($(this).parent());

    method = 'flickr.interestingness.getList';
    url = 'https://api.flickr.com/services/rest/?method=' + method + '&format=json&api_key=' + apiKey +'&sort=interestingness-desc&jsoncallback=?';

    ajaxRequest(url);
});
