import express from "express";
import cors from "cors"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./comfig/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import path from "path"

dotenv.config();

const app = express();
const __dirname = path.resolve()
// Middleware

if (process.env.NODE_ENV !== "production"){
  app.use(
    cors({
      origin: "http://localhost:5173",
    }
  ));
}

app.use(express.json());                                                         // this middleware will parse JSON bodies: req.body                                

app.use(rateLimiter);

app.use((req, res, next) => {                                                  // my custom middleware
    console.log(`Req method is ${req.method} & Req URL is "${req.url}" `);
    next();
})

const PORT = process.env.PORT || 5001;
app.use("/api/notes", notesRoutes)

if(process.env.NODE_ENV ==="production") {
  app.use(express.static(path.join(__dirname, "../Frontend/dist")))

  app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"))
});
}
// app.listen(PORT, () => {
//     console.log("Server started on PORT:", PORT);
// });

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});