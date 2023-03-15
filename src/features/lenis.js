import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  duration: 1.75,
  wheelMultiplier: 1.35,
  touchMultiplier: 3,
})

const setLenis = () => {
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}

export { lenis, setLenis }
