// write your code here
fetch("http://localhost:3000/images")
.then(function (response) {
    return response.json()
})
.then(function (images) {
    createCardImages(images)
})

function createCardImages(images) {

    for (image of images) {

        const articleEl = document.createElement('article')
        articleEl.setAttribute("class", ".image-card")

        const titleEl = document.createElement('h2')
        titleEl.setAttribute("class", ".title")

        titleEl.innerText = image.title

        const imageEl = document.createElement('img')
        imageEl.setAttribute("class", ".image")
        imageEl.setAttribute("src", image.image)
        imageEl.setAttribute("alt", image.title)

        const likesSecEl = document.createElement('div')
        likesSecEl.setAttribute("class", ".likes-section")

        const likesSpan = document.createElement('span')
        likesSpan.setAttribute("class", ".likes")
        likesSpan.innerText = image.likes

        const likesBtn = document.createElement('button')
        likesBtn.setAttribute("class", ".like-button")
        likesBtn.innerText = "♥"

        likesSecEl.append(likesSpan, likesBtn)

        articleEl.append(titleEl, imageEl, likesSecEl)
        secEl = document.querySelector('.image-container')
        secEl.append(articleEl)
    }
}

fetch("http://localhost:3000/comments")
.then(function (response) {
    return response.json()
})
.then(function (comments) {
    createCardComments(comments)
})

function createCardComments(comments) {

    const commentListEl = document.createElement('ul')
    commentListEl.setAttribute("class", "comments")

    const listItemEl = document.createElement('li')
    
}


        

    




    // <!-- <article class="image-card">
    //     <h2 class="title">Title of image goes here</h2>
    //     <img src="./assets/image-placeholder.jpg" class="image" />
    //     <div class="likes-section">
    //       <span class="likes">0 likes</span>
    //       <button class="like-button">♥</button>
    //     </div>
    //     <ul class="comments">
    //       <li>Get rid of these comments</li>
    //       <li>And replace them with the real ones</li>
    //       <li>From the server</li>
    //     </ul>
    //     <form class="comment-form">
    //       <input
    //         class="comment-input"
    //         type="text"
    //         name="comment"
    //         placeholder="Add a comment..."
    //       />
    //       <button class="comment-button" type="submit">Post</button>
    //     </form>
    //   </article> -->