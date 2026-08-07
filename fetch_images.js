const https = require('https');
const fs = require('fs');

function fetchImages(url, file) {
  https.get(url, (res) => {
    let data = '';
    res.on('data', d => data += d);
    res.on('end', () => {
       const imgRegex = /<img[^>]+src="([^">]+)"/g;
       const linksRegex = /<a[^>]+href="([^">]+)"[^>]*>\s*<img[^>]+src="([^">]+)"/g;
       let matches = [];
       let match;
       while ((match = imgRegex.exec(data)) !== null) {
           matches.push(match[1]);
       }
       
       let services = [];
       const textRegex = /<h3><a href="[^"]+">([^<]+)<\/a><\/h3>/g;
       
       fs.writeFileSync(file, JSON.stringify({images: matches, rawSample: data.slice(0, 1000)}), 'utf8');
    });
  });
}

fetchImages('https://manoharmony.com/preventive_services.php', 'prev_imgs.json');
fetchImages('https://manoharmony.com/reatment_services.php', 'treat_imgs.json');
