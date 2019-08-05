exports = module.exports = function(){
    this.authUserQuery = function(val){
        return "SELECT full_name,email FROM users WHERE email ='"+val.email+"' AND password ='"+val.password+"'";
    }
    this.checkIfExistQuery = function(val){
        return "SELECT email FROM users WHERE email= '"+val.email+"'";
    }
    this.addUserQuery = function(val){
        return "INSERT INTO users (full_name,email,password,role,phone,created_at) VALUES ('"+val.name+"','"+val.email+"','"+val.password+"','"+val.role+"','"+val.phone+"',now())";
    }
    this.updatePassQuery = function(val){
        return "UPDATE users SET `password` =  '"+val.newpass+"' WHERE email = '"+val.email+"' AND password ='"+val.oldpass+"'";
    }
    this.addCategoryQuery = function(val){
        return "INSERT INTO categories (name,created_at) VALUES ('"+val.catName+"',now())";
    }
    this.getCategoryQuery = function(){
        return "SELECT id,name FROM categories";
    }
    this.addContactQuery = function(val){
        return "INSERT INTO contact (name,email,description,created_at) VALUES ('"+val.contactor+"','"+val.contactorEmail+"','"+val.description+"',now())";
    }
    this.getContactQuery = function(){
        return "SELECT * FROM contact";
    }
    this.addImageQuery = function(val){
        return "INSERT INTO image (product_id,img_type,img_url,created_at) VALUES ('"+val.productId+"','"+val.imgType+"','"+val.imgURL+"',now())";
    }
    this.addReviewQuery = function(val){
        return "INSERT INTO reviews (user_id,title,rating,description,created_at) VALUES('"+val.user_id+"','"+val.title+"','"+val.rating+"','"+val.review_desc+"',now())";
    }
    this.addAddressQuery = function(val){
        return "INSERT INTO address (address,address_type,user_id,created_at) VALUES('"+val.address+"','"+val.address_type+"','"+val.user_id+"',now())";
    }
    this.addShippingQuery = function(val){
        return "INSERT INTO shipping_details (name,address_id,user_id,payment_method,created_at) VALUES('"+val.shipper+"','"+val.address_id+"','"+val.user_id+"','"+val.payment_method+"',now())";
    }
    this.addCartQuery = function(val){
        return "INSERT INTO cart (quantity,total_price,user_id,product_id,flag,created_at) VALUES('"+val.quantity+"','"+val.total_price+"','"+val.user_id+"','"+val.product_id+"','"+val.flag+"',now())";
    }
    this.updateCartQuery = function(val){
        return "UPDATE cart SET quantity ="+val.newquantity+" WHERE user_id = '"+val.user_id+"' AND product_id ='"+val.product_id+"'";
    }
    this.deleteFromCartQuery = function(val){
        return "DELETE FROM cart WHERE user_id='"+val.user_id+"' AND product_id ='"+val.product_id+"'";
    }
    this.updateAddressQuery = function(val){
        return "UPDATE address SET address ='"+val.address+"' WHERE user_id = '"+val.user_id+"' AND address_type ='"+val.address_type+"'";
    }
    this.getShippingQuery = function(val){
        return "SELECT shipping_details.name,address.address,address.address_type,payment_method,phone"
        +" FROM shipping_details" 
        +" JOIN address" 
        +" ON shipping_details.address_id=address.id"
        +" WHERE shipping_details.address_id ='"+val.shipping_address_id+"' AND address.id ='"+val.address_id+"';";
    }
    this.getReviewQuery = function(val){
        return "SELECT users.full_name,title,rating,description "
        +"FROM reviews "
        +"JOIN users "
        +"ON reviews.user_id =users.id "
        +"WHERE product_id ='"+val.product_id+"' LIMIT 0,10;";
    }
    this.getCartQuery = function(val){
        return "SELECT products.name,products.price,image.img_url,quantity"
        +" FROM cart"
        +" INNER JOIN products" 
        +" ON cart.product_id =products.id"
        +" INNER JOIN image"
        +" ON cart.product_id =image.product_id"
        +" WHERE cart.product_id ='"+val.product_id+"'" 
        +" GROUP BY cart.product_id" 
        +" LIMIT 0,5;";
    }
    this.addProductQuery = function(val){
        return "INSERT INTO products (category_id,name,price,available_quantity,shipping_charges,description,offer,average_rating,img_id,created_at) VALUES ('"+val.category_id+"','"+val.name+"','"+val.price+"','"+val.available_quantity+"','"+val.shipping_charges+"','"+val.description+"','"+val.offer+"','"+val.average_rating+"','"+val.img_id+"',now())";
    } 
}