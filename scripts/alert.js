function showDialog(e) {
    e.preventDefault();
    let inputValue = document.getElementById("email").value;
    alert("Subscribed with email: " + inputValue);
}