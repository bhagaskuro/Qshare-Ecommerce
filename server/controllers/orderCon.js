const { Order } = require("../models");

class Orders {
  //static async to create a new order
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

  //static async to read all order
  static async readOrders(req, res, next) {
    try {
      const id = req.user.id;
      const allOrders = await Order.findAll({
        where: { userId: id },
      });

      res.status(200).json(allOrders);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Orders;
