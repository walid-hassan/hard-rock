var request = new XMLHttpRequest();

request.open('GET', 'https://api.lyrics.ovh/v1/artist/title');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();