// ฟังก์ชันเพื่อเปิด/ปิดโหมดแก้ไข
function toggleEditMode() {
    const inputs = document.querySelectorAll('.profile-info input[type="text"], .profile-info input[type="email"], .profile-info input[type="password"]');
    const departmentSelect = document.getElementById('department');
    const passwordInput = document.getElementById('password');

    inputs.forEach(input => {
        input.readOnly = !input.readOnly;
        input.style.backgroundColor = input.readOnly ? "#f0f2f5" : "#ffffff";
    });

    departmentSelect.disabled = !departmentSelect.disabled;

    // เปลี่ยนประเภทของรหัสผ่านระหว่าง 'password' และ 'text'
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }

    const button = document.querySelector('.profile-info button');
    if (inputs[0].readOnly) {
        button.innerText = "แก้ไข";
        alert("การแก้ไขถูกบันทึกแล้ว");
    } else {
        button.innerText = "บันทึก";
    }
}

// ฟังก์ชันสำหรับอัปโหลดภาพโปรไฟล์
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const previewImage = document.getElementById('previewImageDisplay');
    const file = event.target.files[0];

    if (file) {
        const url = URL.createObjectURL(file);
        previewImage.src = url;
    }
});
