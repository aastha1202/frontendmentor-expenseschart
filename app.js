fetch('./data.json').then(response => {
    return response.json();
  })
  .then(data => {
     // Using the JSON data file provided to dynamically add the size of the bars on the chart

     const change=(data[0].amount)*3;
     $("#mon").height(change+"px");
 
     const change1=(data[1].amount)*3;
     $("#tue").height(change1+"px");
 
     const change2=(data[2].amount)*3;
     $("#wed").height(change2+"px");
 
     const change3=(data[3].amount)*3;
     $("#thu").height(change3+"px");
 
     const change4=(data[4].amount)*3;
     $("#fri").height(change4+"px");
 
     const change5=(data[5].amount)*3;
     $("#sat").height(change5+"px");
 
     const change6=(data[6].amount)*3;
     $("#sun").height(change6+"px");


    // on clicking appending the class only once and also displaying the expense inside the div
    $("#mon").one('click', function()
    {
        $("#mon").append('<div class="display exp"> </div>'); 
        $(".exp").text("$"+change/3);      
    },
    function()
    {
        $("#mon").unbind('mouseenter mouseleave');
        $(this).css(
            {
                "background-color":"hsl(186, 34%, 60%)"
            }
        );
    }
    );
    $("#tue").one('click', function()
    {
        $("#tue").append('<div class="display exp1"> </div>'); 
        $(".exp1").text("$"+change1/3);       
        
    },
    function()
    {
        $("#tue").unbind('mouseenter mouseleave');
        $(this).css(
            {
                "background-color":"hsl(186, 34%, 60%)"
            }
        );
    });
    $("#wed").one('click', function()
    {
        $("#wed").append('<div class="display exp2"> </div>'); 
        $(".exp2").text("$"+change2/3);       
        
    },
    function()
    {
        $("#wed").unbind('mouseenter mouseleave');
        $(this).css(
            {
                "background-color":"hsl(186, 34%, 60%)"
            }
        );
    });
    $("#thu").one('click', function()
    {
        
        $("#thu").append('<div class="display exp3"> </div>'); 
        $(".exp3").text("$"+change3/3);       
        
    },
    function()
    {
        $("#thu").unbind('mouseenter mouseleave');
        $(this).css(
            {
                "background-color":"hsl(186, 34%, 60%)"
            }
        );
    });
    $("#fri").one('click', function()
    {
        
        $("#fri").append('<div class="display exp4"> </div>'); 
        $(".exp4").text("$"+change4/3);       
        
    },
    function()
    {
        $("#fri").unbind('mouseenter mouseleave');
        $(this).css(
            {
                "background-color":"hsl(186, 34%, 60%)"
            }
        );
    });
    $("#sat").one('click', function()
    {
        
        $("#sat").append('<div class="display exp5"> </div>'); 
        $(".exp5").text("$"+change5/3);       
        
    },
    function()
    {
        $("#sat").unbind('mouseenter mouseleave');
        $(this).css(
            {
                "background-color":"hsl(186, 34%, 60%)"
            }
        );
    });
    $("#sun").one('click', function()
    {

        $("#sun").append('<div class="display exp6"> </div>'); 
        $(".exp6").text("$"+change6/3);       
        
    },
    function()
    {
        $("#sun").unbind('mouseenter mouseleave');
        $(this).css(
            {
                "background-color":"hsl(186, 34%, 60%)"
            }
        );
    });


    // on hovering displaying the expense inside the div

    $(document).ready(function()
    {
        $("#mon").hover(function()
        {
            $(".text").toggleClass("display");    
        });
        $("#tue").hover(function()
        {
            $(".text1").toggleClass("display");    
        });
        $("#wed").hover(function()
        {
            $(".text2").toggleClass("display");    
        });
        $("#thu").hover(function()
        {
            $(".text3").toggleClass("display");    
        });
        $("#fri").hover(function()
        {
            $(".text4").toggleClass("display");    
        });
        $("#sat").hover(function()
        {
            $(".text5").toggleClass("display");    
        });
        $("#sun").hover(function()
        {
            $(".text6").toggleClass("display");    
        });

        $("#mon").hover(function()
        {
            $(".text").text("$"+(change/3).toFixed(2));
           
        },
        function()
        {
             
            $(".text").text(" ");
        })
        $("#tue").hover(function()
        {
            $(".text1").text("$"+change1/3);
           
        },
        function()
        {
             
            $(".text1").text(" ");
        })
        $("#wed").hover(function()
        {
            $(".text2").text("$"+(change2/3).toFixed(2));
           
        },
        function()
        {
             
            $(".text2").text(" ");
        });
        $("#thu").hover(function()
        {
            $(".text3").text("$"+(change3/3).toFixed(2));
           
        },
        function()
        {
             
            $(".text3").text(" ");
        });
        $("#fri").hover(function()
        {
            $(".text4").text("$"+change4/3);
           
        },
        function()
        {
             
            $(".text4").text(" ");
        });
        $("#sat").hover(function()
        {
            $(".text5").text("$"+change5/3);
           
        },
        function()
        {
             
            $(".text5").text(" ");
        });
        $("#sun").hover(function()
        {
            $(".text6").text("$"+change6/3);
           
        },
        function()
        {
             
            $(".text6").text(" ");
        });

    });
})
.catch(err => {
    console.log(err);
});


 
