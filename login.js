 function CheckRegister() {
  	var f = document.registerForm;
		if(f.username.value == '') {
			document.getElementById("username-error").style.display = 'block';
			document.getElementById("username-error").innerHTML = '*Nhap ten';
			f.username.focus();
			return false;
		}
		else 
			document.getElementById("username-error").style.display = 'none';
		
		if(f.password1.value == '') {
			document.getElementById("password1-error").style.display = 'block';
			document.getElementById("password1-error").innerHTML = '*Nhap password';
			f.password1.focus();
			return false;
		}
		else
			document.getElementById("password1-error").style.display = 'none';
		if(f.password2.value == '') {
			document.getElementById("password2-error").style.display = 'block';
			document.getElementById("password2-error").innerHTML = '*Nhap lai password';
			f.password2.focus();
			return false;
		}
		else
			document.getElementById("password2-error").style.display = 'none';
		if(f.email1.value == '') {
			document.getElementById("email1-error").style.display = 'block';
			document.getElementById("email1-error").innerHTML = '*Nhap Email';
			f.email1.focus();
			return false;
		}
		else 
			document.getElementById("email1-error").style.display = 'none';
		if(f.email2.value == '') {
			document.getElementById("email2-error").style.display = 'block';
			document.getElementById("email2-error").innerHTML = '*Nhap lai Email';
			f.email2.focus();
			return false;
		}
		else 
			document.getElementById("email2-error").style.display = 'none';
		if(f.Tel.value == '') {
			document.getElementById("Tel-error").style.display = 'block';
			document.getElementById("Tel-error").innerHTML = '*Nhap so dien thoai';
			f.Tel.focus();
			return false;
		}
		else 
			document.getElementById("Tel-error").style.display = 'none';
		return true;
	}
