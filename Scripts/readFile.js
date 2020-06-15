<script type="text/javascript">
//テキストの読込
function loadText(fileName) {
	var obj = createRequest(); //非同期通信オブジェクトの生成
	if (obj) {
		//通信実行
		obj.open("get",fileName);
		obj.onreadystatechange = function() {
			//通信完了
			if (obj.readyState == 4 && obj.status == 200) {
				//読込後の処理
				document.getElementById("view").innerHTML = obj.responseText;
			}
		}
		obj.send(null);
	}
}

//非同期通信オブジェクトの生成
function createRequest() {
	try {
		return new XMLHttpRequest();
	} catch (e) {
		try {
			return new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {
			return null;
		}
	}
	return null;
}
</script>
