var heading__logo=document.querySelector(".heading__logo")
var picture=document.querySelector(".picture__modal")
var imgs=document.querySelectorAll('.picture__item img')
var appear=document.querySelector('.appear')
var close=document.querySelector('.close')
var right=document.querySelector('.right')
var left=document.querySelector('.left')
var appear__img=document.querySelector(".appear__img img")

var modal=document.querySelector(".modal")

heading__logo.addEventListener('click',function(a){
    a.preventDefault();
    picture.classList.toggle('hide')
    modal.classList.remove('hide')  
    document.querySelector(".time").classList.add("hide")
})
modal.addEventListener("click",function(a){
    if(a.target==a.currentTarget){
        picture.classList.add('hide')
        modal.classList.add('hide')  
    }
})
var number=0;
function open(){
    if(number==0){
        left.classList.add('hide')
    }else{
        left.classList.remove('hide')
    }
    if(number==imgs.length-1){
        right.classList.add('hide')
    }else{
        right.classList.remove('hide')
    }
    appear__img.src=imgs[number].src;
    appear.classList.add("open")
}
imgs.forEach(function(item,index){
   item.addEventListener("click",function(){
       number=index;
       open();
   })
})
close.addEventListener("click",function(){
    appear.classList.remove('open')
})
right.addEventListener("click",function(){
     number++;
     open();
})
left.addEventListener("click",function(){
    number--;
    open();
})

function time(){
    var today=new Date();
    var gio=today.getHours();
    var phut=today.getMinutes();
    var giay=today.getSeconds();
    if(gio<10){
        gio = "0" + gio;
    }
    if(phut<10){
        phut = "0" + phut;
    }
    if(giay<10){
        giay = "0" + giay;
    }
    document.querySelector(".time h2").innerHTML = gio + ":" + phut + ":" + giay;
    setTimeout("time()",1000);
}
time();
     document.querySelector('.oclock').addEventListener('click',function(){
    document.querySelector(".time").classList.toggle("hide")
    picture.classList.add('hide')
})

// đang nhập
document.querySelector('.heading__index--registerLogin').addEventListener("click",function(){
     document.querySelector(".loginAndRegister__modal ").classList.remove('hide')
     modal.classList.remove('hide')
})
document.querySelector(".loginAndRegister__close").addEventListener('click',function(){
    document.querySelector(".loginAndRegister__modal ").classList.add('hide')
    modal.classList.add('hide')
})
document.querySelector(".loginAndRegister__modal").addEventListener("click",function(a){
    if(a.target==a.currentTarget){ 
    document.querySelector(".loginAndRegister__modal ").classList.add('hide')
    modal.classList.add('hide')  
}
})
document.querySelector(".heading_cart--logo").addEventListener("click",function(){
    document.querySelector(".loginAndRegister__modal ").classList.remove('hide')
    modal.classList.remove('hide')
})
// ===== list product==============
var listProduct_right=document.querySelector(".list__product--right ")
var listProduct_left=document.querySelector(".list__product--left ")

listProduct_right.addEventListener("click",function(){
    listProduct_left.classList.remove("hide"); 
    listProduct_right.classList.add("hide");
    document.getElementById("productChange").style.marginLeft="-935px"
})
listProduct_left.addEventListener("click",function(){
    listProduct_right.classList.remove("hide");
    listProduct_left.classList.add("hide");
    document.getElementById("productChange").style.marginLeft="0px"
})


// ================================

var parent=document.querySelector(".styles__Left");
var span=parent.querySelector(".massage");
var input=document.querySelector(".input input")



function Error(message){
    span.innerHTML=message;
    input.classList.add("error")
}
function Success(){
    input.classList.remove("error")
    span.innerHTML="";
}

var login=document.querySelector(".styles__Left--btn")

