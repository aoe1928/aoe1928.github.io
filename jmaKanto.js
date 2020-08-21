// <img id="image" class="img_place" src="https://www.jma.go.jp/jp/amedas/imgs/temp/206/202008211100-00.png" usemap="#kanto">
window.onload = function onLoad() {
    var linkJma = document.getElementById("jmaKanto");
    var src = jmaKanto.getAttribute('src');
    var twoDigit =function(num){
      　     var digit
           if( num < 10 )
            { digit = "0" + num; }
           else { digit = num; }
           return digit;
     }
    var now = new Date();
    var year = now.getFullYear();
    var month = twoDigit(now.getMonth() + 1)
    var day = twoDigit(now.getDate());
    var hour = twoDigit(now.getHours());
    if (twoDigit(now.getMinutes()) < 10){
      hour -= 1;
    }
    var min = "00";
    var link = year + month+ day + hour + min;
    linkJma.setAttribute('src', 'https://www.jma.go.jp/jp/amedas/imgs/temp/206/' + link + '-00.png');
    // alert(link);
}
