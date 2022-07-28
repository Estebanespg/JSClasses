let form = document.getElementById('product-form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let year = document.getElementById('year').value;
    
    let insert = new UI();
    if( name === "" || price === "" || year === "" ){
        document.getElementById("msg").innerHTML = insert.showMessage('Warning', 'Empty fields', "warning");
        return;
    }
    //console.log(name, price, year);
    //console.log(new Product(name, price, year));
    insert.addProduct(new Product(name, price, year));
    document.getElementById("msg").innerHTML = insert.showMessage('Success', 'Product Added', "success");
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
    deleteProduct(product){
        if( product.name == 'delete' ){
            product.parentElement.parentElement.parentElement.parentElement.remove();
            let insert = new UI();
            document.getElementById("msg").innerHTML = insert.showMessage('Error', 'Product Deleted!', "danger");
        }
    }
    clearProduct(){
        document.getElementById('product-form').reset();
    }
    showMessage(type, msg, alert){
        let message = `
            <div class='container' id='msremo'>
                <div class='alert alert-${ alert } alert-dismissible fade show mt-2' role='alert'>
                    <strong>${ type } Message! </strong> ${ msg }
                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
                        <span aria-hidden='true'>&times;</span>
                    </button>
                </div>
            </div>`;
        setTimeout(()=>{
            document.getElementById('msremo').remove();
        },3000);
        return message;
    }
}

let lista = document.getElementById('product-list');
lista.addEventListener('click', (e) => {
    let insert = new UI();
    insert.deleteProduct(e.target);
})