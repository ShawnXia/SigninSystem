$(function(){
    userAction("GET","/list/listAll",JSON.stringify({}),(response) => {
           var list = JSON.parse(response);
           //console.log(list);
           var listWidget = $("#list").dxList({
               dataSource: list,
               height: 400,
               searchEnabled: true,
               searchExpr: "Name",
               itemTemplate: function(data) {
                   return $("<a href='sign/"+data.FirstName+"' class='detail'>").html("<div>"+ data.FirstName +"</div>");
               }
           }).dxList("instance");
       
           $("#searchMode").dxSelectBox({
               dataSource: ["contains", "startswith"],
               value: "contains",
               onValueChanged: function(data) {
                   listWidget.option("searchMode", data.value);
               }
           }).dxSelectBox("instance");
    });
    
});

function userAction(method,uri,payload,callback) {
    var xhttp = new XMLHttpRequest();
    
    xhttp.open(method, uri, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(payload);
    xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                callback(this.responseText);
            }
            
        };
//    var response = JSON.parse(xhttp.responseText);
}