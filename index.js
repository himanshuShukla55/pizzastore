import express from "express";
import "dotenv/config";
import { connection } from "./utils/db.js";
import { userRouter } from "./routes/users.route.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRouter);

//error Handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  try {
    await connection(process.env.DBURL);
    console.log("connected to Database!");
    console.log(`app is listening on port: ${PORT}`);
  } catch (error) {
    console.log("error in connecting to database!");
    console.error(error);
  }
});
