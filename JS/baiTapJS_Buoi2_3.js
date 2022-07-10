/**
 *! BÀI TẬP 1 - TÍNH TIỀN LƯƠNG NHÂN VIÊN
 * 
 *? Khối 1: Input
 * - Lương 1 ngày: 100.000 đồng
 * - Số ngày làm
 * 
 *? Khối 2:
 * B1: tạo biến
 * - luongMotNgay (tiền lương 1 ngày)
 * - soNgayLam (số ngày làm việc của nhân viên)
 * - luongNhanVien (tiền lương nhân viên nhận)
 * B2: Gán giá trị cho các biến
 * - luongMotNgay = 100000
 * - soNgayLam = 30 (gán sẵn giá trị)
 * B3: tính lương nhân viên
 * - luongNhanVien = luongMotNgay * soNgayLam
 * B4: Thông báo kết quả
 * 
 *? Khối 3: Output
 * - Lương nhân viên nhận
 * 
 */
function tinhLuong() {
    var luongMotNgay = 100000;
    var soNgayLam = Number(document.getElementById("songaylam").value);
    var luongNhanVien = luongMotNgay * soNgayLam;
    document.getElementById("txtResultbai1").innerHTML = luongNhanVien;
}
document.getElementById("tinhBai1").onclick = tinhLuong;

 
 /**
  *! BÀI TẬP 2 - TÍNH GIÁ TRỊ TRUNG BÌNH
  *? Khối 1: Input
  * - 5 số thực (được nhập sẵn)
  * 
  * 
  *? Khối 2:
  * B1: tạo biến, gán giá trị cho biến
  * - soThuc1, soThuc2, soThuc3, soThuc4, soThuc5
  * - giaTriTB (giá trị trung bình của 5 số thực đã nhập)
  * 
  * B2: tính giá trị trung bình của 5 số thực
  * - giaTriTB = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5)/5
  * 
  * B3: Thông báo kết quả
  *
  *? Khối 3: Output
  * - Giá trị trung bình của tổng 5 số thực do người dùng nhập
  */
 
  function tinhTB() {

  var soThuc1 = Number(document.getElementById("soThuc1").value);
  var soThuc2 = Number(document.getElementById("soThuc2").value);
  var soThuc3 = Number(document.getElementById("soThuc3").value);
  var soThuc4 = Number(document.getElementById("soThuc4").value);
  var soThuc5 = Number(document.getElementById("soThuc5").value);
  var giaTriTB = (Number(soThuc1) + Number(soThuc2) + Number(soThuc3) + Number(soThuc4) + Number(soThuc5))/5;
  document.getElementById("txtResultbai2").innerHTML = giaTriTB;
  }
  document.getElementById("tinhBai2").onclick = tinhTB;
 
  /**
   *! BÀI TẬP 3 - QUY ĐỔI TIỀN
   *? Khối 1: Input
   * - tỷ giá (23.500 VND/USD)
   * - Số tiền USD (người dùng nhập)
   * 
   * 
   * 
   *? Khối 2:
   * B1: tạo biến. gán giá trị cho biến:
   * - tyGia, soTienUSD
   * - soTienVND
   * 
   * B2: tính số tiền quy đổi sang VND
   * - soTienVND = tyGia * soTienUSD
   * B3: thông báo kết quả
   * 
   *? Khối 3: Output
   * - Số tiền sau quy đổi VND
   */
  
   function quyDoi(){
    var tyGia = 23500;
    var soTienUSD = Number(document.getElementById("soTienUSD").value);
    var soTienVND = tyGia * soTienUSD;
    document.getElementById("txtResultbai3").innerHTML = soTienVND;
   }
   document.getElementById("tinhBai3").onclick = quyDoi;

 
   /**
    * ! BÀI TẬP 4 - TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT
    * ? Khối 1: Input
    * - Chiều dài hình chữ nhật
    * - Chiều rộng hình chữ nhật
    * 
    * ? Khối 2:
    * B1: tạo biến, gán giá trị cho biến:
    * - chieuDai
    * - chieuRong
    * - dienTich, chuVi
    * B2: tính diện tích, chu vi hình chữ nhật:
    * - dienTich = chieuDai * chieuRong
    * - chuVi = (chieuDai + chieuRong) * 2
    * B3: thông báo kết quả
    * 
    * ? Khối 3: Output
    * - Diện tích hình chữ nhật
    * - Chu vi hình chữ nhật
    */
   
   function tinhDTCV(){
    var chieuDai = Number(document.getElementById("chieuDai").value);
    var chieuRong = Number(document.getElementById("chieuRong").value);
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;
    document.getElementById("txtResultbai4DT").innerHTML = dienTich;
    document.getElementById("txtResultbai4CV").innerHTML = chuVi;
   }
   document.getElementById("tinhBai4").onclick = tinhDTCV;



 
   /**
    * ! BÀI TẬP 5 - TÍNH TỔNG 2 KÝ SỐ
    * ? Khối 1: Input
    * - Số có 2 chữ số
    * 
    * ? Khối 2:
    * B1: tạo biến, gán giá trị cho biến: 
    * - number (số có 2 chữ số)
    * - soHangChuc (số hàng chục của số thực nhập vào)
    * - soDonVi (số hàng đơn vị của số thực nhập vào)
    * - tongKySo (tổng 2 ký số)
    * B2: tìm ra số hàng chục, số hàng đơn vị, tính tổng 2 ký số này:
    * - soHangChuc = Math.floor(Number / 10) 
    * - soDonVi = number % 10
    * - tongKySo = soHangChuc + soDonVi
    * B3: thông báo kết quả
    *
    * ? Khối 3: Output
    * - Tổng 2 ký số
    */
   function tinhTong(){
    var number = Number(document.getElementById("soduocnhap").value);
    var soHangChuc = Math.floor(number / 10);
    var soDonVi = number % 10;
    var tongKySo = soHangChuc + soDonVi;
    document.getElementById("txtResultbai5").innerHTML = tongKySo;
   }
   document.getElementById("tinhBai5").onclick = tinhTong;

