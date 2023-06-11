const sdk = require("node-appwrite");

module.exports = async function (req, res) {
  const client = new sdk.Client();
  const account = new sdk.Account(client);

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
      .setJWT(req.variables["APPWRITE_FUNCTION_JWT"])
      .setSelfSigned(true);
    
    try {
      const response = await account.createVerification(req.variables["REDIRECT_URL"]);
      return res.json({
        success: true,
        error: false,
        message: "Item is removed from cart :)",
        response
      });

    } catch (error) {
      res.json({
        error: true,
        message: "Unable to create Email Verification :(",
        errorMessage: error.message
      }, 409)
    }
  }
};
