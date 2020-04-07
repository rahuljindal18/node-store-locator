const Store = require("../models/Store");

//@desc get all stores
//@route GET /api/v1/stores
//@access PUBLIC

exports.getStores = async (req, res, next) => {
  try {
    const stores = await Store.find();
    res.status(200).json({
      success: true,
      count: stores.length,
      data: stores,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
};

//@desc create a store
//@route POST /api/v1/stores
//@access PUBLIC

exports.addStore = async (req, res, next) => {
  try {
    const store = await Store.create(req.body);
    res.status(201).json({
      success: true,
      data: store,
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: "This store already exists" });
    }
    res.status(500).json({ error: "Server Error" });
  }
};
