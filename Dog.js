import dogs from "./data.js"
// Create the Dog class here

class Dog{
    constructor(data){
        Object.assign(this, data)
    }
    
    getMatchHtml(){
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        return `
        <img class="avatar" src = ${avatar}>
        <div class="text">
            <div class="info"> ${name}, ${age}</div>
            <p>${bio}</p>
            </div>`
    }
}

export default Dog