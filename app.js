$(".trigger").click(function(){
    var obj = $(this).next();
    if($(obj).hasClass("hidden")){
        $(obj).removeClass("hidden").slideDown();
    } else {
        $(obj).addClass("hidden").slideUp();
    }
 });

var ask = new XMLHttpRequest();
var cObj;

ask.open("GET",'http://design.propcom.co.uk/buildtest/accordion-data.json',true);
ask.responseType = 'text';
ask.send(null);

ask.onload = function () {
    if(ask.status === 200){
        cObj = JSON.parse(ask.responseText);
         document.getElementsByTagName('span')[0].innerHTML = cObj.blocks[0].heading;
         document.getElementsByTagName('span')[1].innerHTML = cObj.blocks[1].heading;
         document.getElementsByTagName('span')[2].innerHTML = cObj.blocks[2].heading;

         document.getElementsByClassName('two')[0].innerHTML = cObj.blocks[0].content;
         document.getElementsByClassName('five')[0].innerHTML = cObj.blocks[1].content;
         document.getElementsByClassName('seven')[0].innerHTML = cObj.blocks[2].content;
    }
};




