const express =require ('express').Router()
const userController = require('../controller/userController');
const categoryController = require('../controller/categoryController');
const productController = require('../controller/productController');
const popularController = require('../controller/popularController')
const { admin_authenticate, authenticateToken} = require('../JWT/JWT_Authenticate')
const email = require('../mailer/email')



exports.routes=(router) =>{
    
    router.post('/register', userController.user_register);
    router.post('/login', userController.user_login);
    router.get('/verified', userController.verified);

    router.get('/users', userController.getAllUsers);
    router.get('/user/:id', userController.getUsersById);
    router.put('/user/:id', userController.updateUser);
    router.put('/user/role/:id', userController.updateRole);
    router.delete('/user/:id', userController.deleteUser);

    router.get('/categories', categoryController.allCategories);
    router.get('/category/:id', categoryController.getCategory);
    // router.post('/category',admin_authenticate, categoryController.createCategory);
    // router.put('/category/:id',admin_authenticate, categoryController.updateCategory);
    // router.delete('/category/:id',admin_authenticate, categoryController.deleteCategory);
    router.post('/category', categoryController.createCategory);
    router.put('/category/:id',categoryController.updateCategory);
    router.delete('/category/:id', categoryController.deleteCategory);

    router.get('/products', productController.allProduct);
    router.get('/product/:id', productController.getProduct);
    // router.post('/product',admin_authenticate, productController.createProduct);
    // router.put('/product/:id', admin_authenticate, productController.updateProduct);
    // router.delete('/product/:id', admin_authenticate, productController.deleteProduct);
    router.post('/product', productController.createProduct);
    router.put('/product/:id', productController.updateProduct);
    router.delete('/product/:id', productController.deleteProduct);
    
    router.get('/popular', popularController.allPopularProduct);
    router.post('/popular', popularController.createPopularProduct);
    router.put('/popular/:id', popularController.updatePopularProduct);
    router.delete('/popular/:id', popularController.deletePopularProduct);
   
    router.post('/send-email', email.createMail)
   
}