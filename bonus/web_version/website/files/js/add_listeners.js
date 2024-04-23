function add_listeners() {
    var minimum = document.getElementById("minimum"),
        maximum = document.getElementById("maximum"),
        n = document.getElementById("n");
    minimum.addEventListener("change", check_if_possible);
    maximum.addEventListener("change", check_if_possible);
    n.addEventListener("change", check_if_possible);
}
