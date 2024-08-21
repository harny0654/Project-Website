function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function updateNames(year) {
    const nameList = {
        'เทคโนโลยีสารสนเทศ': {
            'ปี 1': ['สมชาย ใจดี', 'สมหญิง จิตใจ', 'สมพร สมหวัง'],
            'ปี 2': ['สมฤดี ยิ้มแย้ม', 'สมเกียรติ พูนผล', 'สมหมาย ดีใจ']
        },
        'คอมพิวเตอร์กราฟิก': {
            'ปี 1': ['สรรพสิทธิ์ รุ่งโรจน์', 'สุกัญญา พัฒน์ดี', 'สุรชัย ชัยสม'],
            'ปี 2': ['สมศักดิ์ รัตนชัย', 'สมบูรณ์ รุ่งเรือง', 'สมร รัตน์']
        },
        'การโรงแรม': {
            'ปี 1': ['สมจิตร์ ยินดี', 'สมบูรณ์ ดีใจ', 'สมนึก วัฒนา'],
            'ปี 2': ['สมชาย อิ่มสุข', 'สมหญิง สุขใจ', 'สมเกียรติ สันติ']
        }
    };

    const cardName = getQueryParam("card");
    const names = (nameList[cardName] && nameList[cardName][year]) || [];
    const listContainer = document.querySelector('ul');
    listContainer.innerHTML = '';
    names.forEach(name => {
        const li = document.createElement('li');
        li.textContent = `ชื่อ: ${name}`;
        listContainer.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const year = getQueryParam("year");
    document.getElementById("header").textContent = `แผนก ${getQueryParam("card")}`;
    document.getElementById("year").textContent = `ชั้นปี: ${year}`;
    updateNames(year);

    // Handle year dropdown change
    document.getElementById('year-select').addEventListener('change', function() {
        const selectedYear = this.value;
        document.getElementById("year").textContent = `ชั้นปี: ${selectedYear}`;
        updateNames(selectedYear);
    });

    // Handle code-button click
    document.getElementById('code-button').addEventListener('click', function() {
        window.location.href = 'code.html'; 
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const year = getQueryParam("year");
    const cardName = getQueryParam("card");
    document.getElementById("header").textContent = `แผนก ${cardName}`;
    document.getElementById("year").textContent = `ชั้นปี: ${year}`;
    updateNames(year);

    // จัดการเมื่อมีการเปลี่ยนแปลงของ dropdown ปี
    document.getElementById('year-select').addEventListener('change', function() {
        const selectedYear = this.value;
        document.getElementById("year").textContent = `ชั้นปี: ${selectedYear}`;
        updateNames(selectedYear);
    });

    // จัดการเมื่อคลิกปุ่ม "Code"
    document.getElementById('code-button').addEventListener('click', function() {
        const selectedYear = document.getElementById('year-select').value;
        window.location.href = `code.html?card=${encodeURIComponent(cardName)}&year=${encodeURIComponent(selectedYear)}`; 
    });
});
