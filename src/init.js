import app from "./server";
import "./db";

const handleListen = () => console.log("✅ Listening on port 4000");

app.listen(4000, handleListen);
