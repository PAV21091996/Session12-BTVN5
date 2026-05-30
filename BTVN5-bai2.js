let a = Number(prompt("Nhập số cần tính: "));
let giaiThua = 1;

if (Number.isInteger(a) && a > 0){
    for (let i = 1; i <= a; i = i + 1){
    giaiThua = giaiThua * i
}

    alert("Giai thừa bằng = " + giaiThua);
}
else {
    alert("Không hợp lệ, vui lòng nhập lại.");
}
