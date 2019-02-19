// Product Search App Author
const Author = {
  name: 'Lucas',
  lastname: 'Madrazo'
}

// Product Search APIs Paths
const Paths = {
  PRODUCT_SEARCH: 'https://api.mercadolibre.com/sites/MLA/search?q=',
  PRODUCT_DETAIL: 'https://api.mercadolibre.com/items/',
  PRODUCT_DESCRIPTION: '/description'
};

// Product Search APIs Errors
const Errors = {
  PRODUCT_SEARCH_ERROR: 'Could not get any response. There was an error requesting from products search API ',
  PRODUCT_DETAIL_ERROR: 'Could not get any response. There was an error requesting from product detail API  ',
  PRODUCT_DESCRIPTION_ERROR: 'Could not get any response. There was an error requesting from product description API  '
};

const Default = {
  CATEGORY_OTHERS: 'Otros'
};

module.exports = { Author, Errors, Paths, Default };
