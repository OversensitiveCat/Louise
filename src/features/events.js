import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const events = (function () {
  /// CONCERTS
  gsap.from('#concert-heading1', {
    scrollTrigger: {
      trigger: '.concerts',
      start: 'top 60%',
      end: 'top 25%',
      scrub: true,
    },
    xPercent: -50,
    yPercent: 100,
    autoAlpha: 0,
    duration: 2,
  })

  gsap.from('#concert-heading2', {
    scrollTrigger: {
      trigger: '.concerts',
      start: 'top 50%',
      end: 'top 20%',
      scrub: true,
    },
    xPercent: -50,
    yPercent: 100,
    autoAlpha: 0,
    duration: 2,
  })

  gsap.to('.photo-concerts', {
    scrollTrigger: {
      trigger: '.concerts',
      start: 'top center',
      end: 'bottom bottom',
      scrub: true,
    },
    opacity: 1,
    duration: 2,
    top: '50%',
  })

  const collectionItems = gsap.utils.toArray('#collection > div')
  collectionItems.forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'center bottom',
        end: 'top 65%',
        scrub: true,
      },
      yPercent: 60,
      xPercent: -20,
      autoAlpha: 0,
      duration: 2,
    })
  })

  /// TITRE CONCERTS PASSÉS
  gsap.from('#past-concert-heading1', {
    scrollTrigger: {
      trigger: '.concerts-passes',
      start: 'top 80%',
      end: 'top 40%',
      scrub: true,
    },
    xPercent: -50,
    autoAlpha: 0,
    duration: 2,
  })

  gsap.from('#past-concert-heading2', {
    scrollTrigger: {
      trigger: '.concerts-passes',
      start: 'top 75%',
      end: 'top 40%',
      scrub: true,
    },
    xPercent: -50,
    autoAlpha: 0,
    duration: 2,
  })

  let mm = gsap.matchMedia()
  /// ONLY DESKTOP
  mm.add('(min-width: 992px)', () => {
    const pastCollectionItems = gsap.utils.toArray('#collection-past > div')
    pastCollectionItems.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          end: 'top 55%',
          scrub: 1,
        },
        yPercent: 80,
        autoAlpha: 0,
        duration: 2,
      })
    })
  })

  /// MOBILE && TABLET
  mm.add('(max-width: 991px)', () => {
    //// PAST COLLECTION
    const pastCollectionItems = gsap.utils.toArray(
      '#collection-past-mobile > div'
    )
    pastCollectionItems.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          end: 'top 55%',
          scrub: true,
        },
        yPercent: 80,
        autoAlpha: 0,
        duration: 2,
      })
    })
  })
})()

export default events
