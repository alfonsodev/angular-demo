var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/../'));

app.get('/api', function(req, res){
  var phoneData = [
    { name: 'Galaxy S', url: 'http://www.samsung.com/galaxy' },
    { name: 'Iphone 5s', url: 'https://www.apple.com/iphone' }
  ]
  res.set({
      'Content-Type': 'application/json'
  });
    res.send(JSON.stringify(phoneData));
});

app.listen(3000);
console.log('listening on port ... 3000');
