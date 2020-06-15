<form name="form_count"><input name="counter" type="text" size="10"></form>

<script type="text/javascript">
<!--
count = 0;
timerID = setInterval('countup()',1000);

function countup() {
	count++;
	document.form_count.counter.value =count_format(count,0); //書式を整えて表示
}

function count_format(sec,fix) {
	//sec=秒数 fix=小数桁数
	var ts = sec.toFixed(fix); //小数点以下の調整 (*1)
	var tm = Math.floor(ts / 60); //秒数切り捨て (*2)
	ts = ts % 60; //60秒未満の秒数 (*3)
	var th = Math.floor(tm / 60); //分の切り捨て (*4)
	tm = tm % 60; //60分未満の分数 (*5)
	//表示の整形 (*6)
	if (ts < 10) ts = "0" + ts;
	if (tm < 10) tm = "0" + tm;
	if (th < 10) th = "0" + th;
	return th + ":" + tm + ":" + ts; //文字列を返す (*7)
}
-->
</script> 
