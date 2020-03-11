const express = require('express');

const exphbs  = require('express-handlebars');
 
const app = express();

const bodyParser = require('body-parser');
require('dotenv').config({path:"./config/key.env"});

const productModel = require("./model/product");
const productHome = require("./model/home");
const productSell = require("./model/bestsell");
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req,res) =>{
    res.render("index",{
        title:"Home",
        style:`home.css`,
        home: productHome.getAllSection(),
        bestsell:productSell. getAllSection()
    });
});

app.get('/product', (req,res) =>{
    res.render("product",{
        title:"products",
        style:`products.css`,
        headingInfo: "All Electronics",
        products :productModel.getAllProducts()
    });
});

app.get('/registration', (req,res) =>{
    res.render("registration",{
        title:"Registration",
        headingInfo: "Registration",
        style:`info.css`
    });
});

app.post('/registration', (req,res) =>{
    let count = 0;
    let errname = "";
    let erremail = "";
    let errpass = "";
    let errpassre = "";
    let bodyname = req.body.name;
    let bodyemail = req.body.email;
    let bodypass = req.body.psw;
    let bodypassre = req.body.psw_repeat;
    let alphatrim = bodyname.replace(/(\s*)/g,"");
        alphacheck = alphatrim.toUpperCase();
    let pattern_num = /[0-9]/;
    let pattern_word = /[a-zA-Z]/;
    for(var i=0; i < alphacheck.length; i++){
        if(alphacheck.charAt(i) < "A" || alphacheck.charAt(i) > "Z" ){
            errname = "Please Enter Full Name all Alphabet Letters";
            count++;
        }
    }
    if(bodyname == "" ){
        errname = "You Must Enter Name";
        count++;
    }
    if(bodyemail == ""){
        erremail = "You Must Enter email";
        count++;
    }
    if(bodyemail != ""){
        if(bodyemail.search('@') == -1){
            erremail = "Please Enter Valid Email Address";
            count++;
        }
    }
    if(bodypass == ""){
        errpass = "You Must Enter Password";
        count++;
    }
    if(bodypass != "" ){
        if(bodypass.length > 12 || bodypass.length < 5){
            errpass = "You Must Enter Password Least 6 to 12 long";
            count++;
        }
        else if(!(pattern_num.test(bodypass)) &&! (pattern_word.test(bodypass))){
                errpass = "You Must Enter with charactors or numbers";
                count++;
        }
    }
    if(bodypass != bodypassre || bodypassre == ""){
        errpassre = "Please Retry Your Password correctly";
        count++;
    }
    if(count > 0){
        res.render("registration",{
            title:"Registration",
            style:`info.css`,
            headingInfo: "Registration",
            ername: errname,
            eremail: erremail,
            erpassword: errpass,
            erpassre: errpassre
        });
    }else {
        const sgMail = require('@sendgrid/mail');
            sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
            const msg = {
            to: bodyemail,
            from: 'aywhr75@gmail.com',
            subject: 'New Registration info',
            html: 
            `New member name : ${bodyname} <br>
             New member email : ${bodyemail} <br>
             New member password : ${bodypass} <br>`,
            };
            sgMail.send(msg)
            .then(()=>{
                res.render("dashboard", {
                    title: "Welcome",
                    style:`info.css`,
                    welcomMsg: `Hello, ${bodyname} !
                                Thank you for Joining Amazon!`
                    
            });
            })
            .catch(err=>{
                console.log(`Error ${err}`);
            })            
    }
});

app.get('/login', (req,res) =>{
    res.render("login",{
        title:"Login",
        headingInfo: "Sign-in",
        style:`info.css`
    });
});

app.post('/login', (req,res)=>{
    let count = 0;
    let erremail = "";
    let errpass = "";
    if(req.body.email == "" || req.body.password == null){
        erremail= "You must enter email adress or user id";
        count++;
    }
    if(req.body.password == "" || req.body.password == null){
        errpass= "Passwords must consist of at least 6 charactors";
        count++;
    }
    if(count > 0){
        res.render('login',{
            title:"Login",
            headingInfo: "Sign-in",
            style:`info.css`,
            eremail: erremail,
            erpassword: errpass
        });
    }else{
        res.render('login',{
            title:"Login",
            headingInfo: "Sign-in",
            style:`info.css`,
            email:req.body.email,
            password:req.body.password
        });
    }
});

const  PORT=process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('Server is working', 4000);
});