//判断如果是PC端浏览器，自动跳转到pc/index.html
			//如果安卓手机自动跳转到mobile/index.html
			var userAgent = navigator.userAgent.toLocaleLowerCase();
			if(userAgent.indexOf('android') != -1 
				&& userAgent.indexOf('iphone') != -1
				&& userAgent.indexOf('ipad') != -1 ){
					location.href = '../pc/index.html';
				}