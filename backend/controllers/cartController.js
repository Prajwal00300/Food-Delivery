
import userModel from "../models/userModel.js";

// ✅ Add item to cart
const addToCart = async (req, res) => {
    try {
        const userData = await userModel.findById(req.userId);
        const cartData = userData?.cartData || {};

        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.userId, { cartData });
        res.json({ success: true, message: "Added to Cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// ✅ Remove item from cart
const removeFromCart = async (req, res) => {
    try {
        const userData = await userModel.findById(req.userId);
        const cartData = userData?.cartData || {};

        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
        }

        await userModel.findByIdAndUpdate(req.userId, { cartData });
        res.json({ success: true, message: "Removed from Cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// ✅ Fetch user's cart
const getCart = async (req, res) => {
    try {
        const userData = await userModel.findById(req.userId);
        const cartData = userData.cartData || {};
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { addToCart, removeFromCart, getCart };
