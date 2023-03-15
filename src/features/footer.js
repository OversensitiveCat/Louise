import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const footer = (function () {
  let mm = gsap.matchMedia()
  mm.add(
    {
      desktop: `(min-width: 992px)`,
      mobile: `(max-width: 991px)`,
    },
    (context) => {
      // eslint-disable-next-line no-unused-vars
      let { desktop, mobile } = context.conditions

      let mail = new SplitType('.mail', {
        types: 'chars',
        tagName: 'span',
      })

      let tl = gsap.timeline({ paused: true })
      tl.from('.credits', {
        opacity: 0,
        yPercent: desktop ? -100 : 50,
      })
        .from(
          '.para-contact',
          { opacity: 0, yPercent: desktop ? -100 : -50 },
          '<'
        )
        .from(mail.chars, {
          opacity: 0,
          xPercent: 50,
          duration: 0.2,
          stagger: { amount: 0.7 },
        })
        .from(
          '.media-link',
          {
            yPercent: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
          },
          '<'
        )
        .from(
          '.line-gold',
          {
            height: desktop ? '50%' : 2,
            opacity: 0,
            duration: 0.8,
          },
          '<'
        )

      ScrollTrigger.create({
        trigger: '.video',
        start: 'bottom bottom',
        onLeaveBack: () => {
          tl.progress(0), tl.pause()
        },
      })

      ScrollTrigger.create({
        trigger: '.video',
        start: 'bottom 80%',
        onEnter: () => tl.play(),
      })

      gsap.from('.contact-title', {
        scrollTrigger: {
          trigger: '.video',
          start: 'bottom 60%',
          end: 'bottom 52%',
          scrub: true,
        },
        yPercent: 50,
        autoAlpha: 0,
        duration: 2,
      })
    }
  )
})()

export default footer
