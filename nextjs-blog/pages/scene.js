export function createScene(renderer) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.02,
    20
  );

  // Render loop
  function renderLoop(timestamp, frame) {
    // Only render content if XR view is presenting.
    if (renderer.xr.isPresenting) {
      renderer.render(scene, camera);
    }
  }

  renderer.setAnimationLoop(renderLoop);
}
