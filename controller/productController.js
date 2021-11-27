const productService = require('../service/productService');

module.exports.createProduct = async (req, res) => {
    let response ={};
    try{
        const resposeFromService = await productService.createProduct(req.body);
        response.status = 200;
        response.message = 'Product Created Successfully';
        response.body = resposeFromService;
    } catch (error) {
        console.log('Something wen wrong: Cotroller: createProduct', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);

    //console.log('===', req.body);
    //productService.createProduct(req.body);
    //res.send('Product created successfully');
}