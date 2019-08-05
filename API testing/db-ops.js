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

exports = module.exports = function(){
    this.authuser = function(val,callback){
        con.query(authUserQuery(val), function (err, result, fields) {
            if(err){
                callback(err);
            }
            callback(null,result);
        });   
    },
    this.adduser = function(val,callback){  
        console.log(sql);
        con.query(checkIfExistQuery(val),function(err,result,fields){
            if(err){
                callback(err);
            }
            else if(result.length==1){
                callback(null,{insertion:0,status:'already exists'});
            }
            else{
                con.query(addUserQuery(val), function (err, result, fields) {
                    if(err){
                        callback(err);
                    }
                    else if(result.affectedRows){
                        callback(null,{insertion:1});
                    }
                    else{
                        callback(null,{insertion:0});
                    }
                    
                });  
            }
        });    
    },
    this.updatepass = function(val,callback){
        con.query(updatePassQuery(val),function(err,result,fields){
            if(err){
                callback(err);
            }
            else if(result.affectedRows){
                callback(null,{updation:1});
            }
            else{
                callback(null,{updation:0});
            }
        });
    },
    this.addcategory = function(val,callback){
        con.query(addCategoryQuery(val),function(err,result,fields){
            if(err){
                callback(err);
            }
            else{
                callback(null,{insertion:1});
            }
        });
    },
    this.getcategory = function(val,callback){
        con.query(getCategoryQuery(),function(err,result,fields){
            if(err){
                callback(err);
            }
            else{
                callback(null,result);
            }
        });
    },
    this.addcontact = function(val,callback){
        con.query(addContactQuery(val),function(err,result,fields){
            if(err){
                callback(err);
            }
            else{
                callback(null,{insertion:1});
            }
        });
    },
    this.getcontact = function(val,callback){
        con.query(getContactQuery(),function(err,result,fields){
            if(err){
                callback(err);
            }
            else{
                callback(null,result);
            }
        });
    },
    this.addimage = function(val,callback){
        con.query(addImageQuery(val),function(err,result,fields){
            if(err){
                callback(err);
            }
            else{
                callback(null,{insertion:1});
            }
        });
    },
    this.addreview = function(val,callback){
        con.query(addReviewQuery(val),function(err,result,fields){
            if(err){
                callback(err);
            }
            else{
                console.log(result);
                callback(null,{insertion:1});
            }
        });
    },
    this.addaddress = function(val,callback){
        console.log(addAddressQuery(val));
        con.query(addAddressQuery(val),function(err,result,fields){
            if(err){
                callback(err);
            }
            else{
                console.log(result);
                callback(null,{insertion:1});
            }
        });
    },
    this.addshipping = function(val,callback){
        con.query(addShippingQuery(val),function(err,result,fields){
            if(err){
                callback(err);
            }
            else{
                console.log(result);
                callback(null,{insertion:1});
            }
        });
    },
    this.addcart = function(val,callback){
        con.query(addCartQuery(val),function(err,result,fields){
            if(err){
                callback(err);
            }
            else{
                console.log(result);
                callback(null,{insertion:1});
            }
        });
    },
    this.updatecart = function(val,callback){
        console.log(updateCartQuery(val));
        con.query(updateCartQuery(val),function(err,result,fields){
            if(err){
                callback(err);
            }
            else if(result.affectedRows){
                console.log(updateCartQuery(val));
                callback(null,{updation:1});
            }
            else{
                console.log(result);
                callback(null,{updation:0});
            }
        });
    },
    this.deletefromcart = function(val,callback){
        console.log(deleteFromCartQuery(val));
        con.query(deleteFromCartQuery(val),function(err,result,fields){
            if(err){
                callback(err);
            }
            else if(result.affectedRows){
                console.log(updateCartQuery(val));
                callback(null,{updation:1});
            }
            else{
                console.log(result);
                callback(null,{updation:0});
            }
        });
    },
    this.updateaddress = function(val,callback){
        console.log(updateAddressQuery(val));
        con.query(updateAddressQuery(val),function(err,result,fields){
            if(err){
                callback(err);
            }
            else if(result.affectedRows){
                console.log(updateCartQuery(val));
                callback(null,{updation:1});
            }
            else{
                console.log(result);
                callback(null,{updation:0});
            }
        });
    },
    this.getshipping = function(val,callback){
        console.log(getShippingQuery(val));
        con.query(getShippingQuery(val), function (err, result, fields) {
            if(err){
                callback(err);
            }
            callback(null,result);
        });   
    },
    this.getreviews = function(val,callback){
        console.log(getReviewQuery(val));
        con.query(getReviewQuery(val), function (err, result, fields) {
            if(err){
                callback(err);
            }
            callback(null,result);
        }); 
    },
    this.getcart = function(val,callback){
        console.log(getCartQuery(val));
        con.query(getCartQuery(val), function (err, result, fields) {
            if(err){
                callback(err);
            }
            callback(null,result);
        }); 
    },
    this.addproduct = function(val,callback){
        console.log(addProductQuery(val));
        con.query(addProductQuery(val),function(err,result,fields){
            if(err){
                callback(err);
            }
            else{
                callback(null,{insertion:1});
            }
        });
    }

}