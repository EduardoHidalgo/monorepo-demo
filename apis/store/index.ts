import express, { Request, Response } from "express";

const app = express();

app.get("/", function (req: Request, res: Response) {
  res.send("API Store Online");
});

app.listen(4003, () => {
  console.log(`Running at http://localhost:4003`);
});
