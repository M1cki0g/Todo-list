document.addEventListener("DOMContentLoaded", function(){
    let sub = document.getElementById("submit");
    let search = document.getElementById("input");
    let list = document.getElementById("item");
    let searchfilter = document.getElementById("input1");
   
    //add an item
    sub.addEventListener("click",function(){
        let newt = search.value;
        let item = document.createElement("li");
        item.textContent = newt;
        let btn = document.createElement("button");
        btn.className = "del";
        btn.appendChild(document.createTextNode("x"));  
        item.appendChild(btn);    
        list.appendChild(item);   
        search.value = "";
    });
        //delete
        list.addEventListener("click",function(e){
        if(e.target.classList.contains("del")){
             let li = e.target.parentElement;
             list.removeChild(li);
        }
        });

        //filter
        searchfilter.addEventListener("input",function(){
        let find = searchfilter.value.toLowerCase();
        let tags = list.getElementsByTagName("li");
        Array.from(tags).forEach(function(tag){
        let itemize = tag.textContent.toLowerCase();
        if(itemize.indexOf(find)==-1) 
            tag.style.display = "none";
        else
            tag.style.display = "block";
});
        });      
});
