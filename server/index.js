import express from "express";
import { getPlaylists } from "./controllers/playlists.controllers.js";

const app = express();




const PORT = 8080


app.get("/", getPlaylists)

app.listen(PORT, () => {
  console.log(`server is now running on http://localhost:${PORT}`)
} )

