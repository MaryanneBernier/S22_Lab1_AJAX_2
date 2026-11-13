let apikey = "AIzaSyByJiL407voPRmQyNAYZKWxBC5FuIlBIdQ";
let blogId = "8698899267502010836";
let MAUVAISblogId = blogId;
let html = "";

$.support.cors = true;
$(document).ready(function() {
    let url = "https://www.googleapis.com/blogger/v3/blogs/" + MAUVAISblogId + "/posts?key=" + apikey;
    let success = function (data) {
        
        //console.log(data)
        $.each(data.items, function (index, value) {
            let publishedDate = new Date(value.published);
            html += '<h3><a href="' + value.url + '">' + value.title + '</a></h3>'
                            + value.kind
                    + '<br>Publié par <a href="' + value.author.url + '">' + value.author.displayName + '</a>'
                /*Ajoutez les items supplémentaires ici*/
                + '<br>Date de publication: ' + publishedDate.toLocaleDateString()
                 + '<br>Réponses: ' + value.replies.totalItems;

                    ;
        });
        $("#posts").html(html);
    };
    
    $.get(url, null, success)
        .fail(function (error) {
    console.log(error.responseText);
    alert(error.responseText);
;
});

})
