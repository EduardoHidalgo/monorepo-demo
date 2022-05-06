import express, { Request, Response } from "express";

const app = express();

app.get("/", function (req: Request, res: Response) {
  res.send("API Payments Online");
});

app.listen(4002, () => {
  console.log(`Running at http://localhost:4002`);
});
