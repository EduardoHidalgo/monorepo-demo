import express, { Request, Response } from "express";

const app = express();

app.get("/", function (req: Request, res: Response) {
  res.send("API Vendors Online");
});

app.listen(4004, () => {
  console.log(`Running at http://localhost:4004`);
});
