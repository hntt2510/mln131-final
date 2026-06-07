// Module-level scroll state shared between Lenis (smooth scroll) and the
// react-three-fiber render loop. Kept outside React state on purpose so the
// 3D scene can read it every frame without triggering re-renders.

export const scrollState = {
  progress: 0, // 0..1 across the whole page
  velocity: 0,
  mouseX: 0, // -1..1
  mouseY: 0, // -1..1
}

if (typeof window !== 'undefined') {
  window.addEventListener('pointermove', (e) => {
    scrollState.mouseX = (e.clientX / window.innerWidth) * 2 - 1
    scrollState.mouseY = (e.clientY / window.innerHeight) * 2 - 1
  })
}
