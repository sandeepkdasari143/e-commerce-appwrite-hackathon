const sdk = require("node-appwrite");

module.exports = async function (req, res) {
  const client = new sdk.Client();
  const database = new sdk.Databases(client);

  const cart_id = req.payload;

  if (
    !req.variables["APPWRITE_FUNCTION_ENDPOINT"] ||
    !req.variables["APPWRITE_FUNCTION_API_KEY"]
  ) {
    console.warn(
      "Environment variables are not set. Function cannot use Appwrite SDK."
    );
  } else {
    client
      .setEndpoint(req.variables["APPWRITE_FUNCTION_ENDPOINT"])
      .setProject(req.variables["APPWRITE_FUNCTION_PROJECT_ID"])
      .setKey(req.variables["APPWRITE_FUNCTION_API_KEY"])
      .setSelfSigned(true);
    
    if (cart_id) {
      try {
        await database.deleteDocument(
          req.variables["ECOMM_DB_ID"],
          req.variables["CART_COLLECTION_ID"],
          cart_id
        );
        return res.json({
          success: true,
          error: false,
          message: "Item is removed from cart :)",
          cart_id
        });
      } catch (error) {
        return res.json({
          success: false,
          error: true,
          message: error.message,
        });
      }
    } else {
      res.json({
        success: false,
        error: true,
        message: "Cart ID is required to remove it from cart:(",
      });
    }
  }
};
