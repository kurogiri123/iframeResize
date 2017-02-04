function iframeResize(){
	var PageHight = document.body.scrollHeight + 0; // 페이지 높이 습득
	window.parent.document.getElementById('disp').style.height = PageHight + 4 + 'px'; // iframe높이 변경
}
window.onload = iframeResize;