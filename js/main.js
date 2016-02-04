
$(document).ready(function() {
  $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=b9710296a6cb141241e13573ccd47bc2&tags=yellow,landscape,summer&tag_mode=all&sort=interestingness-desc&jsoncallback=?', function(data) {
    console.log(data.photos.photo);
    var html = '<ul>';
    $.each(data.photos.photo,function(i,photo) {
      html += '<li>';
      // html += '<a href="' + photo.link + '" class="image">';
      html += '<img src="' + 'https://farm' + photo.farm +'.staticflickr.com/' + photo.server +'/' + photo.id + '_' + photo.secret + '_n.jpg"></a></li>';
    });
    html += '</ul>';
    $('#photos').html(html);
  });
});
