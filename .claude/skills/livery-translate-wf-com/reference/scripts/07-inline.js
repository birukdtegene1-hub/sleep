Weglot.initialize({
	api_key: 'wg_98ccb50c821e0e8d28b99f88707028ac0'
});

Weglot.on('initialized', ()=>{
	const currentLang = Weglot.getCurrentLang();
  const $wrapper = document.querySelector('.wg-element-wrapper-2.sw4'); 
 	if($wrapper.querySelector('.w-dropdown-toggle').getAttribute('lang') !== currentLang){
  	// swap txt
		const $activeLangLink = $wrapper.querySelector('.w-dropdown-link[lang='+currentLang+']');
    updateDropdown($activeLangLink);
  }
});

document.querySelectorAll('.wg-element-wrapper-2.sw4 [lang]:not(.w-dropdown-toggle)').forEach((link)=>{
		link.addEventListener('click', function(e){   
    	e.preventDefault();
    	Weglot.switchTo(this.getAttribute('lang'));
      updateDropdown(this);    
		});
});

function updateDropdown(currentLink){
	// swap txt
	const $toggle = currentLink.closest('.wg-element-wrapper-2').querySelector('.w-dropdown-toggle');
  const toggleTxt = $toggle.textContent; 
  const activeLangLinkTxt = currentLink.textContent;
  $toggle.textContent = activeLangLinkTxt; 
  currentLink.textContent = toggleTxt;
  // swap lang attr   
  const lang = currentLink.getAttribute('lang');
	const toggleLang = $toggle.getAttribute('lang');
	$toggle.setAttribute('lang', lang);
	currentLink.setAttribute('lang', toggleLang);
}