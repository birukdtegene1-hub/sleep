// animate percentage of users
const $percentUsers = $('#percent-users');
let german = parseFloat($percentUsers.text(),10);
$('.btn-wrapper-disabler').click(function(){ 
  if(!$(this).hasClass('inactive')){
	setTimeout(()=>{
    let total = 0;
    $('.graph-fill').each(function(i, lang){
    		const height = $(lang)[0].style.height;
        parseFloat(height,10) ? total += parseFloat(height,10) : total += 0;
    });
    total += german;
    const start = parseFloat($percentUsers.text(),10);
    const range = total - start;
    const duration = range < 10 ? 500 : range < 20 ? 1000 : 2000;
    animateValue('percent-users', start, total, duration);
    },400);
    $(this).addClass('inactive');
  }  
});

function animateValue(id, start, end, duration) {
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range)); 
    const obj = document.getElementById(id);
    const timer = setInterval(function() {
        //current += increment;
        current += (end - current < increment? end - current : increment);
        obj.textContent = current.toFixed(1) + '%';
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}