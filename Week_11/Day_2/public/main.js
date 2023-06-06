function alarm_func(){
    alert('Hello From Javascript')
}



const div =  document.getElementById('submit')
div.addEventListener("click", alarm_func);

module.exports = {
    div
}