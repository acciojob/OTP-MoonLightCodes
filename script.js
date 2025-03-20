//your JS code here. If required. 
const con = document.querySelector('#cont');
const inputs = document.querySelectorAll('#cont input'); 
window.onload = () => {
    //inputs[0].focus();
};
con.addEventListener('input',(e)=>{
	
	if(!isNaN(parseInt(e.target.value)&&parseInt(e.target.dataset.ind)<inputs.length-1)){
		inputs[parseInt(e.target.dataset.ind)+1].focus();
	}else if(isNaN(e.target.value)){
		e.target.value='';
	}
});
con.addEventListener('keydown',(e)=>{
	if(e.key==='Backspace'&&parseInt(e.target.dataset.ind)>=0){
		e.target.value='';
		e.preventDefault();
		inputs[parseInt(e.target.dataset.ind)-1].focus();
		
	}
	
})