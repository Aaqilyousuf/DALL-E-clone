import express from "express";
import * as dotenv from "dotenv";
import cros from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config("./.env");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cros());

app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.send("This is from server");
});

const startServer = async () => {
  connectDB(process.env.MONGODB_URL);
  app.listen(PORT, () =>
    console.log("Server Running on http://localhost:8080/")
  );
};
startServer();
