function auto_reload(delay = 5, nocache = false) {
    seconds = delay * 1000;
    setTimeout(function () { location.reload(nocache); }, seconds);
}
