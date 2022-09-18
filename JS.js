
    const calculator = document.querySelector('.calculator');
    const result = document.querySelector('#result');

    calculator.addEventListener('click', function(event) {
        if(!event.target.classList.contains('calculator-btn')) return;

        const value = event.target.innerText;

            switch(value) {
                case 'C':
                    result.innerText = '';
                    break;

                    case '=':
                        //защита eval
            if(result.innerText.search(/[^0-9*/+-.]/mi) != -1) return;

                result.innerText = eval(result.innerText).toFixed(0);
                        break;

                        default:
                            result.innerText += value;
                }

                
       
    });