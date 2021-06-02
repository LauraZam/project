function okBtnClick() {
    let data = {
        price: document.getElementById('price').value
    }
    $.ajax({
        url: 'http://localhost:8080/',
        method: 'post',
        data: JSON.stringify(data),
        success: function (response) {
            let Response = JSON.parse(response)
            console.log(Response);
            for (let i = 0; i < Response.length; i++) {
                $('.cards').append(`
                <div class='card'>
                    <p>Model: ${Response[i]['model']}</p>
                    <p>Color: ${Response[i]['color']}</p>
                    <p>Price: ${Response[i]['price']}</p>
                </div>
            `)
                
            }
            
        },
        error: function () {
            console.log('Something went wrong!');
        }
    }) 
}