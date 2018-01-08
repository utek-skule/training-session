let terraingenerator = require('fractal-terrain-generator')

let terrain = terraingenerator.generateTerrain(100, 100, 1.0);
for(let i = 0; i < 100; i++) {
  for(let j = 0; j < 100; j++) {
    process.stdout.write(terrain[i][j] + ',');
  }
  process.stdout.write('\n');
}
