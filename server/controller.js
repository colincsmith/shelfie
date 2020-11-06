module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
        .then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send('something went wrong')
        })
    },

    addProduct: (req, res) => {
        const db = req.app.get('db')
        const {productInput, imageInput, priceInput} = req.body

        db.add_product(productInput, imageInput, priceInput)
        .then(() => {
            res.status(200)
        }).catch(err => {
            console.log(err)
            res.status(500).send('something went wrong')
        })
    }
}