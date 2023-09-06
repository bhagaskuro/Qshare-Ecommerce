const { Order } = require("../models");

class Orders {
  static async createOrder(req, res, next) {
    const { name, quantity, price } = req.body;
    const id = req.user.id;
    try {
      const order = {
        name,
        quantity,
        price,
        userId: id,
      };

      //insert into database
      await Order.create(order);

      res.status(201).json({ message: `New order has been created` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Orders;
