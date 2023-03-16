import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const events = (function () {
  // Next
  gsap.from('#concert-heading1', {
    scrollTrigger: {
      trigger: '.concerts',
      start: 'top 80%',
      end: 'top 30%',
      scrub: true,
    },
    xPercent: -40,
    yPercent: 100,
    opacity: 0,
  })

  gsap.from('#concert-heading2', {
    scrollTrigger: {
      trigger: '.concerts',
      start: 'top 80%',
      end: 'top 30%',
      scrub: true,
    },
    xPercent: -50,
    yPercent: 100,
    opacity: 0,
  })

  gsap.from('.photo-concerts', {
    scrollTrigger: {
      trigger: '.concerts',
      start: 'top 90%',
      end: 'center 60%',
      scrub: true,
    },
    opacity: 0,
  })

  ScrollTrigger.create({
    trigger: '.concerts',
    start: 'top top',
    end: 'bottom 75%',
    scrub: true,
    pin: '.photo-concerts',
  })

  const collectionItems = gsap.utils.toArray('#collection > div')
  collectionItems.forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'center bottom',
        end: 'top 70%',
        scrub: true,
      },
      yPercent: 50,
      xPercent: -15,
      opacity: 0,
    })
  })

  // Past
  gsap.from('#past-concert-heading1', {
    scrollTrigger: {
      trigger: '.concerts-passes',
      start: 'top 90%',
      end: 'top 40%',
      scrub: true,
    },
    xPercent: -25,
    opacity: 0,
  })

  gsap.from('#past-concert-heading2', {
    scrollTrigger: {
      trigger: '.concerts-passes',
      start: 'top 85%',
      end: 'top 40%',
      scrub: true,
    },
    xPercent: -25,
    opacity: 0,
  })

  const pastCollectionItems = gsap.utils.toArray('.past-collection > div')
  pastCollectionItems.forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        end: 'top 60%',
        scrub: 1,
      },
      yPercent: 10,
      opacity: 0,
    })
  })
})()

export default events
