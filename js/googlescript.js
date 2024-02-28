const scriptURL = 'https://script.google.com/macros/s/AKfycbyPQ00RK3Fc41uIIBqNXGgyg5GeC2ohOhHTOvx7v7kAWqXz24cuXlSbY7ht4JOxZKHevg/exec'
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Thank you! your form is submitted successfully." ))
.then(() => { window.location.reload (); })
.catch(error => console.error('Error!', error.message))
})