function checkSTD(input){
    input.value=input.value.trim();
      if(input.value==''){
        Error("Số điện thoại không được để trống")
      }else{
        Success()
      }
}
var inputs=document.querySelector("#sdt")
login.addEventListener("click",function(a){
    a.preventDefault();
            checkSTD(inputs);
})

inputs.addEventListener('keydown',function(a){
    if(a.key=='Enter'){
       checkSTD(inputs);
    }
})
// =================== Web img container =======================
var container_ArrQuantity=document.querySelectorAll(".webimg__left .quantity_img .quantity_img--item")
var container_QuantityMax=container_ArrQuantity.length;
var quantity_Number=0;

function container_QuantityRight(index){
  container_ArrQuantity[index-1].classList.remove("color")
    if(index==container_QuantityMax){
    
        quantity_Number=0
    }
    container_ArrQuantity[quantity_Number].classList.add("color")
}
function container_QuantityLeft(index){
    container_ArrQuantity[index+1].classList.remove("color")
      if(index<0){
          quantity_Number=container_QuantityMax-1;
      }
      container_ArrQuantity[quantity_Number].classList.add("color")
  }
var container_Size=document.getElementsByClassName("webimg__left")[0].clientWidth;
var container_Min=0;
var container_Max=document.getElementsByClassName("webimg__left--convertImg")[0].clientWidth;
var container_Number=0

function container_Right(index){
    if(index==container_Max){
        container_Number=0;
    }
    document.getElementById("convertImg").style.marginLeft="-"+container_Number+"px";
}
function container_Left(index){
    if(index<0){
        container_Number=container_Max-container_Size;
    }
    document.getElementById("convertImg").style.marginLeft="-"+container_Number+"px";
}

document.querySelector(".webimg__left--iconRight").addEventListener("click",function(){
    quantity_Number++;
    container_Number+=container_Size;
    container_QuantityRight(quantity_Number);
    container_Right(container_Number);
})
document.querySelector(".webimg__left--iconLeft").addEventListener("click",function(){
    quantity_Number--;
    container_Number-=container_Size;
    container_Left(container_Number)
    container_QuantityLeft(quantity_Number);
})
function AutoConvert_container(){
    container_Number+=container_Size;
    quantity_Number++;
    container_QuantityRight(quantity_Number);
    container_Right(container_Number)
    setTimeout("AutoConvert_container()",4000)
}
AutoConvert_container()
// ==========================
var size_WebimgRight2=document.getElementsByClassName('webimg__right2')[0].clientWidth;
var length__WebimgRight2=document.querySelectorAll('.webimg__right2 .imgVideo').length;
var max_WebimgRight2=size_WebimgRight2*length__WebimgRight2;
var List_quantityImg=document.querySelectorAll('.webimg__right2 .quantity_img .quantity_img--item')
var number2=0;
var quantityImgVideo=0;
function convert_List_quantityImg(index){
    List_quantityImg[quantityImgVideo-1].classList.add("color")
    if(index==List_quantityImg.length){
        quantityImgVideo=0;
    }
    List_quantityImg[quantityImgVideo].classList.remove("color")
}
function convertImgVideo(){
    number2+=size_WebimgRight2;
    if(number2==max_WebimgRight2){
        number2=0;
    }
    document.getElementById("img").style.marginLeft="-"+number2+"px"
    quantityImgVideo++;
    convert_List_quantityImg(quantityImgVideo)
    setTimeout("convertImgVideo()",8000)
}
convertImgVideo();

var Flash=0;
function convertFlash(index){
    if(index==2){
        Flash=0
    }
    if(index%2==0){
        document.querySelector(".style__Flash").classList.add("event__flash")
    }
    if(index%2!=0){
        document.querySelector(".style__Flash").classList.remove("event__flash")
    }
}

function autoFlash(){
    Flash++;
    convertFlash(Flash)
    setTimeout("autoFlash()",400)
}
autoFlash()


