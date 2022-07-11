let post = {
 title: "Japan is Fucked Up",
 body: "Yani hawa wasee hawana jobs vile wanajidai",
 author:"Kuma Moto",
 views: 10,
 comments:[
    { author:"Mike Frost", body:"Ma Umbwa Nyinyi"} ,
    { author:"MJohn Doe", body:"Ma Kondoo Nyinyi"} ,

],
 isLive : true
};

console.log(post);

//Constructor Fucntions

let posts = new Post('Learning JS','This is a course on JS','Andrew Njeru');
console.log(posts);

function Post (title, body,author){

    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments =[];
    this.isLive = false;
}