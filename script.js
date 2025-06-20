document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    const whatsappUrl = `https://wa.me/5551989727254?text=Olá, sou ${encodeURIComponent(name)}. ${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
});