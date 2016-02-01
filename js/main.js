SC.initialize({
  client_id: '964e1e7cc3b6ed40a9555ce957eec180'
});

SC.get('/tracks/283', function(track) {
 console.log(track.title);
 });
