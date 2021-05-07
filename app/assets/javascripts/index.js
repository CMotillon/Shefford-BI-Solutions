$(document).ready(function(){
    $("#propos").hide();
    $("#services").hide();
    $("#blog").hide();
    $("#contact").hide();
    $("#realisations").hide();

    $("#logo-clicked").click(function() {
        $("#propos").hide();
        $("#services").hide();
        $("#blog").hide();
        $("#contact").hide();
        $("#realisations").hide();
        $("#slogan").show();
    });

    $("#propos_clicked").click(function(){
        $("#propos").show();
        $("#services").hide();
        $("#blog").hide();
        $("#contact").hide();
        $("#realisations").hide();
        $("#slogan").hide();
    });
    
    $("#services_clicked").click(function(){
        $("#propos").hide();
        $("#services").show();
        $("#blog").hide();
        $("#contact").hide();
        $("#realisations").hide();
        $("#slogan").hide();
    });
    
    $("#blog_clicked").click(function(){
        $("#propos").hide();
        $("#services").hide();
        $("#blog").show();
        $("#contact").hide();
        $("#realisations").hide();
        $("#slogan").hide();
    });
    
    $("#contact_clicked").click(function(){
        $("#propos").hide();
        $("#services").hide();
        $("#blog").hide();
        $("#contact").show();
        $("#realisations").hide();
        $("#slogan").hide();
    });
    
    $("#realisations_clicked").click(function(){
        $("#propos").hide();
        $("#services").hide();
        $("#blog").hide();
        $("#contact").hide();
        $("#realisations").show();
        $("#slogan").hide();
    });
});