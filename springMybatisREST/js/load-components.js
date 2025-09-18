const navLoad = (htmlPath) => {
    fetch(htmlPath)
        .then(res => res.text())
        .then(data => {
            document.querySelector("#nav-container").innerHTML = data;
        })
        .catch(error => console.log('navLoad 로드 중 에러 발생', error))
}

const footerLoad = (htmlPath) => {
    fetch(htmlPath)
        .then(res => res.text())
        .then(data => {
            document.querySelector("#footer-container").innerHTML = data;
        })
        .catch(error => console.log('footerLoad 로드 중 에러 발생', error))
}

document.addEventListener("DOMContentLoaded", () => {
        navLoad("../../html/include/nav.html");
        footerLoad("../../html/include/footer.html");
})