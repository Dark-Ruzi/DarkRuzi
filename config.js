const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "7zIjyCKB#vdrBB6qfbxnLu6cTv3cADArBGq810AJ03abU3O_UEXU",
  MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
  OWNER_NUM: process.env.OWNER_NUM || "94765718443",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://avatars.githubusercontent.com/u/140577992?v=4.jpg",
  ALIVE_MSG: process.env.ALIVE_MSG || "Hello , I am alive now!!\n\n🥶Made By Bandara🥶",
 

};
