// if (else)

const score = 6;
if (score >= 8) {
  console.log("Giỏi");
} else if (score < 8 && score >= 5) {
  console.log("Khá");
} else {
  console.log("Trung Bình");
}

// Switch (case) 
switch (score) {
    case 10:
    case 9:
    case 8:
        console.log("Giỏi");
        break;

    case 7:
    case 6:
        console.log("Khá");
        break;

    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
        console.log("Trung bình");
        break;

    default:
        console.log("Không hợp lệ");
}


switch (true) {
    case (score >= 8): console.log("Giỏi"); break;
    case (score < 8 && score >=6 ): console.log("Khá"); break;
    case (score < 6 && score >= 4): console.log("Trung bình"); break;
    case (score < 4): console.log("Yếu"); break;
    default: console.log("Lỗi input")
}