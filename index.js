let containerEl = document.getElementById ("container-el")
containerEl.innerHTML = ""

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


for (i=0; i< posts.length; i++){
    let postDisplay = posts [i]
    let postName = postDisplay.name
    let postUsername = postDisplay.username
    let postLocation = postDisplay.location
    let postAvatar = postDisplay.avatar
    let postPost = postDisplay.post
    let postComment = postDisplay.comment
    let postLikes= postDisplay.likes
    
    containerEl. innerHTML += `
            <main class="main-container">
                <section>
                    <div class="post-header">
                    <img class="img-profile" src="${postAvatar}" id="avatar-el">
                    <div>    
                        <p class="bold-text" id="name-el"> ${postName} </p>
                        <p class="light-text" id="location-el"> ${postLocation} </p>
                    </div>
                    </div>
                </section>
                <section>
                    <img class="img-post" src="${postPost}" id="post-el">
                        <div class="interactions">
                            <img class="interactions-icons" src="images/icon-heart.png">
                            <img class="interactions-icons" src="images/icon-comment.png">
                            <img class="interactions-icons" src="images/icon-dm.png">
                            <p class="bold-text" id="likes-el"> ${postLikes} likes </p>
                            <div class="post-description">
                                <p class="bold-text" id="username-el"> ${postUsername} </p>
                                <p class="light-text" id="comment-el">${postComment} </p>
                            </div>
                        </div>
                    <script src="index.js"></script>
                </section>
            </main>
    `
}


    