const btns=document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener('click',function (){
        this.classList.toggle('active');
        const description = this.nextElementSibling;
        const plusIcon= this.querySelector('.plus');
        const minusIcon= this.querySelector('.minus');

        if(description.style.maxHeight){
            description.style.maxHeight=null;
            plusIcon.style.display='block';
            minusIcon.style.display='none';

        }else{
            description.style.maxHeight=description.scrollHeight + 'px'
            plusIcon.style.display='none';
            minusIcon.style.display='block';
        }
    })
})