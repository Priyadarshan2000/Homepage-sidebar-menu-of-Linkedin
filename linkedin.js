document.querySelectorAll("nav li").forEach(function (li) {

    li.addEventListener("click", function () {

        document.querySelectorAll("nav li").forEach(function (list) {
            list.classList.remove("selected-nav");
        })

        if (!li.classList.contains("premium-nav"))
            li.classList.add("selected-nav")


    })
})

document.querySelectorAll("footer li").forEach(function (li) {

    li.addEventListener("click", function () {

        document.querySelectorAll("footer li").forEach(function (list) {
            list.classList.remove("selected-nav2");
        })

        li.classList.add("selected-nav2")


    })
})


document.querySelectorAll(".post-follow").forEach(function (btn) {
    btn.addEventListener("click", function () {

        if (btn.classList.contains("follow")) {

            // alert("LOL")
            btn.innerHTML = '<i class="fas fa-check"></i>&nbsp FOLLOWING';
            btn.classList.toggle("follow")
            btn.classList.toggle("following")
        } else if (btn.classList.contains("following")) {
            btn.innerHTML = '<i class="fas fa-plus"></i> &nbsp FOLLOW</a>';
            btn.classList.toggle("follow")
            btn.classList.toggle("following")
        }

    })
})

document.querySelector(".nav-me2").addEventListener("click", function (){
    var sidebar = document.querySelector(".sidebar")
    sidebar.style.left = 0;

    document.querySelector("nav").classList.add("filtered")
    document.querySelector("main").classList.add("filtered")
    document.querySelector("footer").classList.add("filtered")
})



document.querySelector("main").addEventListener("click", function (){
    var sidebar = document.querySelector(".sidebar")
    sidebar.style.left = "";
    document.querySelector("nav").classList.remove("filtered")
    document.querySelector("main").classList.remove("filtered")
    document.querySelector("footer").classList.remove("filtered")

})

document.querySelector("main").addEventListener("click", function (){
    var sidebar = document.querySelector(".sidebar")
    sidebar.style.left = "";
    document.querySelector("nav").classList.remove("filtered")
    document.querySelector("main").classList.remove("filtered")
    document.querySelector("footer").classList.remove("filtered")

})



document.querySelector('.sidebar').addEventListener('touchmove', function(e) {

        e.preventDefault();

}, false);

document.querySelector(".sidebar .arrow").addEventListener("click", function(){
    this.classList.toggle("rotate-arrow")
})

document.querySelector(".expand-add-acc").addEventListener("click",function(){
    document.querySelector(".add-account").classList.toggle("show-add-acc")
    document.querySelector(".hidden-hr-add-acc").classList.toggle("show-add-acc")
})