import app from "./app.js";
import connectDB from "./databases/mdb.js";

const PORT = process.env.PORT || 5000;

await connectDB();

app.all("*", (req, res) => {
  res.status(404).json({
    message: `We have trouble to find this route`,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
