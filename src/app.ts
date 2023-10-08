import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/modules/book/book.route";
const app: Application = express();
const port = 5000;

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
