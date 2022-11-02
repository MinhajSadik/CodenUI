import mongoose from "mongoose";
const Remote_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oddqe5r.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const Local_URL = `mongodb://127.0.0.1:27017/${process.env.DB_NAME}`;

const DB_URL = process.env === "production" ? Remote_URL : Local_URL;

const connectDB = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    mongoose.connect(DB_URL, options);
    console.log(`Database Connected Successfully...: ${DB_URL}`);
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDB;
