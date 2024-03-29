$(document).ready(function(){
  // smooth scroll
$('.nav-item a, .banner-link, #back-to-top').click(function(link){
  link.preventDefault();

  let target = $(this).attr('href');

  $('html, body').stop().animate({
    scrollTop: $(target).offset().top - 25
  }, 3000);
})

//back to top
$(window).scroll(function(){
  let position = $(this).scrollTop();
   if(position >= 718){
     $('#back-to-top').addClass('scrollTop');
   }
   else {
    $('#back-to-top').removeClass('scrollTop');    
   }
});
});

// Show cart
document.getElementById('cart-info').addEventListener('click', function(){
  const cart = document.getElementById('cart');
  cart.classList.toggle('show-cart');
});

/*(function(){
  const cartInfo = document.getElementById('cart-info');
  const cart = document.getElementById('cart');

  cartInfo.addEventListener('click', function(){
    cart.classList.toggle('show-cart');
  });
})();*/

// add items to the cart
(function(){
  const cartBtn = document.querySelectorAll(".store-item-icon");
  cartBtn.forEach(function(btn) {
    btn.addEventListener("click", function(event){
   
     if (event.target.parentElement.classList.contains("store-item-icon")){
       const fullPath = event.target.parentElement.previousElementSibling.src;
       const pos = fullPath.indexOf("img") + 3;
       const partPath = fullPath.slice(pos);
       

       const item = {};
       item.img = `img-cart${partPath}`;

       const name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
       item.name = name;
       const price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
       
       const finalPrice =price.slice(1).trim();

       item.price = finalPrice;

     

       const cartItem = document.createElement('div');
       cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3');
       cartItem.innerHTML = `<img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
       <div class="item-text">
         <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
           <span>$</span>
           <span id="cart-item-price" class="cart-item-price mb-0">${item.price}</span>
       </div>
       <a href="" id="cart-item-remove" class="cart-item-remove">
         <i class="fas fa-trash"></i>
       </a>
       </div>
       `;
       // select cart
       const cart = document.getElementById('cart');
       const total = document.querySelector('.cart-total-container');

       cart.insertBefore(cartItem, total);
       
       let itemImg = event.target.parentElement.previousElementSibling;
       itemImg.classList.add('opacity');
       showTotals();
     }
    });
  });
  // show totals
  function showTotals() {
    const total = [];
    const items = document.querySelectorAll('.cart-item-price');

    items.forEach(function(item){
      total.push(parseFloat(item.textContent));
    });

    const totalMoney = total.reduce(function(total, item){
       total += item;
       return total;
    },0);
   const finalMoney = totalMoney.toFixed(2);
    
  document.getElementById('cart-total').textContent = finalMoney;
  document.querySelector('.item-total').textContent = finalMoney;
  document.getElementById('item-count').textContent = total.length;
  
  }
})();

