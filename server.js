import express from "express";
import expressLayouts from "express-ejs-layouts"; 
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Set Template Engine
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layout"); // Points to views/layout.ejs

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  // Renders index.ejs inside the layout.ejs 'body' placeholder
  res.render("homepage", { title: "Home Page" }); 
});

app.get("/security", (req, res) => {
   res.render("security", { title: "Security" }); 
});

app.get("/collaboration", (req, res) => {
   res.render("collaboration", { title: "Collaboration" }); 
});

app.get("/intelligence", (req, res) => {
   res.render("intelligence", { title: "Intelligence" }); 
});

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));