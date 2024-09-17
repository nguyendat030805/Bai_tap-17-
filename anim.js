    function myFunction(){
        var namep = frm.nme.value;
        var product = frm.prd.value;
        var id = frm.ma.value;
        var type = frm.ty.value;
        var price = parseFloat(frm.prc.value);
        var oprice = parseFloat(frm.oprc.value);
        
        var card = "<div class='card'>";
            card += "<img src='" + namep + "' alt='Product Image'>";  
            card += "<h2 style ='padding-top:10px '>" + product +" -"+ id + "</h2>";  
            card += "<div class='pr'>"+"<p>" + price+".000 vnđ"+ "</p>" +"<p style='text-decoration: line-through;'>"+oprice+".000 vnđ"+"</p>"+"</div>";  
            card += "<button>Đặt mua</button>";
            card += "</div>";
            document.getElementById('product_container').innerHTML +=card;
}