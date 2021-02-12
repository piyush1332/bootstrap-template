let closeMobileMenu = () => {
	let mobileMenu = document.getElementById('mobile_menu');
	mobileMenu.style.display = mobileMenu.style.display == 'block' ? 'none' : 'block';
}

let mobileMenuHandler = (ev) => {
	if(document.getElementById('mobile_menu').style.display == 'block')
		document.getElementById('mobile_menu').style.display =  ev.srcElement.innerWidth >= 992 ? 'none' : 'block' ;
}