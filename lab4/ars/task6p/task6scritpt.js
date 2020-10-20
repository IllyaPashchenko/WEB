let array1=["a","a.html","b","b.html","c",["a","ca.html","b",["a","cba.html","b","cbb.html"]]]
let doc=document.getElementById("upper_menu");

let res ="<ul class=\"menu\">"
func(array1);
doc.innerHTML +=res;

function func(arr){
    for (i=0; i<arr.length;i+=2){
        if(Array.isArray(arr[i+1])){
            res += "<li><a href=\"#\">"+arr[i]+"</a>"
            res +="<ul>"
            func(arr[i+1]);
            res +="</li>"
        }
        else {
            res += "<li><a href=\""+arr[i+1]+"\">"+arr[i]+"</a></li>";
        }
    }
    res +="</ul>"
}
