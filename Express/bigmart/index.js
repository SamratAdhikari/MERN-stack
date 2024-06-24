import express from "express";

const app = express();
app.use(express.json());

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});

// product list
let productList = [
    {
        id: 1,
        name: "Bread",
        price: 100,
    },
    {
        id: 2,
        name: "Ice cream",
        price: 150,
    },
    {
        id: 3,
        name: "Chips",
        price: 200,
    },
];

// ? show product list
app.get("/product/show", (req, res) => {
    return res.status(200).send({ message: "Success", productList });
});

// ? add product
app.post("/product/add", (req, res) => {
    const newProduct = req.body;
    productList.push(newProduct);
    return res
        .status(200)
        .send({ message: `${newProduct.name} added successfully` });
});

// ? get product detail by id
app.get("/product/detail/:id", (req, res) => {
    const productID = +req.params.id; // convert string to number
    const product = productList.find((item) => item.id == productID);

    if (!product) {
        return res.status(404).send({ message: "Product not found" });
    }
    return res.status(200).send({ message: { productList: product } });
});

// ? delete product
app.delete("/product/delete/:id", (req, res) => {
    const productID = +req.params.id;
    const product = productList.find((item) => item.id == productID);

    if (!product) {
        return res.status(200).send({ message: "Product doesnt exist" });
    }

    const newProductList = productList.filter((item) => item.id !== productID);
    productList = structuredClone(newProductList);
    return res.status(200).send({ message: `Product ${product.name} deleted` });
});

// ? edit a product detail
app.put("/product/edit/:id", (req, res) => {
    const productID = +req.params.id;
    const product = productList.find((item) => item.id === productID);

    if (!product) {
        return res.status(404).send({ message: "Product not found" });
    }

    const newData = req.body;
    const newProductList = productList.map((item) => {
        if (item.id === productID) {
            return { ...newData };
        }
        return { ...item };
    });
    productList = structuredClone(newProductList);

    return res.status(200).send({ message: `Edited ${product.name}` });
});
