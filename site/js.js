//function pow(x,n){
    //let s=x ** n
    //alert(s);
//}
//pow(3,2);
//pow(6,10);

//function nom(a){
    //let c=+a;
   // alert(c);
//}
//nom("852");
//nom("yregd"); 

//function tr(a){
    //let str='';
    //for (i=0; i<=a; i++){
       // str+= '*';
       // console.log(str);
       // }
//}
//tr(25)

//alert(Math.pow(2,3));

let a = prompt('Введите вашу версию браузера:\n  Edge\n  Chrome\n  Firefox\n  Safari\n  Opera')
if (a =='Edge'){
    alert('Вы используете браузер Edge')
 }
else if (a =='Chrome' || a =='Firefox' || a =='Safari' || a =='Opera'){
     alert('Мы поддерживаем этот браузер тоже')
 }
else{
   alert('Мы надеемся эта страница выглядит нормально')
 }

let number = +prompt('Введите любое число от 0 до 3')
if(number == 0){
    alert('Вы ввели число 0')
}
else if (number == 1){
    alert('Вы ввели число 1')
}
else if(number == 2 || number == 3){
    alert('Вы ввели число 2, а может и 3')
}
else{
    alert('Введи число от 0 до 3!!!')
}
 
