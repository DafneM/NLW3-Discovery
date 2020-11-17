
//create map
const map = L.map('mapid').setView([-27.2056602,-49.6932568,], 15)


//create and add title layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:   [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//create and add marker to map
map.on('click', function(event){
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
})

//adicionar o campo de fotos
function addPhotoField(){
    //pegar container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar 
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //clonar da ultima imagem adicionada 
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se o campo está vazio, se sim, nao adicionar ao container de imagens
    const input = newFieldContainer.children[0] 
    if(input.value==""){return}
    //limpar o campo antes de adicionar container de imagens
    input.value = ""
    //adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    //ver quantos fields tem la dentro obs.: se tiver so um, não deixar excluir se tiver só um
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        //limpar campo quando clicar no x
        span.parentNode.children[0].value  = ""
        return
    }

    //remover o field
    span.parentNode.remove();
}

//escolher Sim ou Não
function toggleSelect(event){
    // pegar o botão clicado

    //retirar class .active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })
    //colocar class .active
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o input hidden c/ valor selecionado(p backend)
    const input = document.querySelector('[name="open_on_weekends"]')

    //verificar se é sim ou Não
    input.value = button.dataset.value
    
    function validate(event){
        const needsLatAndLng = true;
        //validar se lat e lng estao preenchidos
        if(needsLatAndLng){
        event.preventDefault();
        alert('Selecione um ponto no mapa')
        }
    }
}