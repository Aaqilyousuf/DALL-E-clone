import mongoose from "mongoose";

const connectDB = async (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log("Error : " + err));
};
export default connectDB;
