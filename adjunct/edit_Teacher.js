function saveProfileData() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const status = document.getElementById('status').value;

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
    localStorage.setItem('department', department);
    localStorage.setItem('status', status);

    window.location.href = 'profile_Teacher.html';
}

document.getElementById('saveButton').addEventListener('click', saveProfileData);