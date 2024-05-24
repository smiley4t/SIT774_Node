const express = require('express');
const morgan = require('morgan');
const app=express();
const port = 3000;

const path = require('path'); 
app.set('views', path.join('D:\\SIT774_Node', 'views'));
app.set('view engine', 'ejs');
app.use(morgan('common'));
app.use(express.static('public_html'));
let likedCount = 0;
let dislikedCount = 0;

//Add variables to access the JSON data provided for the users
const jsonIcecreamTypeData=require(path.join('D:\\SIT774_Node\\data','icecreamtypes'));
const jsonCommentData= require (path.join('D:\\SIT774_Node\\data','comments'));
const jsonUserData= require (path.join('D:\\SIT774_Node\\data','users'));
//GET request for index.ejs
app.get('/',(req,res,next)=>{
    res.render('index',{title:'Ice Cream Review'})

});
//GET request for jSonuserdata
app.get('/users',(req,res,next)=>{
    res.json(jsonUserData)
});
//GET request for icecreamtypes
app.get('/icecreamtypes',(req,res,next)=>{
    res.json(jsonIcecreamTypeData)
});
//GET request for comments
app.get('/comments',(req,res,next)=>{
    res.json(jsonCommentData)
});
//GET request for feedback
app.get('/feedback',(req,res,next)=>{
    res.render('list',{
        title:'User Feedback',
        types:jsonIcecreamTypeData.icecreamtypes,
        comments:jsonCommentData.comments,
        users:jsonUserData.users,
        rating:jsonCommentData.rating,
})});




//GET request for LIKED vote
// app.get('/votelike', (req, res) => {
//     likedCount++;
//     const currentDateTime = new Date();
//     res.render('result_1', {
//         dateTime: currentDateTime,
//         likedCount: likedCount,
//         dislikedCount: dislikedCount,
//         totalCount: likedCount + dislikedCount,
//     });
// });
//GET request for DISLIKED vote
// app.get('/votedislike', (req, res) => {
//     dislikedCount++;
//     const currentDateTime = new Date();
//     res.render('result_2', {
//         dateTime: currentDateTime,
//         likedCount: likedCount,
//         dislikedCount: dislikedCount,
//         totalCount: likedCount + dislikedCount,
//     });
// });


// The '404 file not found' error handler uses the template 404.ejs
// app.get('/doesnotexist', function(req,res)  {  
//     res.render('404', { title: '404', message: '404 - Not Found', url: req.url });
// });

// The forceerror route
// app.get('/forceerror', function(req, res) {
//     console.log('Got a request to force an error...');
//     try {
//         let f; // empty variable
//         // This line will cause an error because f is undefined and doesn't have a method called nomethod()
//         console.log(`f = ${f.nomethod()}`);
//     } catch (err) {
//         console.error('Error occurred:', err); // Log the error
//         // Render the error view with error details
//         res.status(500).render('error', { title: '500', message: err.message, stack: err.stack });
//     }
// });




    
    

    
  
app.listen(port, ()=> {
    console.log(`Web server running at: http://localhost:${port}`);
    console.log(`Type Ctrl+C to shut down the web server`);
})

