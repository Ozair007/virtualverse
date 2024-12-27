import { Router } from "express";

const spaceRouter = Router();

spaceRouter.post("/", (req, res) => {
    res.json({ message: "Spaces" });
});

spaceRouter.delete("/:spaceId", (req, res) => {
    res.json({ message: "Spaces" });
});

spaceRouter.get("/all", (req, res) => {
    res.json({ message: "Spaces" });
});

spaceRouter.post("/element", (req, res) => {
    res.json({ message: "Spaces" });
});

spaceRouter.delete("/element/:elementId", (req, res) => {
    res.json({ message: "Spaces" });
});

spaceRouter.get("/:spaceId", (req, res) => {
    res.json({ message: "Spaces" });
});

export default spaceRouter;
