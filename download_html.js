const https = require('https');
const fs = require('fs');

https.get('https://manoharmony.com/preventive_services.php', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => fs.writeFileSync('prev.html', data));
});

https.get('https://manoharmony.com/reatment_services.php', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => fs.writeFileSync('treat.html', data));
});
