import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const quote = (function () {
  let words = new SplitType('.quote', {
    types: 'words',
    tagName: 'span',
  })
  words.words.forEach((word) => {
    gsap.from(word, {
      scrollTrigger: {
        start: 'top 90%',
        end: 'top 70%',
        trigger: word,
        scrub: true,
      },
      opacity: 0,
      yPercent: 20,
    })
  })

  gsap.from('.legend', {
    scrollTrigger: {
      start: 'top 90%',
      end: 'top 70%',
      trigger: '.legend',
      scrub: true,
    },
    opacity: 0,
    yPercent: 20,
  })
  gsap.from('.quote-mark-right', {
    scrollTrigger: {
      start: 'top 90%',
      end: 'top 70%',
      trigger: '.quote',
      scrub: true,
    },
    opacity: 0,
    xPercent: 75,
    rotate: 90,
    transformOrigin: 'center',
  })
  gsap.from('.quote-mark-left', {
    scrollTrigger: {
      start: 'top 90%',
      end: 'top 70%',
      trigger: '.quote',
      scrub: true,
    },
    opacity: 0,
    xPercent: -75,
    rotate: -90,
    transformOrigin: 'center',
  })

  /// Background color
  gsap.to('.concerts, .bio, .quote-section', {
    scrollTrigger: {
      trigger: '.concerts',
      start: 'top 75%',
      end: 'top 20%',
      scrub: true,
    },
    backgroundColor: '#fff4e6',
    ease: 'power1.inOut',
  })
})()
export default quote
