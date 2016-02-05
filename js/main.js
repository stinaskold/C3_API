var apikey = 'b9710296a6cb141241e13573ccd47bc2';



$("#keyword-btn").click(function() {
    $(".info").remove();
    $(".keyword").append('<p class="info">Processing search...</p>');
    var keywords = $("#keyword-search").val();
    console.log(keywords);

    var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=b9710296a6cb141241e13573ccd47bc2&tags=' + keywords + '&tag_mode=all&sort=interestingness-desc&jsoncallback=?';
    console.log(url);

    $.getJSON(url, function(data) {
     console.log(data.photos.photo);
     var html = '<ul>';
     $.each(data.photos.photo,function(i,photo) {
       html += '<li>';
       // html += '<a href="' + photo.link + '" class="image">';
       html += '<img src="' + 'https://farm' + photo.farm +'.staticflickr.com/' + photo.server +'/' + photo.id + '_' + photo.secret + '_n.jpg"></a></li>';
     });
     html += '</ul>';
     $('#photos').html(html);
     $(".info").text('Your search is completed.');
   });

});



$("#location-btn").click(function() {
    $(".info").remove();
    $(".location").append('<p class="info">Processing search...</p>');
    var latitude = $("#latitude").val();
    var longitude = $("#longitude").val();
    console.log(latitude + " " + longitude);

    var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=' + apikey + '&lat=' + latitude + '&lon=' + longitude + '&sort=interestingness-desc&jsoncallback=?';
    console.log(url);

  //   $.ajax({
  //     url: url,
  //     error: function() {
  //        $('#info').html('<p>An error has occurred</p>');
  //     },
  //     dataType: 'jsonp',
  //     success: function(data) {
  //       var html = '<ul>';
  //         $.each(data.photos.photo,function(i,photo) {
  //           html += '<li>';
  //           // html += '<a href="' + photo.link + '" class="image">';
  //           html += '<img src="' + 'https://farm' + photo.farm +'.staticflickr.com/' + photo.server +'/' + photo.id + '_' + photo.secret + '_n.jpg"></a></li>';
  //         });
  //         html += '</ul>';
  //         $('#photos').html(html);
  //         $(".info").text('Your search is completed.');
  //     },
  //     type: 'GET'
  //  });

    $.getJSON(url, function(data) {
      var html = '<ul>';
      $.each(data.photos.photo,function(i,photo) {
        html += '<li>';
        // html += '<a href="' + photo.link + '" class="image">';
        html += '<img src="' + 'https://farm' + photo.farm +'.staticflickr.com/' + photo.server +'/' + photo.id + '_' + photo.secret + '_n.jpg"></a></li>';
      });
      html += '</ul>';
      $('#photos').html(html);
      $(".info").text('Your search is completed.');
    });

});

$("#interesting-btn").click(function() {
    $(".info").remove();
    $(".interesting").append('<p class="info">Processing search...</p>');

    var url = 'https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&format=json&api_key=b9710296a6cb141241e13573ccd47bc2&sort=interestingness-desc&jsoncallback=?';
    console.log(url);

    $.getJSON(url, function(data) {
      var html = '<ul>';
      $.each(data.photos.photo,function(i,photo) {
        html += '<li>';
        // html += '<a href="' + photo.link + '" class="image">';
        html += '<img src="' + 'https://farm' + photo.farm +'.staticflickr.com/' + photo.server +'/' + photo.id + '_' + photo.secret + '_n.jpg"></a></li>';
      });
      html += '</ul>';
      $('#photos').html(html);
      $(".info").text('Your search is completed.');
    });

});
