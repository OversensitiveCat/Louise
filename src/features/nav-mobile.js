import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { lenis } from './lenis'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const navMob = (function () {
  const mm = gsap.matchMedia()
  mm.add('(max-width: 991px)', () => {
    const ham = document.querySelector('.hamburger-container')

    // TIMELINE
    let links = gsap.utils.toArray('.nav_link-block-mob')
    let tl = gsap.timeline({
      paused: true,
      onStart: () => lenis.stop(),
      onReverseComplete: () => lenis.start(),
    })
    tl.to('.line-hamburger1', { top: 25, duration: 0.2 })
      .to('.line-hamburger2', { top: 25, duration: 0.2 }, '<')
      .to('.nav-mobile-container', { zIndex: 14, duration: 0.1 }, '<')
      .to('.nav-mobile-container', { opacity: 1, duration: 0.4 })
      .to(
        '.line-hamburger1',
        {
          rotate: 45,
          transformOrigin: 'center',
          duration: 0.3,
        },
        '-=0.3'
      )
      .to(
        '.line-hamburger2',
        {
          rotate: -45,
          transformOrigin: 'center',
          duration: 0.3,
        },
        '<'
      )
      .from(links[0], { xPercent: 50, autoAlpha: 0, duration: 0.4 })
      .from(links[1], { xPercent: -50, autoAlpha: 0, duration: 0.4 }, '-=0.2')
      .from(links[2], { xPercent: 50, autoAlpha: 0, duration: 0.4 }, '-=0.2')
      .from(links[3], { xPercent: -50, autoAlpha: 0, duration: 0.4 }, '-=0.2')

    // SCROLL TO MAIN
    let hero = true
    ScrollTrigger.create({
      trigger: '.hero',
      start: 'bottom top',
      onEnter: () => {
        hero = false
      },
      onLeaveBack: () => {
        hero = true
      },
    })
    ScrollTrigger.create({
      trigger: '.main',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      pin: ham,
      pinSpacing: false,
    })

    // EVENTS
    ham.addEventListener('click', () => {
      if (tl.progress() == 0) {
        hero
          ? gsap.to(window, {
              scrollTo: '.main',
              duration: 1.5,
              ease: 'power1.inOut',
              onComplete: () => {
                tl.play()
              },
            })
          : tl.play()
      } else if (tl.progress() == 1) {
        tl.reverse()
      }
    })

    function navOne() {
      gsap.to(window, { duration: 0, scrollTo: '#a-propos' })
      tl.reverse()
    }
    function navTwo() {
      gsap.to(window, { duration: 0, scrollTo: '#agenda' })
      tl.reverse()
    }
    function navThree() {
      gsap.to(window, { duration: 0, scrollTo: '#ecouter' })
      tl.reverse()
    }
    function navFour() {
      gsap.to(window, { duration: 0, scrollTo: { y: 'max' } })
      tl.reverse()
    }
    links[0].addEventListener('click', navOne)
    links[1].addEventListener('click', navTwo)
    links[2].addEventListener('click', navThree)
    links[3].addEventListener('click', navFour)
  })
})()
export default navMob
