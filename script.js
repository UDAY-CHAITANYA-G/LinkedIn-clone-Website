let profileMenu= document.getElementById("profile-menu");
let sidebarActivity=document.getElementById("sidebar-activity")
let moreLink= document.getElementById("show-more-link");

function toggleMenu(){
    profileMenu.classList.toggle("open-menu");
}

function activitytoggle(){
    sidebarActivity.classList.toggle("open-activity");
    if(sidebarActivity.classList.contains("open-activity")){
        moreLink.innerHTML="Show Less <b>-</b>"
    }
    else{
        moreLink.innerHTML="Show More <b>+</b>"
    }
}