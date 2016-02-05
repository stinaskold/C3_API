// Created by Stina Sköld

// variabel to store apikey
var apikey = 'b9710296a6cb141241e13573ccd47bc2';
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
    html += '<a href="' + photoURL + '_b.jpg">';
    html += '<img src="' + photoURL + '_n.jpg"></a></li>';
  });
  html += '</ul>';
  $('#photos').html(html);
}

// Append praragraph with info about search
function displayInfo(div) {
  //Remove old search info paragraph
  $(".info").remove();
  // Append new search info paragraph
  $(div).append('<p class="info">Processing search...</p>');
}


// On click, make request for photos with keywords provided by user
$("#keyword-btn").click(function() {
    $('#photos').empty();
    // Append info to parent element
    displayInfo($(this).parent());
    // Store input from user in variables latitude and longitude
    var keywords = $("#keyword-search").val();

    method = 'flickr.photos.search';
    url = 'https://api.flickr.com/services/rest/?method=' + method + '&format=json&api_key=' + apikey + '&tags=' + keywords + '&tag_mode=all&sort=interestingness-desc&jsoncallback=?';

    $.getJSON(url, function(data) {
     $(".info").text('Your search is completed.');
     displayPhotos(data);
   });

});

// On click, make request for photos with location provided by user
$("#location-btn").click(function() {
    $('#photos').empty();
    // Append info to parent element
    displayInfo($(this).parent());
    // Store input from user in variables latitude and longitude
    var latitude = $("#latitude").val();
    var longitude = $("#longitude").val();

    method = 'flickr.photos.search';
    url = 'https://api.flickr.com/services/rest/?method=' + method + '&format=json&api_key=' + apikey + '&lat=' + latitude + '&lon=' + longitude + '&sort=interestingness-desc&jsoncallback=?';

    $.getJSON(url, function(data) {
      $(".info").text('Your search is completed.');
      displayPhotos(data);
    });

});

// On click, make request for interesting photos
$("#interesting-btn").click(function() {
    $('#photos').empty();
    // Append info to parent element
    displayInfo($(this).parent());

    method = 'flickr.interestingness.getList';
    url = 'https://api.flickr.com/services/rest/?method=' + method + '&format=json&api_key=' + apikey +'&sort=interestingness-desc&jsoncallback=?';

    $.getJSON(url, function(data) {
      $(".info").text('Your search is completed.');
      displayPhotos(data);
    });
});