var second=0;
var minute=0;
var hours=0;


 
 function autoCountDown(){
    second--;
    if(second===-1){
        second=59;
        minute--;
    }
    if(minute===-1){
        minute=59;
        hours--;
    }
    if(hours==-1){
       hours=12
    }
    if(hours<10){
        hours = "0" + hours;
    }
    if(minute<10){
        minute = "0" + minute;
    }
    if(second<10){
        second = "0" + second;
    }
    document.getElementById("hours").innerHTML=hours
    document.getElementById("minute").innerHTML=minute
    document.getElementById("second").innerHTML=second
    setTimeout("autoCountDown()",1000)
 }
 autoCountDown();
//  ===========================
var container2_WidthMin=0;
var container2_WidthSize=document.getElementsByClassName("container2__index")[0].clientWidth;
var container2_WidthMax=document.getElementsByClassName("container__list")[0].clientWidth-container2_WidthSize;
var icon2Right=document.querySelector(".container__list .icon__right")
var icon2Left=document.querySelector(".container__list .icon__left")
var container2_Number=0;
var container2_listLength=document.querySelectorAll(".container__product").length;
var sizeProduct2=document.getElementsByClassName("container__product")[0].clientWidth;
var container2_listNumber=0;

icon2Right.addEventListener("click",function(){
    container2_Number+=container2_WidthSize;
    if(container2_Number>container2_WidthMax-container2_WidthSize){
        icon2Right.classList.add("hide")
        icon2Left.classList.remove("hide")
    }
    
    document.getElementById("container2").style.marginLeft="-"+container2_Number+"px";
})

icon2Left.addEventListener("click",function(){
    container2_Number-=container2_WidthSize;
   
    if(container2_Number==0){
        icon2Right.classList.remove("hide")
        icon2Left.classList.add("hide")
    }
    document.getElementById("container2").style.marginLeft="-"+container2_Number+"px";
})

//  ===========================
var container6_ListQuantity=document.querySelectorAll(".quantity_img .container6__quantity");
var container6_quantitySizeMax=container6_ListQuantity.length;
var container6_quantitySizeMin=0;
var container6_Quantity=0;


function container6_convertRight(index){
  
    if(index>container6_quantitySizeMax-1){
        container6_Quantity=0;
    }
    container6_ListQuantity[index-1].classList.remove("color2")
    container6_ListQuantity[container6_Quantity].classList.add("color2")
}
function container6_convertLeft(index){
    container6_ListQuantity[index+1].classList.remove("color2")
    if(index<0){
        container6_Quantity=container6_quantitySizeMax-1;
    }
    container6_ListQuantity[container6_Quantity].classList.add("color2")
}

var container6_size=document.getElementsByClassName("container6__body")[0].clientWidth;
var container6_Max=document.getElementsByClassName("container6__body--img")[0].clientWidth;
var container6_Min=0;

var container6_number=0;


document.querySelector(".container6__body .icon__right").addEventListener("click",function(){
    container6_number-=container6_size;
    container6_Quantity++;
    if(container6_number < (container6_Max-container6_size)*-1){
        container6_number=container6_Min;
    }
    container6_convertRight(container6_Quantity)
    document.getElementById("container6__convertIMg").style.marginLeft=container6_number+"px"
})
document.querySelector(".container6__body .icon__left").addEventListener("click",function(){
    container6_number+=container6_size;
    container6_Quantity--;
    if(container6_number > container6_size-container6_size){
        container6_number=-container6_Max+container6_size;
    }
    container6_convertLeft(container6_Quantity)
    document.getElementById("container6__convertIMg").style.marginLeft=container6_number+"px"
})

function container6Auto(){
    container6_number-=container6_size;
    container6_Quantity++;
    if(container6_number < (container6_Max-container6_size)*-1){
        container6_number=container6_Min;

    }
    container6_convertRight(container6_Quantity)
    document.getElementById("container6__convertIMg").style.marginLeft=container6_number+"px"
    setTimeout("container6Auto()",4000)
}
container6Auto()