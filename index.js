const express=require("express")
const app = express();
const port=8080;
const path=require("path")
const {v4:uuidv4}=require("uuid");

app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log(`listening on port : ${port}`)
})

let posts=[{
    id:uuidv4(),
    username:"karanjamble",
    content:"Finally i got my 1st internship in INFOSYS"
},{
    id:uuidv4(),
    username:"ketaki13",
    content:"watch big dreams and apply full potential to achieve it"
},{
     id:uuidv4(),
    username:"pravinpv22",
    content:"new car added"
}]

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})


app.post("/posts",(req,res)=>{
    res.redirect("/posts")
    let id=uuidv4()
    let{username,content}=req.body;
    posts.push({id,username,content})
})
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});

})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);

    res.render("show.ejs",{post});
})


app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
    console.log(post);
    res.send("Patching done");
})