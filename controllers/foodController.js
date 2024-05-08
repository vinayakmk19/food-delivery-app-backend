import foodModel from "../models/foodModel.js";
import fs from "fs";

// AddFood Functionality

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

// All Food list

const foodList = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log("Error in foodList() in foodController.js: ", error);
    res.json({ success: false, message: "Error" });
  }
};

// Remove food item

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: " Food Removed." });
  } catch (error) {
    console.log("error in removeFood() in foodController.js", error);
    res.json({ success: false, message: "Error" });
  }
};

export { addFood, foodList, removeFood };
