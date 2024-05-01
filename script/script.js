// backButton [FUNCTION] - Allows users to go back to the home page
function backButton() {
    window.location.assign("/Interactive-Map/index.html");
    console.log("User has returned to home page!");
}

// mapSelect [FUNCTION] - Redirects users to the corresponding location using locVar
// locVar [VARIABLE] - Uses a number to verify each location when clicking the element
function mapSelect(locVar) {
    if (locVar == 1) {
        window.location.assign("/Interactive-Map/places/egg/east.html");
        console.log("User has been redirected to East Egg");
    } else if (locVar == 2) {
        window.location.assign("/Interactive-Map/places/egg/west.html");
        console.log("User has been redirected to West Egg");
    } else if (locVar == 3) {
        window.location.assign("/Interactive-Map/places/houses/nick.html");
        console.log("User has been redirected to Nicks House");
    } else if (locVar == 4) {
        window.location.assign("/Interactive-Map/places/houses/gatsby.html");
        console.log("User has been redirected to Gatsby Mansion");
    } else if (locVar == 5) {
        window.location.assign("/Interactive-Map/places/houses/buch.html");
        console.log("User has been redirected to Buchanan Mansion");
    } else if (locVar == 6) {
        window.location.assign("/Interactive-Map/places/other/ashes.html");
        console.log("User has been redirected to Valley of Ashes");
    } else if (locVar == 7) {
        window.location.assign("/Interactive-Map/places/other/workshop.html");
        console.log("User has been redirected to Georges Workshop");
    } else {
        window.location.assign("/Interactive-Map/index.html");
        console.log("FAILED TO REDIRECT!")
    }
} 