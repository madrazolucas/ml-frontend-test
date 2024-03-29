const axios = require('axios');
const _ = require('lodash');
const CONSTANTS = require('./product-search.constants.ts');

const author = CONSTANTS.Author;

// Search Items Response Object
const searchItemsResponse = {
  author: author,
  categories: [],
  items: []
};

// Product Detail Response Object
const productDetailResponse = {
  author: author,
  item: {}
};

// Function to get all related items given a query string
const getItems = async (req, res, next) => {
  const queryString = req.query.q;
  let response;

  try {
    response = await axios.get(`${CONSTANTS.Paths.PRODUCT_SEARCH}${queryString}`);
    const searchResponse = response.data;

    searchItemsResponse.categories = [];
    searchItemsResponse.items = [];

    // Logic to get search categories from response
    if (searchResponse.results && searchResponse.results.length > 0) {
      const categories = getCategories(searchResponse.filters);
      if (categories) {
        _.forEach(categories, category => {
          searchItemsResponse.categories.push(category.name);
        });
      } else {
        searchItemsResponse.categories.push(CONSTANTS.Default.CATEGORY_OTHERS);
      }
  
      // Get items values
      _.forEach(searchResponse.results, item => {
        const priceDecimals = Math.floor((_.get(item, 'price') % 1) * 100);
        const productSearchItem = {
          id: _.get(item, 'id'),
          title: _.get(item, 'title'),
          price: {
            currency: _.get(item, 'currency_id'),
            amount: Math.floor(_.get(item, 'price')),
            decimals: priceDecimals === 0 ? '00' : priceDecimals
          },
          picture: _.get(item, 'thumbnail'),
          condition: _.get(item, 'condition'),
          free_shipping: _.get(item, 'shipping.free_shipping'),
          city: _.get(item, 'address.state_name')
        };
        searchItemsResponse.items.push(productSearchItem);
      });
    }
    res.json(searchItemsResponse);
  } catch (error) {
    console.log(`${CONSTANTS.Errors.PRODUCT_SEARCH_ERROR}${error}`);
  }
};

// Function to get item detail values given a specific product id 
const getItemDetail = async (req, res, next) => {
  const productId = req.params.id;
  let productDetailItem = {};
  let response;

  // Call api with product details
  try {
    response = await axios.get(`${CONSTANTS.Paths.PRODUCT_DETAIL}${productId}`);
    const productDetail = response.data;
    
    // Decimals as integer from price value 
    const priceDecimals = Math.floor((_.get(productDetail, 'price') % 1) * 100);

    productDetailItem = {
      id: _.get(productDetail, 'id'),
      title: _.get(productDetail, 'title'),
      price: {
        currency: _.get(productDetail, 'currency_id'),
        amount: Math.floor(_.get(productDetail, 'price')),
        decimals: priceDecimals === 0 ? '00' : priceDecimals 
      },
      picture: _.head(productDetail.pictures).url,
      condition: _.get(productDetail, 'condition'),
      free_shipping: _.get(productDetail, 'shipping.free_shipping'),
      sold_quantity: _.get(productDetail, 'sold_quantity')
    };
  } catch (error) {
    console.log(`${CONSTANTS.Errors.PRODUCT_DETAIL_ERROR}, ${productId}${error}`);
  }

  // Call api with product description
  try {
    response = await axios.get(
      `${CONSTANTS.Paths.PRODUCT_DETAIL}${productId}${CONSTANTS.Paths.PRODUCT_DESCRIPTION}`
    );
    productDetailItem["description"] = _.get(response, 'data.plain_text');
    productDetailResponse.item = productDetailItem;
    res.json(productDetailResponse);
  } catch (error) {
    console.log(`${CONSTANTS.Errors.PRODUCT_DESCRIPTION_ERROR}${productId}, ${error}`);
  }
};

// Function to get search categories from search filters
const getCategories = (filters) => {
  let categories = null;
  if (filters && _.head(filters)) {
    const filterValues = _.head(filters).values;
    if (filterValues) {
      const filterCategories = _.head(filterValues).path_from_root;
      categories = filterCategories ? filterCategories : null;
    }
  } 
  return categories;
}

// Object with functions to export
const productSearch = {
  getItems: getItems,
  getItemDetail: getItemDetail
};

module.exports = productSearch;
