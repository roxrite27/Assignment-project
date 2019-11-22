function fetchData(){
xhr= new XMLHttpRequest();
var data;
xhr.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
   data=JSON.parse(this.responseText);

   var divMain= document.getElementById("resDetails");
   var child = divMain.lastElementChild;  
       while (child) {
           divMain.removeChild(child);
           child = divMain.lastElementChild;
       }

    for(i=0;i<data.categories.length;i++)
    {
    var res_name=data.categories[i].strCategory;
    var res_img=data.categories[i].strCategoryThumb;
    var res_des=data.categories[i].strCategoryDescription;
   

    var divRes= document.createElement("div");
divRes.setAttribute("id",i+1);

var nameRes = document.createElement("h2");
nameRes.innerHTML=res_name;
divRes.appendChild(nameRes);

var imgRes = document.createElement("img");
imgRes.setAttribute("src",res_img);
imgRes.setAttribute("height","250px");
imgRes.setAttribute("width","300px");
divRes.appendChild(imgRes);

var lineBreak = document.createElement("br");
divRes.appendChild(lineBreak);

var desRes = document.createElement("span");
desRes.innerHTML=res_des;
divRes.appendChild(desRes);


divMain.appendChild(divRes);

var lineBreak = document.createElement("br");
divMain.appendChild(lineBreak);
      }
       }
};
xhr.open("GET","https://www.themealdb.com/api/json/v1/1/categories.php");
xhr.send();
}