//LISTEN FOR SUBMIT
document.getElementById('loan-form').addEventListener('submit', function(e){
   //HIDE RESULT
   document.querySelector('#results').style.display = 'none';

   //SHOW LOADER 
   document.querySelector('#loading').style.display = 'block';

   setTimeout(calculateResults, 2000);
    e.preventDefault();
});



//CALCULATE RESULTS
function calculateResults(){

//UI VARS
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');


const principal = parseFloat(amount.value)
const calculatedInterest = parseFloat(interest.value) / 100 / 12;
const calculatePayments = parseFloat(years.value) * 12;


//COMPUTE MONTHLY PAYMENT
const x = Math.pow(1 + calculatedInterest, calculatePayments);
const monthly = (principal*x*calculatedInterest)/(x-1);

if(isFinite(monthly)){
  monthlyPayment.value = monthly.toFixed(2);
  totalPayment.value = (monthly * calculatePayments).toFixed(2);
  totalInterest.value = ((monthly * calculatePayments)-principal).toFixed(2);

//SHOW RESULTS
  document.querySelector('#results').style.display = 'block';

  //HIDE LOADER
  document.querySelector('#loading').style.display = 'none';

} else{
  showError('Please Check Your numbers')
}

    
}

//SHOW ERROR
function showError(error){
    //SHOW RESULTS
  document.querySelector('#results').style.display = 'none';

  //HIDE LOADER
  document.querySelector('#loading').style.display = 'none';
  


    //CREATE A DIV
    const errorDiv = document.createElement('div');

    //GET ELEMENTS
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //ADD CLASS
    errorDiv.className = 'alert alert-danger';

    //CREATE TEXT NODE AND APPEND TO DIV
    errorDiv.appendChild(document.createTextNode(error));

    //INSERT ERROR ABOVE HEADING
    card.insertBefore(errorDiv, heading);

    //CLEAR ERROR AFTER 3 SECONDS\
    setTimeout(clearError, 3000);
}

//CLEAR ERROR
function clearError(){
    document.querySelector('.alert').remove();
}

