const express = require('express');
const app = express();
const cors = require('cors');
const { areas } = require('./areas');
const { listings } = require('./listings');
const { areaDetails } = require('./areaDetails');

app.use(cors());
app.set('port', process.env.PORT || 3000);

app.locals = {
  title: 'Listings for Denver',
  listings,
  areas,
  areaDetails
}
app.locals.title = 'Listings for Denver Area';

app.get('/', (req, res) => {
  res.send('This is working');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

//Listings
app.get('/api/v1/listings', (req, res) => {
  const listings = app.locals.listings;

  res.json({ listings });
});


app.get('/api/v1/listings/:id', (req, res) => {
  const { id } = req.params;
  const rental = app.locals.listings.find(listing => listing.photo_id == id);
  if (!rental) {
    return res.sendStatus(404);
  }

  res.status(200).json(rental)
});

//Areas
app.get('/api/v1/areas', (req, res) => {
  const areas = app.locals.areas;
  res.json({ areas });
});

//Area Details
app.get('/api/v1/areas/:id', (req, res) => {
  const { id } = req.params;
  const details = app.locals.areaDetails.find(area => area.id == id);
  if (!details) {
    return res.sendStatus(404);
  }

  res.status(200).json(details);
});
