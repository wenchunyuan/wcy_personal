//header下拉按钮
    {
        let header=document.querySelector(".header_logo");
        let body=document.querySelector("body");
        let content1=document.querySelector(".content1");
        let h=window.innerHeight;
        header.onclick=function () {
            body.style.marginTop=-h+"px";
            body.style.transition="all 0.3s";
        }
        content1.onclick=function () {
            body.style.marginTop=0;
            body.style.transition="all 0.8s";
        }
    }

//全屏滚动
// {
//     let sections=document.querySelectorAll(".section");
//     let inner=document.querySelector(".perInner");
//     let pages=document.querySelectorAll(".page");
//
//     // sections.forEach(function (ele,index) {
//     //     ele.style.height=window.innerHeight+"px";
//     //     ele.style.lineHeight=window.innerHeight+"px";
//     // })
//     let obj=pages[0];
//     let h=window.innerHeight;
//     pages.forEach(function (ele,index) {
//         ele.onclick=function () {
//             obj.classList.remove("active");
//             ele.classList.add("active");
//             obj=ele;
//             inner.style.marginTop=-h*index+"px";
//         }
//     })
// }
//返回顶部
    {
        let totop=document.querySelector(".topBar");
        totop.onclick=function(){
            let st=document.documentElement.scrollTop;      //获取现在滚动的高度
            //返回顶部，1.时间固定。2.速度固定
            //每25减小200
            let t=setInterval(function(){
                st-=200;
                if(st<0){
                    st=0;
                    clearInterval(t);         //停掉t
                }
                document.documentElement.scrollTop=st;
            },25)
        }
    }
