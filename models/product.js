const products = [];

exports.product = () => {
    return ({
        fetchAll: () => {
            return products;
        },
        save: (product) => {
            products.push(product);
            return products;
        }
    })   
}