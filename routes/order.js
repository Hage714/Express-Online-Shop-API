const express = require("express");
const { placeOrder, getOrders, getOrderById } = require("../controllers/orders");

const router = express.Router();

router.get("/", getOrders);
router.get("/:id", getOrderById);
router.post("/place-order", placeOrder);


module.exports = router;