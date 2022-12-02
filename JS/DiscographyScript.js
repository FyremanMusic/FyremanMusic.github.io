/*List of all Image IDs in HMTL*/
const SoloworkSongs = ["BlackMiasma", "TokyoUnderground", "B", "Summit", "BigBusiness", "DeepSpace", "Mountain", "Awakening", "Snowdance", "Shootingstar", "Gone", "Together", "Glory", "LightRays"];
const RemixSongs = ["Champagne", "SunComesUp", "ElectricElephants", "London", "GravitationalCollapse"];
const CollabSongs = ["SoulHikers"];

let currentURL = window.location.href;

/*Select submethod from URL*/
if(currentURL.includes("Solowork.html")) Solowork();
if(currentURL.includes("Collaborations.html")) Collabs();
if(currentURL.includes("Remixes.html")) Remixes();

function Solowork(){ 
    /*Set all background images to the right image*/
    document.getElementById("BlackMiasmaImage").style.backgroundImage = "url('../Resources/Discography/Solowork/BlackMiasma.jpg')";
    document.getElementById("TokyoUndergroundImage").style.backgroundImage = "url('../Resources/Discography/Solowork/Tokyo_Underground.png')";
    document.getElementById("BImage").style.backgroundImage = "url('../Resources/Discography/Solowork/B.png')";
    document.getElementById("SummitImage").style.backgroundImage = "url('../Resources/Discography/Solowork/Summit.png')";
    document.getElementById("BigBusinessImage").style.backgroundImage = "url('../Resources/Discography/Solowork/Big_Business.png')";
    document.getElementById("DeepSpaceImage").style.backgroundImage = "url('../Resources/Discography/Solowork/Deep_Space.png')";
    document.getElementById("MountainImage").style.backgroundImage = "url('../Resources/Discography/Solowork/Mountains.png')";
    document.getElementById("AwakeningImage").style.backgroundImage = "url('../Resources/Discography/Solowork/Awakening.png')";
    document.getElementById("SnowdanceImage").style.backgroundImage = "url('../Resources/Discography/Solowork/Snowdance.png')";
    document.getElementById("ShootingstarImage").style.backgroundImage = "url('../Resources/Discography/Solowork/Shootingstar.png')";
    document.getElementById("GoneImage").style.backgroundImage = "url('../Resources/Discography/Solowork/Gone.png')";
    document.getElementById("TogetherImage").style.backgroundImage = "url('../Resources/Discography/Solowork/Together.png')";
    document.getElementById("GloryImage").style.backgroundImage = "url('../Resources/Discography/Solowork/Glory.png')";
    document.getElementById("LightRaysImage").style.backgroundImage = "url('../Resources/Discography/Solowork/LightRays.png')";

    /*adjust the size of each image and set functionality*/
    SoloworkSongs.forEach(setImageSize);
    SoloworkSongs.forEach(setFunctionality);
}

function Remixes(){
    /*Set all background images to the right image*/
    document.getElementById("ChampagneImage").style.backgroundImage = "url('../Resources/Discography/Remixes/Champagne.png')";
    document.getElementById("SunComesUpImage").style.backgroundImage = "url('../Resources/Discography/Remixes/TillTheSunComesUp.png')";
    document.getElementById("ElectricElephantsImage").style.backgroundImage = "url('../Resources/Discography/Solowork/Gone.png')";
    document.getElementById("LondonImage").style.backgroundImage = "url('../Resources/Discography/Remixes/London.png')";
    document.getElementById("GravitationalCollapseImage").style.backgroundImage = "url('../Resources/Discography/Remixes/GravitationalCollapse.png')";

    /*adjust the size of each image and set functionality*/
    RemixSongs.forEach(setImageSize);
    RemixSongs.forEach(setFunctionality);
}

function Collabs(){
    /*Set all background images to the right image*/
    document.getElementById("SoulHikersImage").style.backgroundImage = "url('../Resources/Discography/Collaborations/SoulHikers.png')";

    /*adjust the size of each image and set functionality*/
    CollabSongs.forEach(setImageSize);
    CollabSongs.forEach(setFunctionality);
}

function setImageSize(value, index, array){
    document.getElementById(value + "Image").style.backgroundSize = "100% 100%";
}

function setFunctionality(value, index, array){
    let something = document.getElementById(value + "Cell");
    something.onclick = getClicked;
    
    function getClicked(){
        let text = something.querySelector(".text");
        let image = something.querySelector(".doblur");

        if(something.dataset.isblured === "false"){
            something.style.overflowY = 'scroll';
            //something.querySelector(".text").style.display = 'block';
            text.style.zIndex = "1";
            text.style.filter = "opacity(100)";
            image.style.filter = "opacity(0)";
            image.zIndex = "0";
            something.dataset.isblured="true";
        }
        else{
            something.style.overflowY = 'hidden';
            //something.querySelector(".text").style.display = 'none';
            text.style.zIndex = "0";
            text.style.filter = "opacity(0)"
            image.style.filter = "opacity(100)";
            image.zIndex = "1";
            something.dataset.isblured="false";
        }
    }

    getClicked();
    getClicked();
}