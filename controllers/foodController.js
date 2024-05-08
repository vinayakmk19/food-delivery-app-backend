import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food Added Successfully!!!" });
  } catch (error) {
    console.log("Error in addFood() in FoodController.js", error);
    res.json({ success: false, message: "Error in adding food" });
  }
};

export { addFood };
