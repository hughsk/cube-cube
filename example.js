var shell    = require('mesh-viewer')()
var unindex  = require('unindex-mesh')
var reindex  = require('mesh-reindex')
var combine  = require('mesh-combine')
var cubecube = require('./')
var mesh

shell.on('viewer-init', function() {
  var cubes = cubecube(24, 24, 24, sphere)
  var combined = combine(cubes)
  var flat = reindex(unindex(combined))

  mesh = shell.createMesh(flat)
})

shell.on('gl-render', function() {
  mesh.draw()
})

function sphere(x, y, z) {
  x -= 12
  y -= 12
  z -= 12
  return x*x + y*y + z*z < 12*12
}
