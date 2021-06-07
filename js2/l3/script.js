let input = $('#input').val()
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://genius.p.rapidapi.com/search?q=Kendrick%20Lamar" ,
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a00298694fmshd82641a2d3cd271p1bc6f3jsne43db3ac7114",
		"x-rapidapi-host": "genius.p.rapidapi.com"
	}
};
$('#btn').click(function () {
    
    $.ajax(settings).done(function (response) {
        // console.log(response);
        for (let i = 0; i < response.length; i++) {
            console.log(response['response']['hits']);
            $('#cards').append(`
            <div class="card">
                <img src="${response[i]['hits']['result']['song_art_image_url']}" alt="">
                <h3>${response[i]['hits']['result']['title']}</h3>
                <p>${response[i]['hits']['result']['primary_artist']['name']}</p>
                <button>MORE</button>
            </div>
        `)
        }
        
        
    });
})
