const express = require('express');
const app = express();
const cors = require('cors');
const { areas } = require('./areas');
const { listings } = require('./listings');

app.use(cors());
app.set('port', process.env.PORT || 3000);

app.locals = {
  title: 'Listings for Denver',
  listings,
  areas
}
app.locals.title = 'Listings for Denver Area';

app.get('/', (request, response) => {
  response.send('This is working');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});


app.get('/api/v1/listings', (request, response) => {
  const listings = app.locals.listings;

  response.json({ listings });
});
