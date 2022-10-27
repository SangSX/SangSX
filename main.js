let domB = document.getElementById("show-b");
let urlList = ['Social_2.jpg', 'Social_3.jpg', 'Social_4.jpg'];
let urlIndex = 1;
function loopImgB() {
    setTimeout( () => {
        urlIndex = ++urlIndex%urlList.length;
        domB.style.backgroundImage = "url('img/" + urlList[urlIndex] + "')";
        loopImgB();
    }, 6000)
}
function changeImgB(event) {
    if(event.target.textContent === "》") {
        urlIndex = ++urlIndex%urlList.length;
        domB.style.backgroundImage = "url('img/" + urlList[urlIndex] + "')";
    }
    if(event.target.textContent === "《") {
        urlIndex = (urlIndex + urlList.length - 1)%urlList.length;
        domB.style.backgroundImage = "url('img/" + urlList[urlIndex] + "')";
    }
}
let hideLi = function() {
    document.querySelectorAll(".li").forEach(element => {
        element.className = "li blur hide";
    });
}


//移动端目录处理逻辑
const mNavEvent = function() {
    let mNav = document.getElementById("m-nav");
    if(mNav.style.right === "0px") mNav.style.right = "-300px";
    else mNav.style.right = "0px";
}
window.onload = () => {
    loopImgB();
};

//页面滚动位置监听
const stroeScroll = () => {
    if(window.scrollY > 600){
        document.getElementById('top-nav').classList = ["f-blur"];
        document.getElementById('go-top').style.display = "flex";
    }
    if(window.scrollY < 600) {
        document.getElementById('top-nav').classList = ["blur"];
        document.getElementById('go-top').style.display = "none";
    }
    
}
document.addEventListener('scroll', stroeScroll);

//popCard 事件处理
const popCard = document.getElementById("pop-card");
const closePopCard = () => {
    popCard.style.display = "none";
}
const openPopCard = () => {
    popCard.style.display = "block";
}
//setTimeout(openPopCard(), 3000);

//center-card 事件处理
const bgBox = document.getElementById("background-box");
const hideBgBox = () => {
    bgBox.style.display = "none";
}
const showBgBox = () => {
    bgBox.style.display = "flex";
}

//bar-img 事件处理
idList = ['sale-img1', 'sale-img2']
const changeSaleImg = function(idName) {
    for(let i=0; i<idList.length; i++) {
        document.getElementById(idList[i]).className = 'bar-main-img top-over';
    }
    document.getElementById(idName).className = 'bar-main-img top-zero';
}

//brand-icon 事件处理
let brandIcon = document.getElementById("brand-icon");
let moreIcon = document.getElementById("more-icon");
let brandIconMoment = false;
const showAllIcon = function() {
    if(brandIconMoment) {
        moreIcon.innerHTML = "➕";
        brandIcon.style.height = "";
        console.log("+");
        brandIconMoment = false;
    }
    else {
        moreIcon.innerHTML = "➖";
        console.log("-");
        brandIcon.style.height = "fit-content";
        brandIconMoment = true;
    }
}
