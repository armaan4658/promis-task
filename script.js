var container = document.createElement("div");
var h1 = document.createElement("h1");
h1.innerText="Cat Api"
var hero = document.createElement("div");
hero.setAttribute("class","hero");
var btn = document.createElement("button");
btn.innerText="meou me"
btn.onclick = () => {
    window.open('https://cataas.com/cat',"blank");
}
var p = document.createElement("p")
p.innerText = "By clicking the above button you'll get to see different cat images";
p.append(btn);
hero.append(p);
var ul = document.createElement("ul");
ul.setAttribute("class","myul");
const getData = async() => {
    fetch(`https://cataas.com/api/tags`,{method:'GET'})
    .then(data=>data.json())
    .then(data=>{
        data.map((ele,index)=>{
            if(ele==="#christmascat"){
                ele="christmascat";
            }
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.setAttribute("class","links");
            const src = `https://cataas.com/cat/${ele}`
            a.innerText = `${src}`;
            a.onclick = () => {
                window.open(src,"blank")
            }
            li.append(a);
            ul.append(li);
        })
    })
    .catch(data=>console.log(data))
}
getData();
container.append(h1);
container.append(hero);
container.append(ul);
document.body.append(container);