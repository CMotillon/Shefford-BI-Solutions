$(document).ready(function(){
    $("#propos").hide();
    $("#services").hide();
    $("#blog").hide();
    $("#contact").hide();

    $("#propos_clicked").click(function(){
        $("#propos").show();
        $("#services").hide();
        $("#blog").hide();
        $("#contact").hide();
    });
    
    $("#services_clicked").click(function(){
        $("#propos").hide();
        $("#services").show();
        $("#blog").hide();
        $("#contact").hide();
    });
    
    $("#blog_clicked").click(function(){
        $("#propos").hide();
        $("#services").hide();
        $("#blog").show();
        $("#contact").hide();
    });
    
    $("#contact_clicked").click(function(){
        $("#propos").hide();
        $("#services").hide();
        $("#blog").hide();
        $("#contact").show();
    });
});