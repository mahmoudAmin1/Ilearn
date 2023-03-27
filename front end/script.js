
      function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "navbar-collapse") {
          x.className += " responsive";
        } else {
          x.className = "navbar-collapse";
        }
      }
        function openNav() {
          document.getElementById("mySidenav").style.width = "250px";
          document.getElementById("main").style.marginLeft = "250px";
          document.getElementById("open").style.display="none";
          document.getElementById("close").style.display="block";
        }
        
        function closeNav() {
          document.getElementById("mySidenav").style.width = "30px";
          document.getElementById("main").style.marginLeft= "30px";
          document.getElementById("open").style.display="block";
          document.getElementById("close").style.display="none";
          
        }
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
          if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.padding = "15px";
            document.getElementById("logo").style.fontSize = "40px";
          } else {
            document.getElementById("navbar").style.padding = "20px";
            document.getElementById("logo").style.fontSize = "50px";
          }
        }
        function deleteRow(r) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("myTable").deleteRow(i);
        }
