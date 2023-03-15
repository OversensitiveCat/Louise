import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import bio from './features/bio'
import enter from './features/enter'
import events from './features/events'
import footer from './features/footer'
import { lenis, setLenis } from './features/lenis'
import listen from './features/listen'
import nav from './features/nav'
import navMob from './features/nav-mobile'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// LENIS
setLenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

// ANIMATIONS
enter
nav
navMob
bio
events
listen
footer

// TO DO list
// clean listen, events, bio
// hover effects (reste.js) in webflow ?
