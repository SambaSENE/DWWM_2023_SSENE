let bouge = false
let redim = false
let edit = false

let post1 = new PostIt("post1")
    // let post2 = new PostIt("post2")
    // let post3 = new PostIt("post3")
    // post1.affiche()
    // post2.affiche()
    // post3.chgCoul("#0000FF")
    // post3.affiche()

post1.bouge(200, 400)
post1.affiche()

post1.redim(200, 110)
post1.affiche()

post1.chgCoul("#FF0000")
post1.affiche()

post1.chContenu("test de texte")
post1.affiche()


document.body.addEventListener("click", () => {
    resize = false
    bouge = false
    edit = false
})
document.body.addEventListener('mousemove', (e) => {
    if (move == true) {
        post1.bouge(e.clientX - 20)
    }
})