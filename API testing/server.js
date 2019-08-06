const http = require('http');
const dbops = require('./db-ops')();
const { parse } = require('querystring');
const CONTENT_TYPE = {'Content-Type':'text/JSON'};


http.createServer(function (req, res) {
    // auth user
    if(req.url ==='/authuser' && req.method === 'POST'){
        collectRequestData(req, body => {
              let authval = { email : body.email , password : body.password};
              authuser(authval,function(err,result){
                    res.writeHead(200,{'Content-Type':'text/plain'});
                    res.write(JSON.stringify(result));
                    res.end(); 
            });
        });
    }

    // add user
    if(req.url ==='/adduser' && req.method === 'POST'){
        collectRequestData(req, body => {
              let userdata = { email : body.email , password : body.password, phone : body.phone, name : body.name, role:body.role};
              adduser(userdata,function(err,result){
                    res.writeHead(200,{'Content-Type':'text/plain'});
                    res.write(JSON.stringify(result));
                    res.end(); 
            });
        });
    }
    // update password
    if(req.url ==='/updatepass' && req.method === 'POST'){
        collectRequestData(req, body => {
              let passval = { email: body.email , oldpass: body.oldpass, newpass: body.newpass};
              updatepass(passval,function(err,result){
                  if(err){
                    res.writeHead(200,{'Content-Type':'text/plain'});
                    res.write(JSON.stringify({updation:0}));
                    res.end(); 
                  }
                  else{
                    res.writeHead(200,{'Content-Type':'text/plain'});
                    res.write(JSON.stringify(result));
                    res.end();  
                  }
            });
        });
    }
    // add category
    if(req.url==='/addcategory' && req.method === 'POST'){
        collectRequestData(req, body=>{
            let catVal = { catName: body.catName };
            addcategory(catVal,function(err,result){
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.write(JSON.stringify(result));
                res.end(); 
            });
        });
    }
    // fetch category
    if(req.url==='/getcategory' && req.method === 'GET'){
        collectRequestData(req, body=>{
            getcategory(null,function(err,result){
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.write(JSON.stringify(result));
                res.end(); 
            });
        });
    }
    // insert contact
    if(req.url==='/addcontact' && req.method === 'POST'){
        collectRequestData(req, body=>{
            let contactVal = {contactor:body.contactor,contactorEmail:body.contactorEmail,description:body.description}
            addcontact(contactVal,function(err,result){
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.write(JSON.stringify(result));
                res.end();
            });
        });
    }
    // get contact 
    if(req.url==='/getcontact' && req.method === 'GET'){
        collectRequestData(req, body=>{
            getcontact(null,function(err,result){
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.write(JSON.stringify(result));
                res.end();
            });
        });
    }
    // add image
    if(req.url==='/addimage' && req.method === 'POST'){
        collectRequestData(req, body=>{
            let imageVal = {productId : body.productId,imgType : body.imgType,imgURL : body.imgURL };
            addimage(imageVal,function(err,result){
                res.writeHead(200,{'Content-Type':'text/JSON'});
                res.write(JSON.stringify(result));
                res.end();
            });
        });
    }
    // add reviews
    if(req.url==='/addreview' && req.method === 'POST'){
        collectRequestData(req, body=>{
            let review_val ={user_id : body.user_id,title : body.title,rating : body.rating,review_desc : body.review_desc};
            addreview(review_val,function(err,result){
                res.writeHead(200,{'Content-Type':'text/JSON'});
                res.write(JSON.stringify(result));
                res.end();
            });
        });
    }
    // add address 
    if(req.url==='/addaddress' && req.method === 'POST'){
        collectRequestData(req, body=>{
            let address_val ={user_id : body.user_id,address : body.address,address_type : body.address_type};
            addaddress(address_val,function(err,result){
                res.writeHead(200,{'Content-Type':'text/JSON'});
                res.write(JSON.stringify(result));
                res.end();
            });
        });
    }
    // add shipping details
    if(req.url==='/addshipping' && req.method === 'POST'){
        collectRequestData(req, body=>{
            let shipping_val ={shipper : body.shipper,payment_method : body.payment_method,user_id : body.user_id,address_id : body.address_id};
            addshipping(shipping_val,function(err,result){
                res.writeHead(200,{'Content-Type':'text/JSON'});
                res.write(JSON.stringify(result));
                res.end();
            });
        });
    }
    // add cart 
    if(req.url==='/addcart' && req.method === 'POST'){
        collectRequestData(req, body=>{
            let cart_val ={quantity : body.quantity,total_price : body.total_price,user_id : body.user_id,product_id : body.product_id,flag : body.flag};
            addcart(cart_val,function(err,result){
                res.writeHead(200,{'Content-Type':'text/JSON'});
                res.write(JSON.stringify(result));
                res.end();
            });
        });
    }
    // update cart 
    if(req.url ==='/updatecart' && req.method === 'POST'){
        collectRequestData(req, body => {
              let updatecart_val = {newquantity : body.newquantity,user_id : body.user_id,product_id : body.product_id};
              updatecart(updatecart_val,function(err,result){
                  if(err){
                    res.writeHead(200,{'Content-Type':'text/JSON'});
                    res.write(JSON.stringify({updation:0}));
                    res.end(); 
                  }
                  else{
                    res.writeHead(200,{'Content-Type':'text/JSON'});
                    res.write(JSON.stringify(result));
                    res.end();  
                  }
            });
        });
    }
    // delete from cart 
    if(req.url ==='/deletefromcart' && req.method === 'POST'){
        collectRequestData(req, body => {
              let deletefromcart_val = {product_id : body.product_id,user_id : body.user_id};
              deletefromcart(deletefromcart_val,function(err,result){
                  if(err){
                    res.writeHead(200,{'Content-Type':'text/JSON'});
                    res.write(JSON.stringify({updation:0}));
                    res.end(); 
                  }
                  else{
                    res.writeHead(200,{'Content-Type':'text/JSON'});
                    res.write(JSON.stringify(result));
                    res.end();  
                  }
            });
        });
    }
    // update address
    if(req.url ==='/updateaddress' && req.method === 'POST'){
        collectRequestData(req, body => {
              let updateaddress_val = {address : body.address,address_type : body.address_type,user_id : body.user_id};
              updateaddress(updateaddress_val,function(err,result){
                  if(err){
                    res.writeHead(200,{'Content-Type':'text/JSON'});
                    res.write(JSON.stringify({updation:0}));
                    res.end(); 
                  }
                  else{
                    res.writeHead(200,{'Content-Type':'text/JSON'});
                    res.write(JSON.stringify(result));
                    res.end();  
                  }
            });
        });
    }
    // get shipping details
    if(req.url ==='/getshipping' && req.method === 'POST'){
        collectRequestData(req, body => {
              let shipping_val = {address_id : body.address_id,shipping_address_id : body.shipping_address_id};
              getshipping(shipping_val,function(err,result){
                    res.writeHead(200,{'Content-Type':'text/JSON'});
                    res.write(JSON.stringify(result));
                    res.end(); 
            });
        });
    }
    // get reviews 
    if(req.url ==='/getreviews' && req.method === 'POST'){
        collectRequestData(req, body => {
              let reviews_val = {product_id : body.product_id};
              getreviews(reviews_val,function(err,result){
                    res.writeHead(200,{'Content-Type':'text/JSON'});
                    res.write(JSON.stringify(result));
                    res.end(); 
            });
        });
    }
    // get cart 
    if(req.url ==='/getcart' && req.method === 'POST'){
        collectRequestData(req, body => {
              let cart_val = {product_id : body.product_id};
              getcart(cart_val,function(err,result){
                    res.writeHead(200,{'Content-Type':'text/JSON'});
                    res.write(JSON.stringify(result));
                    res.end(); 
            });
        });
    }
    // add product 
    if(req.url ==='/addproduct' && req.method === 'POST'){
        collectRequestData(req, body => {
              let addproduct_val = {name: body.name,category_id : body.category_id,price : body.price,available_quantity : body.available_quantity,shipping_charges : body.shipping_charges,description: body.description,offer: body.offer,average_rating : body.average_rating,img_id : body.img_id};
              addproduct(addproduct_val,function(err,result){
                    res.writeHead(200,{'Content-Type':'text/JSON'});
                    res.write(JSON.stringify(result));
                    res.end(); 
            });
        });
    }
    // update product 
    if(req.url ==='/updateproduct' && req.method === 'POST'){
        collectRequestData(req, body => {
            let updateproduct_val = {id: body.id,name: body.name,category_id : body.category_id,price : body.price,available_quantity : body.available_quantity,shipping_charges : body.shipping_charges,description: body.description,offer: body.offer,average_rating : body.average_rating,img_id : body.img_id};
            updateproduct(updateproduct_val,function(err,result){
                  res.writeHead(200,{'Content-Type':'text/JSON'});
                  res.write(JSON.stringify(result));
                  res.end(); 
          });
      });
    }
    // fetch product
    if(req.url ==='/getproduct' && req.method === 'POST'){
        collectRequestData(req, body => {
            let getproduct_val = {id: body.id};
            getproduct(getproduct_val,function(err,result){
                  res.writeHead(200,{'Content-Type':'text/JSON'});
                  res.write(JSON.stringify(result));
                  res.end(); 
          });
      });
    }
}).listen(3000); 
function response(result,res,contenttype){
    res.writeHead()
}
function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/json';
    if(true) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(JSON.parse(body));
        });
    }
    else {
        callback(null);
    }
}