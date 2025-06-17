// สร้างหัวข้อ
const heading = document.createElement("h1");
heading.textContent = "คลิกปุ่มเพื่อเปลี่ยนสีพื้นหลังและข้อความ";
document.body.appendChild(heading);

// สร้างปุ่ม
const button = document.createElement("button");
button.textContent = "เปลี่ยนสี";
document.body.appendChild(button);

// ฟังก์ชันสร้างสีแบบสุ่มในรูปแบบ RGB
function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// ฟังก์ชันเมื่อคลิกปุ่ม
function changeColors() {
  const bgColor = getRandomRGBColor();
  const textColor = getRandomRGBColor();

  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;
}

// ผูก event ให้ปุ่ม
button.addEventListener("click", changeColors);
