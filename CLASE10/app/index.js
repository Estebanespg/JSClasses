let form = document.getElementById('product-form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let year = document.getElementById('year').value;

    //console.log(name, price, year);
    //console.log(new Product(name, price, year));
    let insert = new UI();
    insert.addProduct(new Product(name, price, year));
    insert.clearProduct();
})

class Product{
    constructor( name, price, year ){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI{
    addProduct(product){
        let productList = document.getElementById('product-list');
        let element = document.createElement('div');
        element.innerHTML = `<div class='card text-center mb-4'>
                                <div class='card-body row'>
                                    <div class='col-md-10'>
                                        <strong>Name:</strong> ${product.name}<br>
                                        <strong> Price:</strong> ${product.price}<br>
                                        <strong> Year:</strong> ${product.year}
                                    </div>
                                    <div class='col-md-2'>
                                        <a href='#' class='btn btn-danger' name='delete'>Delete🗑️</a>
                                    </div>
                                </div>
                            </div>`;
        productList.appendChild(element);
    }
    deleteProduct(){

    }
    clearProduct(){
        document.getElementById('product-form').reset();
    }
    showMessage(){

    }
}