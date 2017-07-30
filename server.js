'use strict';
let express = require('express');
let app = express();
// const bodyParser =
//   require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;
app.use(express.static('./public'));
app.get('/', function(request, response) {response.sendFile('index.html', {root:'./public'});
});
// app.post('/projects', bodyParser, function(request,response) {console.log(request.body);
//   response.send('Record posted to server!!');
// });

app.listen(PORT, function() {
  console.log(`Listening on port: "${PORT}"`);
});
