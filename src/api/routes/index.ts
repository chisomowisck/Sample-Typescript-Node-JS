import { Router } from "express";
import membershipRouter from "./membership";
const router = Router();

router.use("/v1", membershipRouter);

router.get("/", function (req, res) {
  res.json("Welcome to Test App");
});

export default router;
