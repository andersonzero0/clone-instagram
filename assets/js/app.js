// VARIABLES - START
const profile_img = document.getElementsByClassName("profile_img");
const id_profileStories = document.getElementsByClassName("id_profileStories");
// VARIABLES - END


// FUNCTIONS - START

// FUNCTIONS - END


// DATAS - START
const datas = [
    {
        id: "andersonzero0",
        name: "Anderson Viana",
        valuePublications: 1,
        valueFollowers: 0,
        valueFollowing: 0,
        bio: "aaaaaaaaaa",
        link: "a.com",
        fileImgPerfil: "assets/images/andersonzero0_profile.png"
    },
    {
        id: "david_john",
        name: "David John",
        valuePublications: 1,
        valueFollowers: 0,
        valueFollowing: 0,
        bio: "",
        link: "",
        fileImgPerfil: "https://raw.githubusercontent.com/andersonzero0/javascript/main/carrossel/images/david-john.jpg"
    },
    {
        id: "emily_taylor",
        name: "Emily Taylor",
        valuePublications: 1,
        valueFollowers: 0,
        valueFollowing: 0,
        bio: "",
        link: "",
        fileImgPerfil: "https://raw.githubusercontent.com/andersonzero0/javascript/main/carrossel/images/emily-taylor.jpg"
    },
    {
        id: "harry_jones",
        name: "Harry Jones",
        valuePublications: 1,
        valueFollowers: 0,
        valueFollowing: 0,
        bio: "",
        link: "",
        fileImgPerfil: "https://raw.githubusercontent.com/andersonzero0/javascript/main/carrossel/images/harry-jones.jpg"
    },
    {
        id: "oliver_smith",
        name: "Oliver Smith",
        valuePublications: 1,
        valueFollowers: 0,
        valueFollowing: 0,
        bio: "",
        link: "",
        fileImgPerfil: "https://raw.githubusercontent.com/andersonzero0/javascript/main/carrossel/images/oliver-smith.jpg"
    },
    {
        id: "olivia_williams",
        name: "Olivia Williams",
        valuePublications: 1,
        valueFollowers: 0,
        valueFollowing: 0,
        bio: "",
        link: "",
        fileImgPerfil: "https://raw.githubusercontent.com/andersonzero0/javascript/main/carrossel/images/olivia-williams.jpg"
    },
]
// DATAS - END


// STAGE - START
for(var i = 0; i < datas.length; i++) {
    profile_img[i].src = datas[i].fileImgPerfil;
    id_profileStories[i].innerHTML = datas[i].id;
}
// STAGE - END