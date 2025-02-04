const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "7zIjyCKB#vdrBB6qfbxnLu6cTv3cADArBGq810AJ03abU3O_UEXU",
  MONGODB: process.env.MONGODB || "mongodb://mongo:iSDaTUbNgKkbFQLJDmgorKGuOTLsUcHP@:27017",
  OWNER_NUM: process.env.OWNER_NUM || "94765718443",
};
