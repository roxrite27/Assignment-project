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
    
        for(i=0;i<data.restaurants.length;i++)
        {
        var res_name=data.restaurants[i].restaurant.name;
        var res_img=data.restaurants[i].restaurant.thumb;
        var res_cuisines=data.restaurants[i].restaurant.cuisines;
        var res_add=data.restaurants[i].restaurant.location.address+", "+data.restaurants[i].restaurant.location.city;
        var res_url=data.restaurants[i].restaurant.url;
    
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
    
    var cusRes = document.createElement("span");
    cusRes.innerHTML=res_cuisines;
    cusRes.setAttribute("style","font-family:Verdana;font-size:15px");
    divRes.appendChild(cusRes);
    
    var lineBreak = document.createElement("br");
    divRes.appendChild(lineBreak);
    
    var addRes = document.createElement("span");
    addRes.innerHTML="Location :- "+res_add;
    addRes.setAttribute("style","font-family:Verdana;font-size:15px");
    divRes.appendChild(addRes);
    
    var lineBreak = document.createElement("br");
    divRes.appendChild(lineBreak);
    
    var urlRes = document.createElement("a");
    urlRes.setAttribute("href",res_url);
    urlRes.setAttribute("target","_blank");
    urlRes.innerHTML = "For more Info!";
    divRes.appendChild(urlRes);
    
    divMain.appendChild(divRes);
    
    var lineBreak = document.createElement("br");
    divMain.appendChild(lineBreak);
          }
           }
    };
    xhr.open("GET","https://developers.zomato.com/api/v2.1/search");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("user-key", "3a783c71742fb49fadb39150de8c56be");
    xhr.send();
    }