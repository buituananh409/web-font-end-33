// alert('Hello WORLD');
// confirm('ban co phai tuan anh khong ?');
// console.log(prompt(' nhap so tuoi cua ban ?', '30'));
// var isstudent;
// isstudent = confirm('ban co phai la hiep khong ?');
// console.log('ban co phai sinh vien k ?' , isstudent);
// var age = prompt('nhap nam sinh cua ban', '1999');
// console.log('ngay sinh cua ban la', age);
// document.write(age);
// var a = 20;
// var b = 18;
// a++;
// b--;
// console.log(a,b);
// //a -- + b++ - ++b - ++a
// // 20 + 18 - 21 - 19
// //console.log('==' a == b);
// //console.log('!=', a != b);

// var depzai = true;
// var nhagiau = true;
// console.log('||', depzai || nhagiau); // 1 trong 2 thi van la true
// console.log('&&', depzai && nhagiau);// ca 2 deu dung hoac sau => true hoac false
// console.log('!', !(depzai && nhagiau)); // phu dinh lai ca cum trong ngoac

// var ngay = 20;

// // if ( ngay == 20){
//   //  console.log('sinh nhat');}

// // else if(ngay == 25){ 
//    // console.log('thi final');
// // }

// switch (ngay){
//     case 20:
//         console.log('sinh nhat');
//         break;
//     case 30:
//         console.log('thi final');
//         break; 
//     default: 
//         console.log('abc');
// }

// for(var i = 0;i < 10; i++){
//     console.log('chep phat lan thu ' + (i+1));

// }

// var j = 0;
// var S = 0
// while (S < 200){
//     console.log('chep phat J lan thu ' + (j + 1));
//     S = S + j;
//     j++;
// }
// console.log(S);

// var k = 1;
// var S2 = 0;
// do {
//     console.log('chep phat K lan thu ' + (k + 1));
//     S2 += k;
//     k++;
// } while (S2 < 0);
// document.write(S2);


function sayHello() {
    console.log('Hello World');
}

function sum(a, b){
    var tong = a + b;
    return tong;
}
var x = 20;
var y = 10;

console.log(sum(x, y) + 5);
