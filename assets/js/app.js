// VARIABLES - START
const profile_img = document.getElementsByClassName("profile_img");
const id_profileStories = document.getElementsByClassName("id_profileStories");

const img_userPost = document.getElementsByClassName("img_userPost");
const id_profileFeed = document.getElementsByClassName("id_profileFeed");
const imgPost = document.getElementsByClassName("imgPost");
const like_action = document.getElementsByClassName("like_action");
// VARIABLES - END


// FUNCTIONS - START
function autoDataUser(id, name, valuePublications, valueFollowers,
    valueFollowing, bio, link, fileImgPerfil) {
    return {
        id: id,
        name: name,
        valuePublications: valuePublications,
        valueFollowers: valueFollowers,
        valueFollowing: valueFollowing,
        bio: bio,
        link: link,
        fileImgPerfil: fileImgPerfil
    }
}

function autoDataPost(id, imgPost) {
    return {
        img_userPost: datasUsers[id].fileImgPerfil,
        id_profileFeed: datasUsers[id].id,
        imgPost: imgPost
    }
}

function eventLike(id) {
    like_action[id].addEventListener("click", () => {
        like_action[id].src = "assets/images/heart_like.png";
    })
}
// FUNCTIONS - END


// DATAS - START
const datasUsers = [
    autoDataUser(
        "andersonzero0",
        "Anderson Viana",
        1,
        2,
        2,
        "16y",
        "https://andersonzero0.github.com",
        "assets/images/andersonzero0_profile.png"
    ),

    autoDataUser(
        "david_john",
        "David John",
        1,
        0,
        0,
        "--",
        "--",
        "https://raw.githubusercontent.com/andersonzero0/javascript/main/" + 
        "carrossel/images/david-john.jpg"
    ),

    autoDataUser(
        "emily_taylor",
        "Emily Taylor",
        1,
        0,
        0,
        "--",
        "--",
        "https://raw.githubusercontent.com/andersonzero0/javascript/main/" + 
        "carrossel/images/emily-taylor.jpg"
    ),

    autoDataUser(
        "harry_jones",
        "Harry Jones",
        1,
        0,
        0,
        "--",
        "--",
        "https://raw.githubusercontent.com/andersonzero0/javascript/main/" + 
        "carrossel/images/harry-jones.jpg"
    ),

    autoDataUser(
        "oliver_smith",
        "Oliver Smith",
        1,
        0,
        0,
        "--",
        "--",
        "https://raw.githubusercontent.com/andersonzero0/javascript/main/" + 
        "carrossel/images/oliver-smith.jpg"
    ),

    autoDataUser(
        "olivia_williams",
        "Olivia Williams",
        1,
        0,
        0,
        "--",
        "--",
        "https://raw.githubusercontent.com/andersonzero0/javascript/main/" + 
        "carrossel/images/olivia-williams.jpg"
    ),
]

const datasPosts = [
    autoDataPost(
        3,
        "post_1-0.jpg"
    ),

    autoDataPost(
        4,
        "post_2-0.jpg"
    ),

    autoDataPost(
        2,
        "post_3-0.jpg"
    )
];
// DATAS - END


// STAGE - START
for(var i = 0; i < datasUsers.length; i++) {
    profile_img[i].src = datasUsers[i].fileImgPerfil;
    id_profileStories[i].innerHTML = datasUsers[i].id;
}

for(var i_post = 0; i_post < datasPosts.length; i_post++) {
    img_userPost[i_post].src = datasPosts[i_post].img_userPost;
    id_profileFeed[i_post].innerHTML = datasPosts[i_post].id_profileFeed;
    imgPost[i_post].src = "assets/images/" + datasPosts[i_post].imgPost;
}

for(var i_like = 0; i_like < 3; i_like++) {
    eventLike(i_like);
}
// STAGE - END