const express = require("express");
const router = express.Router();

const {createListing,getListings,getListingById} = require("../controllers/listingController");

const auth = require("../middleware/authMiddleware");

router.post("/",auth,createListing);
router.get("/",getListings);
router.get("/:id",getListingById);

module.exports = router;