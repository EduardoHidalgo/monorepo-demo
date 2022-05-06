import express, { Request, Response } from "express";

const app = express();

app.get("/", function (req: Request, res: Response) {
  res.send("API Marketing Online");
});

app.listen(4001, () => {
  console.log(`Running at http://localhost:4001`);
});
