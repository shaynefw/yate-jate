const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, 'dist', 'manifest.json');

fs.readFile(manifestPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading manifest.json:', err);
    return;
  }

  const manifest = JSON.parse(data);
  manifest.icons.forEach((icon) => {
    icon.src = icon.src.replace('auto/', '');
  });

  fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing updated manifest.json:', writeErr);
    } else {
        console.log('\x1b[32m%s\x1b[0m', 'Manifest.json updated successfully');
    }
  });
});
