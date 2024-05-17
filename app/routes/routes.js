import express from "express"

const router = express.Router()


//routes
router.get("/", (req, res)=>{
    res.send("Everything is ok");
})



export default router;