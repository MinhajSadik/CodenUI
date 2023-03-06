import mongoose from "mongoose";
const Remote_URL = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SEC_PART},${process.env.DB_PRI_PART},${process.env.DB_SEC_PART_TWO}/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-9mf38a-shard-0&authSource=admin&retryWrites=true&w=majority`;

const Local_URL = `mongodb://127.0.0.1:27017/${process.env.DB_NAME}`;

const DB_URL = process.env.NODE_ENV === "production" ? Remote_URL : Local_URL;


const connectDB = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    mongoose.connect(DB_URL, options, mongoose.set('strictQuery', false));
    console.log(`Database Connected Successfully...`);
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDB;
