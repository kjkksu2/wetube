import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleError = (error) => console.log(`❌ DB Connection failed: ${error}`);
const handleOpen = () => console.log("✅ DB Connection success");

db.on("error", handleError);
db.once("open", handleOpen);
