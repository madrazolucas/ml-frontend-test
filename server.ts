const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router 	= express.Router();
const port = 4200;
const productSearchApi = require('./server/controllers/rest-api/product-search-api.ts');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/ml-frontend-test')));

router.get('/api/items', productSearchApi.getItems);
router.route('/api/items/:id').get(productSearchApi.getItemDetail);
app.use('/', router);

app.connect = () => {
  const server = app.listen(port, () => {
    console.log('Product Search Server has started');
    console.log('Listening on port ' + server.address().port);
  });
};

app.connect();
