$(document).ready(function(){
    $("#propos").hide();
    $("#services").hide();
    $("#blog").hide();
    $("#contact").hide();
    $("#realisations").hide();

    $("#propos_clicked").click(function(){
        $("#propos").show();
        $("#services").hide();
        $("#blog").hide();
        $("#contact").hide();
        $("#realisations").hide();
    });
    
    $("#services_clicked").click(function(){
        $("#propos").hide();
        $("#services").show();
        $("#blog").hide();
        $("#contact").hide();
        $("#realisations").hide();
    });
    
    $("#blog_clicked").click(function(){
        $("#propos").hide();
        $("#services").hide();
        $("#blog").show();
        $("#contact").hide();
        $("#realisations").hide();
    });
    
    $("#contact_clicked").click(function(){
        $("#propos").hide();
        $("#services").hide();
        $("#blog").hide();
        $("#contact").show();
        $("#realisations").hide();
    });
    
    $("#realisations_clicked").click(function(){
        $("#propos").hide();
        $("#services").hide();
        $("#blog").hide();
        $("#contact").hide();
        $("#realisations").show();
    });
});