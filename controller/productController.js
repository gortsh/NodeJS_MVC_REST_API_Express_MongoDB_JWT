const productService = require('../service/productService');
const constants = require('../constrants');

module.exports.createProduct = async (req, res) => {
    let response ={...constants.defaultServerResponse};
    try{
        const resposeFromService = await productService.createProduct(req.body);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_CREATED;
        response.body = resposeFromService;
    } catch (error) {
        console.log('Something wen wrong: Cotroller: createProduct', error);
        response.message = error.message;
        
    }
    return res.status(response.status).send(response);

    //console.log('===', req.body);
    //productService.createProduct(req.body);
    //res.send('Product created successfully');
}