var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    var data=JSON.parse(this.response); 
    var casia=data.filter((x)=>x.region==='Asia'); 
    console.log(casia);
} 
