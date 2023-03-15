import { gsap } from 'gsap'
import SplitType from 'split-type'

const enter = (function () {
  gsap.set('.home-heading, .home-subheading', { autoAlpha: 1 })
  let subheading = new SplitType('.home-subheading', {
    types: 'chars',
    tagName: 'span',
  })

  let tl = gsap.timeline({ paused: true })

  tl.from('.louise-logo', {
    autoAlpha: 0,
    yPercent: -80,
    duration: 1.5,
    delay: 0.3,
  })
    .from('.acabo-logo', { autoAlpha: 0, yPercent: 80, duration: 1.5 }, '<0.4')
    .from(
      '.star-logo',
      { autoAlpha: 0, rotate: 360, transformOrigin: 'center', duration: 1 },
      '-=0.3'
    )
    .from(
      subheading.chars,
      { autoAlpha: 0, xPercent: 50, duration: 0.2, stagger: { amount: 0.8 } },
      '<'
    )
  return window.addEventListener('load', () => tl.play())
})()

export default enter
