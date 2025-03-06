const Product = require("./product");
const ProductRepository = require("./product.repository");

const repository = new ProductRepository();

exports.create = async (req, res) => {
    const data = req.body;


    const product = new Product(data.id, data.type, data.name, data.version, data.price);


    product ? res.send(product) : res.status(400).send({ message: "Invalid product" });
};

exports.getAll = async (req, res) => {
    const allProducts = await repository.fetchAll();


    res.send(allProducts);
};

exports.getById = async (req, res) => {
    const product = await repository.getById(req.params.id);


    product ? res.send(product) : res.status(404).send({ message: "Product not found" });
};

exports.repository = repository;
