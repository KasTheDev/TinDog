import dogs from "./data.js" 
import Dog from "./Dog.js"
// Remember to import the data and Dog class!


let profileArray = ["rex", "bella","teddy", "rhea"]

function getNewProfile(){
    const nextProfile = dogs[profileArray.shift()]
    return nextProfile ? new Dog(nextProfile) : {}
}

function renderProfile(){
    document.getElementById('match-card').innerHTML = matches.getMatchHtml()
}

function next(e){
    if(profileArray.length > 0){
        if(e.target.id === 'crossButton'){
            matches.hasBeenSwiped = true
            document.getElementById('nopeBadge').style.display = 'flex'
            setTimeout(()=> {
            matches = getNewProfile()
            document.getElementById('nopeBadge').style.display = 'none'
            renderProfile()
            }, 2000)
        }
        else if(e.target.id === 'heartButton'){
            matches.hasBeenLiked = true
            document.getElementById('likeBadge').style.display = 'flex'
            setTimeout(()=> {
            matches = getNewProfile()
            document.getElementById('likeBadge').style.display = 'none'
            renderProfile()
            }, 2000)   
        }
    }
    else if(profileArray.length === 0){
        if(e.target.id === 'crossButton'){
            matches.hasBeenSwiped = true
            document.getElementById('nopeBadge').style.display = 'flex'
            setTimeout(()=> {
            document.getElementById('nopeBadge').style.display = 'none'
            }, 2000)
            outOfMatches()
        }
        else if(e.target.id === 'heartButton'){
            matches.hasBeenSwiped = true
            document.getElementById('likeBadge').style.display = 'flex'
            setTimeout(()=> {
            document.getElementById('likeBadge').style.display = 'none'
            }, 2000)
            outOfMatches()   
        }
    }
}

function outOfMatches(){
        setTimeout(()=>{
        document.getElementById('profile-display').innerHTML = `
                <div class="out-of-matches">
                    <h2>Don't Worry!</h2> 
                    <h3>You'll find love eventually!</h3>
                </div>
                `
        }, 2000)
}


document.getElementById('react-btn').addEventListener('click', next)

let matches = getNewProfile()
renderProfile()

