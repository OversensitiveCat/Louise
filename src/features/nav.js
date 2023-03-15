import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { lenis } from './lenis'

gsap.registerPlugin(ScrollTrigger)

const nav = (function () {
  const navLinks = gsap.utils.toArray('.nav-name')
  const navLinksRight = [navLinks[0], navLinks[2]]
  const navLinksLeft = [navLinks[1], navLinks[3]]

  navLinksRight.forEach((link) => {
    gsap.from(link, {
      scrollTrigger: {
        trigger: link,
        start: 'top 95%',
        end: 'top 50%',
        scrub: true,
      },
      xPercent: 500,
      duration: 2,
    })
  })
  navLinksLeft.forEach((link) => {
    gsap.from(link, {
      scrollTrigger: {
        start: 'top 95%',
        end: 'top 50%',
        trigger: link,
        scrub: true,
      },
      xPercent: -500,
      duration: 2,
    })
  })

  navLinks[3].addEventListener('click', () => {
    lenis.scrollTo('bottom', {
      duration: 3,
      easing: (t) => {
        return -(Math.cos(Math.PI * t) - 1) / 2
      },
    })
  })
})()

export default nav
