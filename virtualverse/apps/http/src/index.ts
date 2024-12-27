import express from "express";
import router from "./routes/v1";

const app = express();

app.use("/api/v1", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});