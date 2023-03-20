'สำหรับปุ่มซ่อนหน้า Page'
function funcshow(val) {
    if (val == 1) {
        document.getElementById("page-1").style.display = 'inline';
        document.getElementById("page-2").style.display = 'none';
        document.getElementById("page-3").style.display = 'none';
        document.getElementById("page-4").style.display = 'none';
        document.getElementById("page-5").style.display = 'none';
    }
    if (val == 2) {
        document.getElementById("page-1").style.display = 'none';
        document.getElementById("page-2").style.display = 'inline';
        document.getElementById("page-3").style.display = 'none';
        document.getElementById("page-4").style.display = 'none';
        document.getElementById("page-5").style.display = 'none';
    }
    if (val == 3) {
        document.getElementById("page-1").style.display = 'none';
        document.getElementById("page-2").style.display = 'none';
        document.getElementById("page-3").style.display = 'inline';
        document.getElementById("page-4").style.display = 'none';
        document.getElementById("page-5").style.display = 'none';
    }
    if (val == 4) {
        document.getElementById("page-1").style.display = 'none';
        document.getElementById("page-2").style.display = 'none';
        document.getElementById("page-3").style.display = 'none';
        document.getElementById("page-4").style.display = 'inline';
        document.getElementById("page-5").style.display = 'none';
    }
    if (val == 5) {
        document.getElementById("page-1").style.display = 'none';
        document.getElementById("page-2").style.display = 'none';
        document.getElementById("page-3").style.display = 'none';
        document.getElementById("page-4").style.display = 'none';
        document.getElementById("page-5").style.display = 'inline';
    }
}
'สำหรับปุ่ม mini-bar'
function myFunction(x) {
    x.classList.toggle("change");
}
