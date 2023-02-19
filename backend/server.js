import app from "./app.js";
import connectDB from "./databases/mdb.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const PORT = process.env.PORT || 5001;

await connectDB();

// app.all("/admin/dashboard", (req, res) => {
//   return res.sendFile("index.html", { root: "./admin/build" });
// })

app.all("*", (req, res) => {
  res.status(404).json({
    message: `Hmm. We’re having trouble finding this route`,
  });
});


app.use(errorMiddleware.errorHandler)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
