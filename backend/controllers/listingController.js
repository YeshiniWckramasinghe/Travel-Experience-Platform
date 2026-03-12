const Listing = require("../models/Listing");

exports.createListing = async(req,res)=>{

const listing = await Listing.create({
...req.body,
user:req.user
});

res.json(listing);

};

exports.getListings = async(req,res)=>{

const listings = await Listing
.find()
.populate("user","name")
.sort({createdAt:-1});

res.json(listings);

};

exports.getListingById = async(req,res)=>{

const listing = await Listing
.findById(req.params.id)
.populate("user","name");

res.json(listing);

};