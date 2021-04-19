// 导航nav-tab
// 2018-10-20
// window.onload = function(){



// // 红黑榜

// var ul_list = document.getElementById('ul_list');
// var lis = ul_list.getElementsByTagName('li');
// for(i=0;i<lis.length;i++){
//             lis[i].index=i;//通过js添加的属性可以用，在html标签里添加属性index会报错
//             lis[i].onclick=function(){
//                 for(i=0;i<lis.length;i++){
//                     lis[i].className=" ";//先把所有点击按钮颜色都去掉，再给当前元素加上
//                 }
//             this.className="active"; //当前点击元素加上颜色 <!--当前发生事件的元素：lis[i]-->
            
//             }
// }

//function GetQueryString(name)
//{
//     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
//     var r = window.location.search.substr(1).match(reg);
//     if(r!=null)return  unescape(r[2]); return null;
//}
//window.onload =  function(){
//	var li_id = GetQueryString("id");
//	console.log(li_id);
//	var nav_ul = document.getElementById('nav-tab');
//	var nav_li = nav_ul.getElementsByTagName('li');
//	for(i=0;i<nav_li.length;i++){
//	        //     nav_li[i].index=i;//通过js添加的属性可以用，在html标签里添加属性index会报错
//	        //     nav_li[i].onclick=function(){
//	        //         for(i=0;i<nav_li.length;i++){
//	        //             nav_li[i].className=" ";//先把所有点击按钮颜色都去掉，再给当前元素加上
//	        //         }
//
//	        // }
//	        console.log("id="+nav_li[i].id);
//	                if (nav_li[i].id === li_id) {
//
//	            nav_li[i].className="tab_active"; //当前点击元素加上颜色 <!--当前发生事件的元素：nav_li[i]-->
//	            }else{
//	                    nav_li[i].className=" ";//先把所有点击按钮颜色都去掉，再给当前元素加上
//	            	
//
//	            }
//	}
//
//}