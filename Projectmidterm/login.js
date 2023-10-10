window.onload = loginLoad;
function loginLoad() {
	var button = document.getElementById("myLogin");
	button.onsubmit = checkLogin;
}


function checkLogin() {
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username');
	const password = urlParams.get('password');


	let reusername = document.forms["myLogin"]["username"].value;
	let repassword = document.forms["myLogin"]["password"].value;
	// ตรวจสอบว่ากรอกข้อมูลครบทุกช่อง

	// ตรวจสอบว่ารหัสผ่านและรีไทป์รหัสผ่านตรงกัน
	if (username === reusername && password === repassword) {
		alert("เข้าสู่ระบบสำเร็จ!");
		return true;
	}
	else {
		alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
		return false;
	}
}

