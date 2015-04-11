var content = document.getElementById("content");

NProgress.configure({ showSpinner: false });

var materialeditor = function() {
    NProgress.start();
    setTimeout(function (){
        changeStyles("orange", "light-blue", "assets/Material-labs-small.png");
        content.innerHTML = "<iframe src = 'materialeditor.html' id = 'frame' frameborder='0'></iframe>";
    }, 800);
};

var changeStyles = function(currColor, colorToChange, img_path){
    if ($("#blog-btn").hasClass(currColor)){
        $("nav").each(function() {
            $(this).removeClass(currColor);
            $(this).addClass(colorToChange);
        });
        //fix for double scrollbar when embedding route views
        $("#frame-body").css({
            "overflow": "hidden"
        });
        $("#dropdown1").removeClass(currColor);
        $("#dropdown1").addClass(colorToChange);
        $("#nav-mobile").removeClass(currColor);
        $("#nav-mobile").addClass(colorToChange);
        $("#blog-btn").removeClass(currColor);
        $("#blog-btn").addClass(colorToChange);
        $(".mobile-divider").each(function(){
            $(this).removeClass(currColor);
            $(this).addClass(colorToChange);
        });
        $("#logo-img").attr("src", img_path);
    }
}

var materialmarkdown = function() {
    NProgress.start();
    setTimeout(function (){
        changeStyles("light-blue", "orange", "assets/Material-labs-small-orange.png");
        content.innerHTML = "<iframe src = 'materialmarkdown.html' id = 'frame' frameborder='0'></iframe>";
    }, 800);
};

var materialwriter = function() {
    NProgress.start();
    setTimeout(function (){
        changeStyles("orange", "light-blue", "assets/Material-labs-small.png");
        content.innerHTML = "<iframe src = 'materialwriter.html' id = 'frame' frameborder='0'></iframe>";
    }, 800);
};

var materialviewer = function() {
    NProgress.start();
    setTimeout(function (){
        changeStyles("orange", "light-blue", "assets/Material-labs-small.png");
        content.innerHTML = "<iframe src = 'materialviewer.html' id = 'frame' frameborder='0'></iframe>";
    }, 800);
};

var main_page = function() {
    NProgress.start();
    setTimeout(function (){
        changeStyles("orange", "light-blue", "assets/Material-labs-small.png");
        content.innerHTML = "<iframe src = 'main-page.html' id = 'frame' frameborder='0'></iframe>";
    }, 800);
}

var routes = {
    "/materialeditor": materialeditor,
    "/materialmarkdown": materialmarkdown,
    "/materialwriter": materialwriter,
    "/materialviewer": materialviewer,
    "/main-page": main_page
};

var router = Router(routes);
router.configure({
    on: function(){
        setTimeout(function (){
            NProgress.done();
        }, 1000);
    }
})
router.init();