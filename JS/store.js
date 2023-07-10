function listStoreItems() {
    var storeItemsElement = document.getElementsByClassName('store-items')[0];
    var storeItemsHTML = '';
    storeItems.forEach(function (product) {
        storeItemsHTML += `
            <div class="store-item">
                <div class="image" style="background-image: url('../Images/products/${product.id}.jpg')"></div>
                <div class="details">
                    <div class="description">
                        ${product.name}
                    </div>
                    <div class="price">
                        ${product.price} LKR
                    </div>
                    <button class="add-to-cart ${product.active ? '' : 'inactive'}" ${product.active ? `onclick="addToCart(${product.id})"` : ''} id="${product.id}">
                        ${product.active ? 'Add To Cart' : 'Added to Cart'}
                    </button>
                </div>
            </div>
            `
    })
    storeItemsElement.innerHTML = storeItemsHTML
}
listStoreItems()

function listCartItems() {
    var cartItemsElement = document.getElementsByClassName('cart-items')[0];
    var cartItemsHTML = '';
    cartItems.forEach(function (product) {
        cartItemsHTML += `
                <div class="store-item">
                    <div class="row">
                        <img src="../images/products/${product.id}.jpg" alt="" class="image">
                        <div class="description">${product.name}</div>
                        <button class="close-button" onclick="removeFromCart(${product.id})"/>✖</button>
                    </div>
                    <div class="row">
                        <div class="quantity">
                        <div class="label">Qty</div>
                            <input type="text" class="quantity" value="${product.quantity}" onchange="changeQuantity(${product.id}, event.target.value)"/>
                        </div>
                        <div class="price">${product.price} LKR</div>
                    </div>
                </div>
            `
    })
    cartItemsElement.innerHTML = cartItemsHTML
}

function showTotal(){
    var costElement = document.getElementsByClassName('cost')[0]
    var cost = 0
    cartItems.forEach(function(cartItem){
        cost += cartItem.price * cartItem.quantity
    })
    costElement.innerHTML = cost + 'LKR'
}

function updateUI(){
    listCartItems();
    listStoreItems();
    showTotal();
}

function addToCart(id){
    var storeItem = storeItems[id]
    storeItem.active = 0
    cartItems.push(storeItem)
    updateUI()
}

function removeFromCart(id){
    storeItems[id].active = 1
    cartItems.splice(cartItems.findIndex(e => e.id == id), 1)
    updateUI()
}

function changeQuantity(id, quantity){
    cartItems[cartItems.findIndex(e => e.id == id)].quantity = quantity
    updateUI()
}

function validateForm(){
    var firstName = document.getElementById('firstName')
    var lastName = document.getElementById('lastName')
    var companyName = document.getElementById('companyName')
    var country = document.getElementById('country')
    var address1 = document.getElementById('address1')
    var address2 = document.getElementById('address2')
    var city = document.getElementById('city')
    var state = document.getElementById('state')
    var zip = document.getElementById('zip')
    
    var fields = [firstName, lastName, companyName, country, address1, address2, city, state, zip]

    console.log(fields)

    for(var i = 0; i < fields.length; i++){
        if(fields[i].value == ''){
            fields[i].style.borderBottom = '3px solid red'
            alert('Fill all the fields to continue !');
            return false;
        }else{
            fields[i].style.borderBottom = '2px solid grey'
        }
    }
    return true;
}

function placeOrder(){
    console.log('jflsdkjf')
    if(!validateForm()){
        console.log('sjdlkfj')
    }else{
        if(cartItems.length > 0){
            var firstName = document.getElementById('firstName')

            var message = 'Dear '
            message += firstName.value

            var total = 0;
            
            for(var i=0; i<cartItems.length; i++){
                message += '\n You have ordered ' + cartItems[i].quantity + ' ' + cartItems[i].name + ' at a cost of ' + cartItems[i].price + ' each , '
                total += cartItems[i].quantity * cartItems[i].price
            }

            message = message.substring(0, message.length-3)

            message += '\n Your total bill is ' + total

            alert(message)

        }else{
            alert('Please select some items.')
        }
    }
}
