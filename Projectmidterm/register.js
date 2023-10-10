window.onload = pageLoad;

function showError(message) {
    document.getElementById("errormsg").textContent = message;
}

function pageLoad() {
    var button = document.getElementById("myForm");
    button.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var x = document.forms["myForm"]["password"].value;
    var y = document.forms["myForm"]["repassword"].value;

    if (
        x === '' ||
        y === ''
    ) {
        showError('กรุณากรอกข้อมูลให้ครบทุกช่อง');
        return false;
    }

    if (x != y)//ถ้าpasswordไม่ตรงกับrepassword
    {
        showError("รหัสผ่านไม่ตรงกัน");
        alert("รหัสผ่านไม่ตรงกัน");//รหัสผ่านผิด
        return false;//ตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false
    }
    else//รหัสผ่านถูก
    {
        showError("สมัครเรียบร้อย");
        alert("สมัครเรียบร้อย");
    }
}