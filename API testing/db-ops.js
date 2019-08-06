var mysql = require('mysql');
var queryFunctions = require('./queries.js')();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"vendspace"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the database!!");
});

var message = {
    notauthenticated : 1,
    authenticated : 2,
    databaseerror : 3,
    alreadyexists : 4,
    inserted : 5,
    updated: 6,
    updationfailed : 7,
    fetched : 8,
    deleted : 9,
    deletionfailed : 10
}
exports = module.exports = function(){
    this.authuser = function(val,callback){
        con.query(authUserQuery(val), function (err, result, fields) {
            if(err){
                callback(err,{id : null,status : false,message :message.notauthenticated,body:'User is not authenicated.'});
            }
            else{
                callback(null,{id : null,status: true,message:message.authenticated,body:'Authenticated'});
            }
        });   
    },
    this.adduser = function(val,callback){  
        console.log(sql);
        con.query(checkIfExistQuery(val),function(err,result,fields){
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else if(result.length==1){
                callback(null,{id : null,status: false,message:message.alreadyexists,body:'User Already Exists'});
            }
            else{
                con.query(addUserQuery(val), function (err, result, fields) {
                    if(err){
                        callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
                    }
                    else if(result.affectedRows){
                        callback(null,{id : null,status: false,message:message.inserted,body:'User created successfully'});
                    }                    
                });  
            }
        });    
    },
    this.updatepass = function(val,callback){
        con.query(updatePassQuery(val),function(err,result,fields){
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else if(result.affectedRows){
                callback(null,{id : null,status: true,message:message.updated,body:'Updated Successfully'});
            }
            else{
                callback(null,{id : null,status: false,message:message.updationfailed,body:'Updation Failed.'});
            }
        });
    },
    this.addcategory = function(val,callback){
        con.query(addCategoryQuery(val),function(err,result,fields){
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else{
                callback(null,{id : null,status: true,message:message.inserted,body:'Category inserted successfully.'});
            }
        });
    },
    this.getcategory = function(val,callback){
        con.query(getCategoryQuery(),function(err,result,fields){
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else{
                callback(null,{id : null,status: true,message:message.fetched,body:'Categories fetched successfully'});
            }
        });
    },
    this.addcontact = function(val,callback){
        con.query(addContactQuery(val),function(err,result,fields){
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else{
                callback(null,{id : null,status: true,message:message.inserted,body:'Contact Added Successfully.'});
            }
        });
    },
    this.getcontact = function(val,callback){
        con.query(getContactQuery(),function(err,result,fields){
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else{
                callback(null,{id : null,status: true,message:message.fetched,body:'Contact Fetched Successfully.'});
            }
        });
    },
    this.addimage = function(val,callback){
        con.query(addImageQuery(val),function(err,result,fields){
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else{
                callback(null,{id : null,status: true,message:message.inserted,body:'Image Inserted Successfully.'});
            }
        });
    },
    this.addreview = function(val,callback){
        con.query(addReviewQuery(val),function(err,result,fields){
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else{
                callback(null,{id : null,status: true,message:message.inserted,body:'Review added successfully'});
            }
        });
    },
    this.addaddress = function(val,callback){
        console.log(addAddressQuery(val));
        con.query(addAddressQuery(val),function(err,result,fields){
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else{
                callback(null,{id : null,status: true,message:message.inserted,body:'Address added Successfully.'});
            }
        });
    },
    this.addshipping = function(val,callback){
        con.query(addShippingQuery(val),function(err,result,fields){
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else{
                callback(null,{id : null,status: true,message:message.inserted,body:'Shipping details added successfully.'});
            }
        });
    },
    this.addcart = function(val,callback){
        con.query(addCartQuery(val),function(err,result,fields){
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else{
                callback(null,{id : null,status: true,message:message.inserted,body:'Added to cart.'});
            }
        });
    },
    this.updatecart = function(val,callback){
        con.query(updateCartQuery(val),function(err,result,fields){
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else if(result.affectedRows){
                callback(null,{id : null,status: true,message:message.updated,body:'Cart Updated Successfully.'});
            }
            else{
                callback(null,{id : null,status: false,message:message.updationfailed,body:'Failed to update.'});
            }
        });
    },
    this.deletefromcart = function(val,callback){
        console.log(deleteFromCartQuery(val));
        con.query(deleteFromCartQuery(val),function(err,result,fields){
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else if(result.affectedRows){
                callback(null,{id : null,status: true,message:message.deleted,body:'Deleted Successfully'});
            }
            else{
                callback(null,{id : null,status: false,message:message.deletionfailed,body:'Failed to delete.'});
            }
        });
    },
    this.updateaddress = function(val,callback){
        con.query(updateAddressQuery(val),function(err,result,fields){
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else if(result.affectedRows){
                callback(null,{id : null,status: true,message:message.updated,body:'Address updated successfully.'});
            }
            else{
                callback(null,{id : null,status: false,message:message.updationfailed,body:'Failed to update'});
            }
        });
    },
    this.getshipping = function(val,callback){
        console.log(getShippingQuery(val));
        con.query(getShippingQuery(val), function (err, result, fields) {
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else{
                callback(null,{id : null,status: true,message:message.fetched,body:'Shipping details fethced'});
            }
        });   
    },
    this.getreviews = function(val,callback){
        console.log(getReviewQuery(val));
        con.query(getReviewQuery(val), function (err, result, fields) {
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else{
                callback(null,{id : null,status: true,message:message.fetched,body:'Reviews Fetched'});
            }
        }); 
    },
    this.getcart = function(val,callback){
        console.log(getCartQuery(val));
        con.query(getCartQuery(val), function (err, result, fields) {
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else{
                callback(null,{id : null,status: true,message:message.fetched,body:'Cart Details Fetched'});
            }
        }); 
    },
    this.addproduct = function(val,callback){
        console.log(addProductQuery(val));
        con.query(addProductQuery(val),function(err,result,fields){
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else{
                callback(null,{id : null,status: true,message:message.inserted,body:'Product added successfully.'});
            }
        });
    },
    this.updateproduct = function(val,callback){
        console.log(updateProductQuery(val));
        con.query(updateProductQuery(val),function(err,result,fields){
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else if(result.affectedRows){
                callback(null,{id : null,status: true,message:message.updated,body:'Successfully Updated product.'});
            }
            else{
                callback(null,{id : null,status: false,message:message.updationfailed,body:'Failed to update'});
            }
        });
    },
    this.getproduct = function(val,callback){
        console.log(getProductQuery(val));
        con.query(getProductQuery(val), function (err, result, fields) {
            if(err){
                callback(err,{id : null,status: false,message:message.databaseerror,body:'Database Error'});
            }
            else{
                callback(null,{id : null,status: true,message:message.fetched,body:'Product Fetched Successfully.'});
            }
        }); 
    }
}