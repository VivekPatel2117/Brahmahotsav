const express = require("express");
const HomePage = require("../models/HomePage");
const Participate = require("../models/Participate");
require("dotenv").config();

const router = express.Router();

router.get("/homepage", async (req, res) => {
    try {
        const home = await HomePage.find();
        return res.json(home);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error", error });
    }
});
router.get("/participate", async (req, res) => {
    try {
        new Participate({
            Link: "https://brahmahotsav-three.vercel.app/assets/participate-1-CmPNblDB.png",
            section: "participate_img_1",
            name: "participate",
        }).save();
        new Participate({
            Link: "https://brahmahotsav-three.vercel.app/assets/participate-2-BIVkZh2o.png",
            section: "participate_img_2",
            name: "participate",
        }).save();
        const home = await HomePage.find();
        return res.json(home);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error", error });
    }
});


module.exports = router;