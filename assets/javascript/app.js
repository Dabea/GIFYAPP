let tagCollection = ['Animials', 'Pop' , 'Music', 'Cats'];

/**
 * Generates the tags and appends it to the page
 * 
 * @method generateTags
 * @param {*} name 
 */
function generateTags(name){ 
    console.log(name)
    const tagTemplate = `<span class="tag" data-tag="${name}" > ${name} <span class="delete-symbol" >x</span> </span>`;
    $('.btn-area').append(tagTemplate);
}

function buildView(){
    for(let i = 0; i < tagCollection.length; i++){
        generateTags(tagCollection[i]);
       
    }
}

$('.banner').on('click', '.tag', function(event){
    const apiKey = 'Iphjhlb4smlWWHFJOBbepwW6q4Q5V71H'
    const serch = $(event.target).data('tag');
    const limit = 10;
    const builtUrl = `https://api.giphy.com/v1/gifs/search?q=${serch}&api_key=${apiKey}&limit=${limit}`;
    $.ajax({
        url: builtUrl,
        method: 'GET'
    }).then(function(data){
        for(let i = 0; i < data.data.length; i++){
            $('.img-area').append(`<img width="300"  src='${data.data[i].images.original_still.url}'>`);
        }
       
    })  
})



buildView();