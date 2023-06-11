const sdk = require("node-appwrite");

module.exports = async function (req, res) {
  const client = new sdk.Client();
  const database = new sdk.Databases(client);
  const teams = new sdk.Teams(client);
  // const permission = new sdk.Permission(client);
  // const role = new sdk.Role(client);

  const sellerDetails = JSON.parse(req.payload);

  const { sellerName, sellerEmail, sellerDescription} = sellerDetails;

  const {ECOMM_DB_ID, SELLERS_COLLECTION_ID, REDIRECT_URL} = req.variables;

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

    if (sellerDetails && sellerEmail && sellerName && sellerDescription) {
      /**
       * 1. Add Email to 'sellers' Team.
       * 2. If Successful, add the seller details to the 'sellers' collection.
       * 
       */
      let newSeller;
      try {
        const newteamMember = await teams.createMembership('SELLERS', sellerEmail, ["ADMIN", "MANAGER"], REDIRECT_URL, sellerName);
        if (newteamMember) {
          try {
            newSeller = await database.createDocument(
              ECOMM_DB_ID,
              SELLERS_COLLECTION_ID,
              sdk.ID.unique(),
              sellerDetails,
              [
                sdk.Permission.read(sdk.Role.users()),
                sdk.Permission.update(sdk.Role.team('SELLERS')),
                sdk.Permission.delete(sdk.Role.team('SELLERS', 'ADMIN')),
              ]
            );
          } catch (error) {
            return res.json({
              error: true,
              errorMessage: error.message,
              message: "New Seller Doc could not be created 😿"
            })
          }
        }
        if (newteamMember && newSeller) {
          return res.json({
            success: true,
            newSeller,
            newteamMember,
            message: `${sellerName} is successfully created and added to sellers team. 🙂`
          })
        }
      } catch (error) {
        res.json({
          error: true,
          errorMessage: error.message,
          message: "Seller Already Exists, Try out with another email or LogIn as Seller 😇"
        })
      }
    }
  }
};
