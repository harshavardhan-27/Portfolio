const https = require('https');
const urls = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Rishikesh_panorama.jpg/800px-Rishikesh_panorama.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Stone_Chariot_at_Vitthala_Temple_in_Hampi.jpg/800px-Stone_Chariot_at_Vitthala_Temple_in_Hampi.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Araku_Valley.jpg/800px-Araku_Valley.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tirumala_090615.jpg/800px-Tirumala_090615.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Annamalaiyar_Temple_View.jpg/800px-Annamalaiyar_Temple_View.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Laxman_Jhula.jpg/800px-Laxman_Jhula.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tourists_at_Araku_valley%2C_Andhra_Pradesh.jpg/800px-Tourists_at_Araku_valley%2C_Andhra_Pradesh.jpg"
];

urls.forEach(u => {
  https.get(u, { headers: { 'User-Agent': 'NodeJS/1.0' } }, (res) => {
    console.log(res.statusCode + " " + u);
  }).on('error', (e) => {
    console.log(e.message + " " + u);
  });
});
