// api.js
import express from "express";
import usersRouter from "./api/v1/users.router.js";
import cardsRouter from "./api/v1/cards.router.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.json("api sub router");
});
router.use("/users", usersRouter);
router.use("/cards", cardsRouter);

router.use((req, res)=>{
    res.status(404).json("Page not found");
})


// exported to app5.js
export default router;
