const express = require('express');
const { readFile } = require('fs').promises;

const app = express();

app.get('/', function(req, res){
    res.render('index.html', {
          title: 'My Site',
      nav: ['Home','About','Contact'] 
    });
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))