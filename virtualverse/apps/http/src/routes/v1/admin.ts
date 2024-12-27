import { Router } from "express";

const adminRouter = Router();

adminRouter.post("/element", (req, res) => {
    res.json({ message: "Metadata" });
});

adminRouter.put("/element/:elementId", (req, res) => {
    res.json({ message: "Bulk Metadata" });
});

adminRouter.get("/avatar", (req, res) => {
    res.json({ message: "Bulk Metadata" });
});

adminRouter.get("/:map", (req, res) => {
    res.json({ message: "Bulk Metadata" });
});

export default adminRouter;
