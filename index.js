var prism  = require('rectangular-prism')
var truthy = function() { return true }

module.exports = cubecube

function cubecube(w, h, d, filter) {
  filter = filter || truthy

  var size  = [1/w, 1/h, 1/d]
  var cubes = []

  for (var x = 0; x < w; x++)
  for (var y = 0; y < h; y++)
  for (var z = 0; z < d; z++) {
    if (filter(x, y, z)) {
      var cube = prism(size, [x/w, y/h, z/d])

      cubes.push(cube)
      cube.centroid = [(x+0.5)/w, (y+0.5)/h, (z+0.5)/d]
      cube.index = [x, y, z]
    }
  }

  return cubes
}
