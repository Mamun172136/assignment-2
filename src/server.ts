import app from "./app";
import config from "./config/index";

// getting-started.js
const mongoose = require("mongoose");

async function main() {
  try {
    console.log("config url", config.database_url);
    await mongoose.connect(config.database_url as string);
    console.log("database is connected");

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("failed to connect", error);
  }
}

main();
