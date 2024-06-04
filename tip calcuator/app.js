function calculate() {
    let bill = parseFloat(document.getElementById("bill").value);
    let tip = parseFloat(document.getElementById("tip").value);
    
    if (isNaN(bill) || isNaN(tip)) {
        Swal.fire({
            icon: "error",
            title: "Error Error!",
            text: "Please Enter Fields Must!",
          });
    }
    
    let tipAmount = bill * (tip / 100);
    let totalBill = bill + tipAmount;
    document.getElementById("total").innerText = totalBill.toFixed(2);
}
