const Category = require('../models/Category');
const Product = require('../models/Product');

module.exports = {
    index(req, res) {
        return res.render('user/index');
    },
    register(req, res) {
        return res.render('user/register');
    },
    login(req, res) {
        return res.render('user/login');
    },
    create(req, res) {
        //pegar categorias
        Category.all().then((results) => {
            const categories = results.rows;
            return res.render('products/create', { categories });
        }).catch((err) => {
            throw new Error(err);
        })
    },

    async post(req, res) {
        // return 
        const keys = Object.keys(req.body);

        for (key in keys) {
            if (req.body[key] == "") {
                return res.send('dede')
            }
        }

        let results = await Product.create(req.body);
        const productId = results.rows[0].id;

        results = await Category.all();
        const categories = results.rows;

        return res.render('products/create', { productId, categories })
    }
}