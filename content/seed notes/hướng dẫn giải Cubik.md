---
draft: true
---
![[hướng dẫn giải Cubik_image_1.png]]
# Thuật toán dành cho người mới
[[Phan Ngọc Mai]] bảo đây là thuật toán hoa cúc

Bước 1: Tạo chữ thập ở mặt trắng 
Bước 2: Điền mặt trắng vào các góc
Bước 3: Lấp vào các ô ở tầng giữa
	L: U R U' R' U' F' U F
	R: U' L' U L U F U' F'
Bước 4: Tạo phần chữ thập ở tầng trên
	FRU R'U'F cho đến khi nào ra chữ thập
Bước 5: Hoán đổi các cạnh trên ở phần chữ thập tầng 3
	R U R' U R U2 R' U
Bước 6: Định vị các góc trên
	==U R U' L' U R' U' L==
Bước 7: Định hướng các góc trên 
	R' D' R' D (Đến khi nào thấy mặt trên cùng màu thì U)
