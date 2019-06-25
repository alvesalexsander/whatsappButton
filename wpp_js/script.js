function sendMessage(){
    var userInput = document.getElementById("message").value;
    userInput = encodeURIComponent(userInput.trim());
    var apiURL = "https://api.whatsapp.com/send?phone=5522997055388&text=" + userInput;
    window.open(apiURL, "height=200", "width=200");
    document.getElementById("message").value = "";
    return false;
}