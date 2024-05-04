function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
  
    let greeting;
  
    if (hour < 12) {
      greeting = 'Selamat Pagi, Nina!';
    } else if (hour < 18) {
      greeting = 'Selamat Siang, Nina!';
    } else {
      greeting = 'Selamat Malam, Nina!';
    }
    document.getElementById('greeting').textContent = greeting;
  }
  
  function updateDateTime() { //Update waktu dan tanggal
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDateTime = now.toLocaleDateString('en-US', options);
  
    document.getElementById('datetime').textContent = formattedDateTime;
  }
  
  setInterval(() => {
    updateGreeting();
    updateDateTime();
  }, 1000);
  
  updateGreeting();
  updateDateTime();
  