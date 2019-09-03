const http = require('http');
const dbops = require('./db-ops')();
const { parse } = require('querystring');
const CONTENT_TYPE = {'Content-Type':'text/JSON'};
var formidable = require('formidable');
var fs = require('fs');


http.createServer(function (req, res) {
  
  res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Content-Type','application/x-www-form-urlencoded');
    // This condition is to authenticate user.
    if(req.url ==='/authuser'){
        console.log("aut checking")
        collectRequestData(req, body => {
            console.log("auth chekcing");
              let authval = { email : body.email , password : body.password};
              authuser(authval,function(err,result){
                    response(result,res,CONTENT_TYPE); 
            });
        });
    }

    // This condition is for adding a new user.
    if(req.url ==='/adduser'){
        console.log("res checking");
        collectRequestData(req, body => {
            console.log("response checking");
              let userdata = { email : body.email , password : body.password, phone : body.contact, name : body.fullName, role : 'USER'};
              adduser(userdata,function(err,result){
                console.log("response checking");
                response(result,res,CONTENT_TYPE); 
            });
        });
    }
    // This condition is to reset the password.
    if(req.url ==='/updatepass' && req.method === 'POST'){
        collectRequestData(req, body => {
              let passval = { email: body.email , oldpass: body.oldpass, newpass: body.newpass};
              updatepass(passval,function(err,result){
                response(result,res,CONTENT_TYPE);
            });
        });
    }
    // This condition is to add a new category of products.
    if(req.url==='/addcategory' && req.method === 'POST'){
        collectRequestData(req, body=>{
            let catVal = { catName: body.categoryname };
            addcategory(catVal,function(err,result){
                response(result,res,CONTENT_TYPE); 
            });
        });
    }
    // This condition is for getting all the available categories.
    if(req.url==='/getcategory'){
        collectRequestData(req, body=>{
            console.log("categroy check first");
            getcategory(null,function(err,result){
                response(result,res,CONTENT_TYPE); 
            });
        });
    }
    // This condition is to add a new contact information.
    if(req.url==='/addcontact' && req.method === 'POST'){
        collectRequestData(req, body=>{
            let contactVal = {contactor:body.contactor,contactorEmail:body.contactorEmail,description:body.description}
            addcontact(contactVal,function(err,result){
                response(result,res,CONTENT_TYPE);
            });
        });
    }
    // This condition is to get all the contacted information. 
    if(req.url==='/getcontact'){
        collectRequestData(req, body=>{
            getcontact(null,function(err,result){
                response(result,res,CONTENT_TYPE);
            });
        });
    }
    // This condition is for adding the url's of the uploaded image.

    if(req.url==='/addimage' && req.method === 'POST'){
        collectRequestData(req, body=>{
            let imageVal = {productId : body.productId,imgType : body.imgType,imgURL : body.imgURL };
            addimage(imageVal,function(err,result){
                response(result,res,CONTENT_TYPE);
            });
        });
    }
    // This condition is 
    if(req.url==='/addreview' && req.method === 'POST'){
        collectRequestData(req, body=>{
            let review_val ={user_id : body.user_id,title : body.title,rating : body.rating,review_desc : body.review_desc};
            addreview(review_val,function(err,result){
                response(result,res,CONTENT_TYPE);
            });
        });
    }
    // add address 
    if(req.url==='/addaddress' && req.method === 'POST'){
        collectRequestData(req, body=>{
            let address_val ={user_id : body.user_id,address : body.address,address_type : body.address_type};
            addaddress(address_val,function(err,result){
                response(result,res,CONTENT_TYPE);
            });
        });
    }
    // add shipping details
    if(req.url==='/addshipping' && req.method === 'POST'){
        collectRequestData(req, body=>{
            let shipping_val ={shipper : body.shipper,payment_method : body.payment_method,user_id : body.user_id,address_id : body.address_id};
            addshipping(shipping_val,function(err,result){
                response(result,res,CONTENT_TYPE);
            });
        });
    }
    // add cart 
    if(req.url==='/addcart' && req.method === 'POST'){
        collectRequestData(req, body=>{
            let cart_val ={quantity : body.quantity,total_price : body.total_price,user_id : body.user_id,product_id : body.product_id,flag : body.flag};
            addcart(cart_val,function(err,result){
                response(result,res,CONTENT_TYPE);
            });
        });
    }
    // update cart 
    if(req.url ==='/updatecart' && req.method === 'POST'){
        collectRequestData(req, body => {
              let updatecart_val = {newquantity : body.newquantity,user_id : body.user_id,product_id : body.product_id};
              updatecart(updatecart_val,function(err,result){
                response(result,res,CONTENT_TYPE);
            });
        });
    }
    // delete from cart 
    if(req.url ==='/deletefromcart' && req.method === 'POST'){
        collectRequestData(req, body => {
              let deletefromcart_val = {product_id : body.product_id,user_id : body.user_id};
              deletefromcart(deletefromcart_val,function(err,result){
                response(result,res,CONTENT_TYPE);
            });
        });
    }
    // update address
    if(req.url ==='/updateaddress' && req.method === 'POST'){
        collectRequestData(req, body => {
              let updateaddress_val = {address : body.address,address_type : body.address_type,user_id : body.user_id};
              updateaddress(updateaddress_val,function(err,result){
                response(result,res,CONTENT_TYPE);
            });
        });
    }
    // get shipping details
    if(req.url ==='/getshipping' && req.method === 'POST'){
        collectRequestData(req, body => {
              let shipping_val = {address_id : body.address_id,shipping_address_id : body.shipping_address_id};
              getshipping(shipping_val,function(err,result){
                response(result,res,CONTENT_TYPE);
            });
        });
    }
    // get reviews 
    if(req.url ==='/getreviews' && req.method === 'POST'){
        collectRequestData(req, body => {
              let reviews_val = {product_id : body.product_id};
              getreviews(reviews_val,function(err,result){
                response(result,res,CONTENT_TYPE); 
            });
        });
    }
    // get cart 
    if(req.url ==='/getcart' && req.method === 'POST'){
        collectRequestData(req, body => {
              let cart_val = {product_id : body.product_id};
              getcart(cart_val,function(err,result){
                response(result,res,CONTENT_TYPE); 
            });
        });
    }
    // add product 
    if(req.url ==='/addproduct' && req.method === 'POST'){
        console.log("chekcaklf");
        collectRequestData(req, body => {
              let addproduct_val = {name: body.productname,category_id : body.category,price : body.price,available_quantity : body.available,description: body.description,offer: body.offer,average_rating : body.average_rating,img_id : "1"};
              console.log("is it good");
              addproduct(addproduct_val,function(err,result){
                response(result,res,CONTENT_TYPE); 
            });
        });
    }
    // update product 
    if(req.url ==='/updateproduct' && req.method === 'POST'){
        collectRequestData(req, body => {
            let updateproduct_val = {id: body.id,name: body.name,category_id : body.category_id,price : body.price,available_quantity : body.available_quantity,shipping_charges : body.shipping_charges,description: body.description,offer: body.offer,average_rating : body.average_rating,img_id : body.img_id};
            updateproduct(updateproduct_val,function(err,result){
                response(result,res,CONTENT_TYPE);
          });
      });
    }
    // fetch product
    if(req.url ==='/getproduct' && req.method === 'POST'){
        collectRequestData(req, body => {
            let getproduct_val = {id: body.id};
            getproduct(getproduct_val,function(err,result){
                response(result,res,CONTENT_TYPE); 
          });
      });
    }
    // fetch all product
    if(req.url ==='/getallproduct'){
        collectRequestData(req, body => {
            getallproduct(null,function(err,result){
                response(result,res,CONTENT_TYPE); 
          });
      });
    }
    // upload files
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            console.log("Data",files.filekey);
            var oldpath = files.filekey.path;
            var newpath = './uploads/' + files.filekey.name;
            var data = fields.product_id;
            fs.writeFile(newpath,data, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
                console.log('File written!');
            });

            // Delete the file
            fs.unlink(oldpath, function (err) {
                if (err) throw err;
                console.log('File deleted!');
            });
        });
  }
}).listen(3000); 
function response(result,res,contenttype){
    res.writeHead(statusCode(result.message),contenttype);
    res.write(JSON.stringify(result));
    res.end();
}
function statusCode(code){
    switch(code){
        case 1:
            return 401;
        case 2:
            return 200;
        case 3: 
            return 500;
        case 4:
            return 406;
        case 5:
            return 201;
        case 6: 
            return 201;
        case 7:
            return 500;
        case 8:
            return 200;
        case 9: 
            return 200;
        case 10:
            return 406;
        default: 
            break;
    }
}
function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/json';
    // if(true) {
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', () => {
        if(body==''){
            callback((body));
        }
        else{
            callback(JSON.parse(body));
        }
    });
    // }
    // else {
    //     callback(null);
    // }
    }
function decideshipping(arg){
    if(arg>500){
        return 50;
    }
    else{
        return 0;
    }
}
