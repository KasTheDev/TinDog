import dogs from "./data.js" 
import Dog from "./Dog.js"


let profileArray = ["rex", "bella","teddy", "rhea"]

function getNewProfile(){
    const nextProfile = dogs[profileArray.shift()]
    return nextProfile ? new Dog(nextProfile) : {}
}

function renderProfile(){
    document.getElementById('match-card').innerHTML = matches.getMatchHtml()
}

const updateMatches = (statusKey, badgeId, callbackFn = renderProfile) => {
    matches[statusKey] = true;
    document.getElementById(badgeId).style.display = "flex";
    setTimeout(() => {
        matches = getNewProfile();
        document.getElementById(badgeId).style.display = "none";
        callbackFn();
    }, 2000);
};

const next = (e) => {
    const targetId = e.target.id;
    if (profileArray.length > 0) {
        if (targetId === "crossButton") {
            updateMatches("hasBeenSwiped", "nopeBadge");
        } else if (targetId === "heartButton") {
            updateMatches("hasBeenLiked", "likeBadge");
        }
    } else if (profileArray.length === 0) {
        if (targetId === "crossButton") {
            updateMatches("hasBeenSwiped", "nopeBadge", outOfMatches);
        } else if (targetId === "heartButton") {
            updateMatches("hasBeenSwiped", "likeBadge", outOfMatches);
        }
    }
};

function outOfMatches(){
        document.getElementById('profile-display').innerHTML = `
                <div class="out-of-matches">
                    <h2>Don't Worry!</h2> 
                    <h3>You'll find love eventually!</h3>
                </div>
                `
}

document.getElementById('react-btn').addEventListener('click', next)

let matches = getNewProfile()
renderProfile()
