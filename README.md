# cube-cube [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A lazy voxel mesher, for those times when you just want a bunch of cubes on
your screen. Considerably slower, so use sparingly. Note that in many cases
a culled or greedy mesher is preferable, see
[this article](http://0fps.net/2012/07/07/meshing-minecraft-part-2/) for more
info.

## Usage

[![NPM](https://nodei.co/npm/cube-cube.png)](https://nodei.co/npm/cube-cube/)

### cubes = cubecube(w, h, d, filter)

Where:

* `w` is the number of cubes to generate across the mesh's width.
* `h` is the number of cubes to generate across the mesh's height.
* `d` is the number of cubes to generate across the mesh's depth.
* `f(x, y, z)` A function you can use to exclude specific cubes from the final
  mesh. Optional.

Returns an array of [simplicial-complexes](http://github.com/mikolalysenko/simplicial-complex),
one for each cube generated. These can then be combined into a single mesh
using [mesh-combine](http://github.com/hughsk/mesh-combine). Note that each
cube has additional properties other then `positions` and `cells` that you could
use to transform the mesh:

* `centroid`: the center position of the cube.
* `index`: the `[x, y, z]` position of the cube within the larger cube.

## See Also

* [voxel](http://github.com/maxogden/voxel)
* [greedy-mesher](http://github.com/mikolalysenko/greedy-mesher)
* [mesh-combine](http://github.com/hughsk/mesh-combine)

## License

MIT. See [LICENSE.md](http://github.com/hughsk/cube-cube/blob/master/LICENSE.md) for details.
