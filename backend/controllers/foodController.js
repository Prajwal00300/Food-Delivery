import foodModel from "../models/foodModel.js";
import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";


// add food item

const addFood = async (req,res) => {


    let image_filename = `${req.file.filename}`

    const  food =  new foodModel({

        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({sucess:true,message:"Food Added"})
    } catch  (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}
// all food list
const listFood = async (req,res) => {
        try {
          const  foods = await foodModel.find({});
            res.json({success:true,data:foods})
        } catch (error) {
            console.log(error);
            res.json({success:false,message:"Error"})
            
        }    

}

// remove food item
const removeFood = async (req,res) =>
{
    try {
        const food = await foodModel.findById(req.body.id);
        
        const tmpPath = `/tmp/${food.image}`;
        const localPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "uploads", food.image);
        
        if (fs.existsSync(tmpPath)) {
            fs.unlink(tmpPath, () => {});
        } else if (fs.existsSync(localPath)) {
            fs.unlink(localPath, () => {});
        } else {
            // Fallback for simple relative path if files are mapped differently
            fs.unlink(`uploads/${food.image}`, () => {});
        }

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}
 
export {addFood,listFood,removeFood}
