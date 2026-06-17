class AgeCalculator {
    constructor() {
        this.inputAge = document.getElementById('label');
        this.calculateBtn = document.getElementById('calculate');
        this.result = document.getElementById('result');

        this.initEvents();
    }

    initEvents() {
        this.calculateBtn.addEventListener('click', (e) => {
            this.processAge(e);
        });
    }

    processAge(e) {
        const birthValue = this.inputAge.value;
        
        if (birthValue === '') {
            this.result.textContent = 'دخل تاريخ ميلادك الأول';
            this.result.style.color = "red";
            this.result.style.display = "block";
            return;
        }

        const birthDate = new Date(birthValue);  // تاريخ الميلاد
        const today = new Date();              // تاريخ اليوم
      
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += previousMonth.getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        
        this.result.style.color = "green"; 
        this.result.style.display = "block";
      this.result.innerHTML = `
    عمرك الحالي: <br>
    <strong>${years}</strong> سنة، و <strong>${months}</strong> شهر، و <strong>${days}</strong> يوم.
`;
this.result.style.textAlign = "center";
this.result.style.direction = "rtl"; // التعديل السحري هنا عشان يظبط اتجاه العربي
this.result.style.lineHeight = "1.6"; // ضفتلك دي عشان تدي مسافة مريحة بين السطرين
}
}

const calculator = new AgeCalculator();