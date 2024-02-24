import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

// Group
const group = new THREE.Group()
group.position.y = 0
group.scale.y = 2
group.rotation.y = 0.5
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true})
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true})
)
cube2.position.set(-1,0,0.5)
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0xf00fff, wireframe: true})
)
cube3.position.set(1,0,-0.5)
group.add(cube3)
/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.x = 1
// camera.position.y = 1
camera.position.z = 3
scene.add(camera)

// camera.lookAt(new THREE.Vector3(0,0,-2))
// camera.lookAt(mesh.position)

// Distance between mesh and the cube
// console.log(mesh.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

/*
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Position
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1

// postion.set can set all x,y, and z at once
// position.set in order
                // x, y, z
mesh.position.set(0.7, -0.6, 1)

// Scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
mesh.scale.set(2, 0.5, 0.5)

// Rotation
// Pi = half a rotation
// 2Pi = a full rotation
mesh.rotation.reorder('YXZ')
mesh.rotation.x = Math.PI / 4
mesh.rotation.y = Math.PI
mesh.rotation.z = Math.PI
//^^^
// Warning //
// three-gimbal mechanism, gimbal lock occurs when the axes of two of the gimbals are driven into a parallel configuration, "locking" the system into rotation in a degenerate two-dimensional space.
// FPS games would need you to do y and the x

// quaternion


// Normalize will take the vector length and reduce it so it's 1
// mesh.position.normalize()

// Distance betweeen the postion and the center of the screen
// console.log(mesh.position.length())

// Axes helper
// can add numbers into the () as a multiplyer of length of the helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)
*/