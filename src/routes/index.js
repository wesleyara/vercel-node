import express from "express";
import path from "path";

const basepath = path.join(__dirname, "../../public/index.html");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

router.get("/api/v1/home", (req, res) => {
  res.json({
    message: "Hello dsasasdas!",
  })
})

export default router;
