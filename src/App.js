import './App.css';
function App() {
  return (
    <div>
      <div id="navbar">
	<div className="navitem">Shopping Cart</div>
	<div className="navitem">
		<div>
			<input type="text" name="" placeholder="Search" id="sa"></input>
			<button id="se">Go</button>
		</div>
	</div>
</div>
<div id="gholder">
	<div id="gen"><button>All</button></div>
	<div id="gen"><button>Male</button></div>
	<div id="gen"><button>Female</button></div>
	<div id="gen"><button>Kids</button></div>
</div>
<div id="itemholder">
	<div className="item">
		<div id="img"></div>
		<div id="info">
			<span id="name">MARVEl SP (XL)</span>
		</div>
		<div><span id="price">$10</span><button id="atc" onClick={atcart}>Add to cart</button></div>
	</div>
	<div className="item"><div id="img"></div>
		<div id="info">
			<span id="name">MARVEl SP (XL)</span>
		</div>
		<div><span id="price">$10</span><button id="atc" onClick={atcart}>Add to cart</button></div></div>
	<div className="item"><div id="img"></div>
		<div id="info">
			<span id="name">MARVEl SP (XL)</span>
		</div>
		<div><span id="price">$10</span><button id="atc" onClick={atcart}>Add to cart</button></div></div>
	<div className="item"><div id="img"></div>
		<div id="info">
			<span id="name">MARVEl SP (XL)</span>
		</div>
		<div><span id="price">$10</span><button id="atc" onClick={atcart}>Add to cart</button></div></div>
	<div className="item"><div id="img"></div>
		<div id="info">
			<span id="name">MARVEl SP (XL)</span>
		</div>
		<div><span id="price">$10</span><button id="atc" onClick={atcart}>Add to cart</button></div></div>
	<div className="item"><div id="img"></div>
		<div id="info">
			<span id="name">MARVEl SP (XL)</span>
		</div>
		<div><span id="price">$10</span><button id="atc" onClick={atcart}>Add to cart</button></div></div>
</div>
<div id="cart">
  <div id="infodiv">
	<div id="citem">Cart is empty</div>
  </div>
  <button className="com-btn" id="clrs" onClick={clearC}>Clear Cart</button>
	<button id="clcart" className="com-btn" onClick={clsc}>X</button>
	<button className="com-btn" id="finpay" onClick={makeP}>Checkout</button>
</div>
<button id="shc" className="com-btn" onClick={show}>CART</button>
<div id="added">ADDED TO CART</div>
    </div>
  );
}

export default App;

function show(){
 document.querySelector("#cart").style.display="flex";
}

function clsc(){
  document.querySelector("#cart").style.display="none";
}
function atcart(){
  if('<div id="citem">Cart is empty</div>'===document.querySelector("#infodiv").innerHTML) {document.querySelector("#infodiv").innerHTML="";//document.querySelector("#infodiv").style.overflowY='scroll';
}
  document.querySelector("#infodiv").innerHTML+='<div id="cout"><div id="img1"></div><span id="name1">MARVEL G6 [XL]</span><select name="Select size"><option disabled selected>Select size</option><option>S</option><option>M</option><option>L</option><option>XL</option></select><select><option disabled selected>Quan</option><option>1</option><option>2</option><option>3</option><option>4</option></select></div>'
  setTimeout(() => {
    document.querySelector("#added").style.display="block"
  }, 500);
  setTimeout(() => {
    document.querySelector("#added").style.display="none"
  }, 3000);
}

function clearC(){
  if('<div id="citem">Cart is empty</div>'===document.querySelector("#infodiv").innerHTML) alert("Cart is already empty");
  else
    document.querySelector("#infodiv").innerHTML='<div id="citem">Cart is empty</div>';
}

function makeP(){
  if('<div id="citem">Cart is empty</div>'===document.querySelector("#infodiv").innerHTML) alert("Cart is empty");
  else{
    alert("Purchase Successfull. Thank You");window.location.reload();
  }

}
