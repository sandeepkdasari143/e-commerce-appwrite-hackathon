const sdk = require("node-appwrite");
const { v4:uuidv4} = require('uuid');


module.exports = async function (req, res) {
  const client = new sdk.Client();
  const database = new sdk.Databases(client);
  const cartItem = JSON.parse(req.payload);

  const { customer_id, location_id, product_id, seller_id, quantity } = cartItem;
  
  if (
    !req.variables['APPWRITE_FUNCTION_ENDPOINT'] ||
    !req.variables['APPWRITE_FUNCTION_API_KEY']
  ) {
    console.warn("Environment variables are not set. Function cannot use Appwrite SDK.");
  } else {
    client
      .setEndpoint(req.variables['APPWRITE_FUNCTION_ENDPOINT'])
      .setProject(req.variables['APPWRITE_FUNCTION_PROJECT_ID'])
      .setKey(req.variables['APPWRITE_FUNCTION_API_KEY'])
      .setSelfSigned(true);
    
      let newCartItem = {}
      if (customer_id && location_id && product_id && seller_id && quantity) {
        try {
          newCartItem = await database.createDocument(req.variables['ECOMM_DB_ID'], req.variables['CART_COLLECTION_ID'], uuidv4(), cartItem);
          return res.json({
            success: true,
            error: false,
            message: 'New Item is successfully added to cart :)',
            data: newCartItem
          })
        } catch (error) {
          return res.json({
            success:false,
            error: true,
            message: error.message
          })
        }
      } else {
        res.json({
          success:false,
          error: true,
          message: "All Fields are required :("
        })
      }
  }
};
