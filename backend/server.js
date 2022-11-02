import app from "./app.js";
import connectDB from "./databases/mdb.js";

const PORT = process.env.PORT || 5000;

await connectDB();

app.listen(PORT, () => {
  console.log(`Listend port on ${PORT}`);
});
