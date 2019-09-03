var site_app = 'http://192.168.1.137:8091';
//var site_app = 'http://huanka.ryr1688.com';
/*判断输入是否为合法的手机号码*/
function isphone(inputString) {
	var partten = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	var fl = false;
	if(partten.test(inputString)) {
		//alert('是手机号码');
		return true;
	} else {
		return false;
		//alert('不是手机号码');
	}
}
function getToken(){
	var token =  localStorage.getItem("token");//获取
	if(!token){
		mui.openWindow({
			url: "../login/login.html",
			id: "login",
			styles: {},
			extras: {},
			show: {
				autoShow: true //页面loaded事件发生后自动显示，默认为true
			},
			waiting: {
				autoShow: false //自动显示等待框，默认为true
				//title: '', //等待对话框上显示的提示内容
			}
		})
	}
	return token;
}
