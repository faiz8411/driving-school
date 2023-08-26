import mongoose from "mongoose";
import app from "./app";
import config from "./config";
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("successful");
    app.listen(config.port, () => {
      console.log(`driving listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err, "failed");
  }
}
bootstrap();

// rmWAcGpwvm4iR5eM
// driving_school
