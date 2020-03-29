const fs = require('fs');
const path = require('path');

let products = [];

const getProductsFromFile = async cb => {
	await fs.readFile(PATH_TO_PRODUCT_FILE, cb);
};

const PATH_TO_PRODUCT_FILE = path.join(
	path.dirname(process.mainModule.filename),
	'data',
	'products.json'
);

const parseProducts = async (err, fileContent) => {
	if (err) {
		console.log('[products.js] Error :', err);
	}
	if (!err) {
		products = await JSON.parse(fileContent);
	}
};

const saveProducts = product => (err, fileContent) => {
	if (err) {
		console.error(`Saving product Error: ${err}`);
	}
	if (!err && product) {
		const productsParsed = JSON.parse(fileContent);
		products = [...productsParsed, product];
		fs.writeFile(
			PATH_TO_PRODUCT_FILE,
			JSON.stringify([...products]),
			err => {
				if (err) {
					console.log(`Error: ${err}`);
				}
			}
		);
	}
};

exports.product = () => {
	return {
		fetchAll: async () => {
			getProductsFromFile(parseProducts);
			return products;
		},
		save: product => {
			getProductsFromFile(saveProducts(product));
		},
		editProductName: (oldName, newName) => {
			fs.readFile(PATH_TO_PRODUCT_FILE, (err, fileContent) => {
				if (err) {
					console.error(`Error: ${err}`);
				}
				const productsParsed = JSON.parse(fileContent);
				products = productsParsed.map(product => {
					if (product.name === oldName) {
						product.name = newName;
						return product;
					}
					return product;
				});
				fs.writeFile(PATH_TO_PRODUCT_FILE, JSON.stringify(products), err => {
					if (err) {
						console.error(`Error: ${err}`);
					}
				});
			});
		}
	};
};
