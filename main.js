class AgeCalculator{
    constructor(){
        this.inputAge =document.getElementById('label');
        this.calculateBtn =document.getElementById('calculate');
        this.result =document.getElementById('result');

        this.initEvents();
    }
    initEvents(e){
        this.calculateBtn.addEventListener('click',(e)=>{
            this.processAge(e);
        });
    }

    processAge(e){
        const birthValue=this.inputAge.value;
        if(birthValue === '')
        {
            this.result.textContent='دخل تاريخ ميلادك الاول ';
            this.result.style.color="red";
            this.result.style.display="block";
            return;
        }
        this.result.style.display="none";
        const birthDate = new Date(birthValue);  //  تاريخ الميلاد حولناه لتاريخ حقيقي
        const today = new Date ;    //  تاريخ النهارده 
      
       let years = today.getFullYear() -birthDate.getFullYear();
       let months = today.getMonth() - birthDate.getMonth();
       let days = today.getDate() - birthDate.getDate();

       if(months < 0 || (months === 0 && days<0)){
        years--;
        months+=12;
       }
       if(days<0){
        months--;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
       }

       this.result.innerHTML =`
       عمرك :
       ${years}سنه و / / ${months}شهرو${days} يوم
       `;
       this.result.style.display="block";
    }

}
const calculator = new AgeCalculator();