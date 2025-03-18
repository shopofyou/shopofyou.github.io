this.getAllProduk();

$('#produkname').on('keyup', function(e){
    if(e.keyCode == 13)
    {        
        let namaproduk = $('#produkname').val(); 
         $.getJSON('https://shopofyou.github.io/data.json', function(data){
            let produk = data.produk;
            let content = '';

            $('#daftar-produk').html(content);

            $.each(produk, function(i, data){                
                var S = data.namaproduk.toLowerCase();
                if(S.includes(namaproduk.toLowerCase())){
                    $('#daftar-produk').append('<div class="col-md-4 mb-3"><div class="card" style="width: 18rem;"><img src="img/'+ data.gambar +'" class="card-img-top" height="300px"><div class="card-body"><h5 class="card-title">'+ data.namaproduk +'</h5><p class="card-text">Harga Rp. '+ data.harga +'</p><a href="#" class="btn btn-primary">Beli</a></div></div></div> ');
                }
            });
        });
        $('#produkname').val("");
    }
})


$('#btn-refresh').on('click', function(){
    getAllProduk();
});

function getAllProduk(){
    $('#daftar-produk').html('');
    $.getJSON('https://shopofyou.github.io/data.json', function(data){
        let produk = data.produk;

        $.each(produk, function(i, data){
            $('#daftar-produk').append('<div class="col-md-4 mb-3"><div class="card" style="width: 18rem;"><img src="img/'+ data.gambar +'" class="card-img-top" height="300px"><div class="card-body"><h5 class="card-title">'+ data.namaproduk +'</h5><p class="card-text">Harga Rp. '+ data.harga +'</p><a href="#" class="btn btn-primary">Beli</a></div></div></div> ');
        })
    });
}
