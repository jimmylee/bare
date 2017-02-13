const fs = require('fs');

const src = '../client';
const dist = 'node_modules/client';

fs.exists(dist, function (exists) {
  if (!exists) {
      fs.symlinkSync(src, dist, 'dir');
  }
});
