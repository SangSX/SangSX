let domB = document.getElementById("show-b");
let urlList = ['Social_2.jpg', 'Social_6.jpeg', 'Social_8.jpeg', 'Social_9.jpeg', 'Social_7.jpeg'];
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

//brand-icon 展示功能
function brandSwich() {
    if(document.getElementById("more-icon").innerText === "➕") {
        document.getElementById("brand-icon").style.height = "fit-content";
        document.getElementById("more-icon").innerText = "➖";
    }
    else {
        document.getElementById("brand-icon").style.height = "270px";
        document.getElementById("more-icon").innerText = "➕";
    }
}

//bar-img 事件处理
let urlListC = ['img/sale-43-20230601.jpg', 'img/sale-43-20230531.jpg'];
let domC = document.getElementById("show-c");
function changeImgC(index, loop) {
    let menu = document.getElementById("c-menu").children;
    for(i=0; i<urlListC.length; i++) {
        menu[i].style.backgroundColor = "#d3d3d3";
    }
    menu[index].style.backgroundColor = "#b1b876";
    domC.style.backgroundImage = "url('" + urlListC[index%urlList.length] + "')";
    index = ++index%urlListC.length;
    if(loop) {
        setTimeout( () => { changeImgC(index, true)}, 4000)
    }
}
let menuContent = "";
for(let i=0; i<urlListC.length; i++) { menuContent += "<div onclick='changeImgC(" + i + ", false)'></div>";}
document.getElementById("c-menu").innerHTML = menuContent;
changeImgC(0, true);
