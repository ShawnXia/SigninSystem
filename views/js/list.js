$(function(){
    var listWidget = $("#list").dxList({
        dataSource: products,
        height: 400,
        searchEnabled: true,
        searchExpr: "Name",
        itemTemplate: function(data) {
            return $("<a href='sign/"+data.Name+"' class='detail'>").html("<div>"+ data.Name +"</div>");
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