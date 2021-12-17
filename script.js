const secretway = document.getElementById("secretway");
let secretwayShown = false;

secretway.onclick = () => {
    if (secretwayShown) {
        document.body.classList.remove("secretway");
    } else {
        document.body.classList.add("secretway");
    }

    secretwayShown = !secretwayShown;
};
