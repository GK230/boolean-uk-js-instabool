// write your code here
function getData () {

    fetch("http://localhost:3000/images")
        .then(function (response) {
            return response.json()
        })
        .then(function (images) {
            createCards(images)
        })
}

function createCards(images) {

    for (image of images) {
        createSingleCard(image)
    }
}

function createSingleCard(image) {

    const articleEl = document.createElement('article')
        articleEl.setAttribute("class", "image-card")

        const titleEl = document.createElement('h2')
        titleEl.setAttribute("class", "title")

        titleEl.innerText = image.title

        const imageEl = document.createElement('img')
        imageEl.setAttribute("class", ".image")
        imageEl.setAttribute("src", image.image)
        imageEl.setAttribute("alt", image.title)

        const likesSecEl = document.createElement('div')
        likesSecEl.setAttribute("class", "likes-section")

        const likesSpan = document.createElement('span')
        likesSpan.setAttribute("class", "likes")
        likesSpan.innerText = image.likes

        const likesBtn = document.createElement('button')
        likesBtn.setAttribute("class", "like-button")
        likesBtn.innerText = "♥"
        likesBtn.addEventListener('click', function () {
            updateLikes(image)
        }) 

        likesSecEl.append(likesSpan, likesBtn)

        const ulEl = document.createElement('ul')
        ulEl.setAttribute('class', 'comments')
        for (comment of image.comments) {
            const liEl = document.createElement('li')
            liEl.innerText = comment.content
            ulEl.append(liEl)
        }

        const commentFormEl = document.createElement('form')
        commentFormEl.setAttribute('class', 'comment-form')
        commentFormEl.addEventListener('submit', function (event) {
            event.preventDefault();
            const comment = event.target.comment.value
            addComment(image, comment)
            commentFormEl.reset()
        })

        const inputEl = document.createElement('input')
        inputEl.setAttribute('class', 'comment-input')
        inputEl.setAttribute('type', 'text')
        inputEl.setAttribute('name', 'comment')
        inputEl.setAttribute('placeholder', 'Add a comment...')

        const btnEl = document.createElement('button')
        btnEl.setAttribute('class', 'comment-button')
        btnEl.setAttribute('type', 'submit')
        btnEl.innerText = "Post"

        commentFormEl.append(inputEl, btnEl)

        articleEl.append(titleEl, imageEl, likesSecEl, ulEl, commentFormEl)
        secEl = document.querySelector('.image-container')
        secEl.append(articleEl)
}

function updateLikes(image) {

    image.likes++

    fetch(`http://localhost:3000/images/${image.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ likes: image.likes })
      }).then(function() {
          const likesSpan = document.querySelector('.likes')
          likesSpan.innerText = image.likes
      })
}

function addComment(image, comment) {

    image.comments.push(comment)
    let theComment = {imageId: image.id, content: comment}

    fetch(`http://localhost:3000/images/${image.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ comments.push(theComment) 
        })
      }).then(function() {
        const commentsEl = document.querySelector('.comments')
        console.log(commentsEl)

        let commentItemEl = document.createElement('li')
        commentItemEl.innerText = comment
        commentsEl.append(commentItemEl)
    })

}




getData()
