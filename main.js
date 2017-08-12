

$(document).ready(function(){

    if(!(localStorage.getItem("name")))
    {
        localStorage.setItem("name", "Naveen");
    }
    if(!(localStorage.getItem("email")))
    {
        localStorage.setItem("email", "naveen.arebail@gmail.com");
    }
    if(!(localStorage.getItem("password")))
    {
        localStorage.setItem("password", "Naveen@123");
    }


$("#login").on("click",function(){
    $("#Login-block,#back").css("visibility","visible");
    $("main,#Register-block").css("visibility","hidden");
})
$("#register").on("click",function(){
    $("#Register-block,#back").css("visibility","visible");
    $("main,#Login-block").css("visibility","hidden");
})
$("#back").on("click",function(){
    $("#Register-block,#Login-block,#back").css("visibility","hidden");
      $("main").css("visibility","visible");
      $("#match").html("");
       $("#match").css("visibility","hidden");
})
$("#registersubmit").on("click",function(){
     localStorage.setItem("name", $("#regusername").val());
     localStorage.setItem("email", $("#regemail").val());
     localStorage.setItem("password", $("#regpassword").val());
            window.location = "home.html";
})
$("#loginsubmit").on("click",function(){
     
     if(($("#username").val()==localStorage.getItem("name")) && ($("#password").val()==localStorage.getItem("password")))
     {
         window.location = "home.html";
     }
     else
     {
         $("#match").html("either password or username doesnt match");
         $("#match").css("color","red");
         $("#match").css("visibility","visible");
      
     }
     
            
})
})