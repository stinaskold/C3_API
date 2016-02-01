SC.initialize({
  client_id: '964e1e7cc3b6ed40a9555ce957eec180'
});

$(document).ready(function() {
    SC.get('/tracks/293', function(track) {
        $('#player').html(track.title);
    })
});
