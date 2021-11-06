const modalSobreposicao = document.querySelector('.modal_sobreposicao')
const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener("click", function(){
        const paginaID = card.getAttribute("id")
        
        window.location.href = `/paginas/${paginaID}/`
        /*modalSobreposicao.classList.add('active')
        modalSobreposicao.querySelector('iframe').src = `https://blog.rocketseat.com.br/${paginaID}/`*/

    })
}

/*document.querySelector(".close2_modal").addEventListener("click", function(){
    modalSobreposicao.classList.remove('active')
    modalSobreposicao.querySelector("iframe").src = ""
})*/