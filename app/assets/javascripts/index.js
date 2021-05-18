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

        $("#detail1").hide();
        $("#detail2").hide();
        $("#detail3").hide();
        $("#detail4").hide();
        $("#detail5").hide();
        $("#detail6").hide();
        $("#detail7").hide();

        $("#detail1_clicked").click(function(){
            $("#detail1").show();
            $("#detail2").hide();
            $("#detail3").hide();
            $("#detail4").hide();
            $("#detail5").hide();
            $("#detail6").hide();
            $("#detail7").hide();
        });
        
        $("#detail2_clicked").click(function(){
            $("#detail1").hide();
            $("#detail2").show();
            $("#detail3").hide();
            $("#detail4").hide();
            $("#detail5").hide();
            $("#detail6").hide();
            $("#detail7").hide();
        });
        
        $("#detail3_clicked").click(function(){
            $("#detail1").hide();
            $("#detail2").hide();
            $("#detail3").show();
            $("#detail4").hide();
            $("#detail5").hide();
            $("#detail6").hide();
            $("#detail7").hide();
        });
        
        $("#detail4_clicked").click(function(){
            $("#detail1").hide();
            $("#detail2").hide();
            $("#detail3").hide();
            $("#detail4").show();
            $("#detail5").hide();
            $("#detail6").hide();
            $("#detail7").hide();
        });
        
        $("#detail5_clicked").click(function(){
            $("#detail1").hide();
            $("#detail2").hide();
            $("#detail3").hide();
            $("#detail4").hide();
            $("#detail5").show();
            $("#detail6").hide();
            $("#detail7").hide();
        });
        
        $("#detail6_clicked").click(function(){
            $("#detail1").hide();
            $("#detail2").hide();
            $("#detail3").hide();
            $("#detail4").hide();
            $("#detail5").hide();
            $("#detail6").show();
            $("#detail7").hide();
        });
        
        $("#detail7_clicked").click(function(){
            $("#detail1").hide();
            $("#detail2").hide();
            $("#detail3").hide();
            $("#detail4").hide();
            $("#detail5").hide();
            $("#detail6").hide();
            $("#detail7").show();
        });
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