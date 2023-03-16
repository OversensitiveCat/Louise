import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const bio = (function () {
  let mm = gsap.matchMedia()

  mm.add(
    {
      desktop: `(min-width: 992px)`,
      tablet: `(max-width: 991px)`,
      mobile: `(max-width: 500px)`,
    },
    (context) => {
      let { desktop, mobile, tablet } = context.conditions

      let paras
      desktop
        ? (paras = gsap.utils.toArray('.container .para-bio'))
        : (paras = gsap.utils.toArray('.container-mobile .para-bio'))

      let words = new SplitType(paras, {
        types: 'words',
        tagName: 'span',
      })

      // Words Fade-in
      words.words.forEach((word) => {
        gsap.set(word, { autoAlpha: 0 })
        gsap.fromTo(
          word,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 1,
            scrollTrigger: {
              trigger: word,
              start: 'top 90%',
              end: 'top 80%',
              scrub: true,
            },
          }
        )
      })

      // DESKTOP && TABLET
      if (!mobile) {
        // Louise
        gsap.from('.container .louise-logo-bio', {
          scrollTrigger: {
            trigger: '.container .louise-logo-bio',
            start: 'top 90%',
            end: 'top 50%',
            scrub: true,
          },
          opacity: 0,
          xPercent: 20,
        })
      }

      // DESKTOP
      if (desktop) {
        // Words Fade-out
        let lastParas = paras.splice(paras.length - 2, 2)

        let first = []
        paras.forEach((para) => {
          const words = para.querySelectorAll('.word')
          const array = Array.from(words)
          array.forEach((el) => first.push(el))
        })
        let last = []
        lastParas.forEach((para) => {
          const words = para.querySelectorAll('.word')
          const array = Array.from(words)
          array.forEach((el) => last.push(el))
        })

        first.forEach((word) => {
          gsap.fromTo(
            word,
            { opacity: 1 },
            {
              scrollTrigger: {
                trigger: word,
                start: 'top 150px',
                end: 'top 105px',
                scrub: true,
              },
              opacity: 0,
              duration: 1,
            }
          )
        })

        last.forEach((word) => {
          gsap.fromTo(
            word,
            { opacity: 1 },
            {
              scrollTrigger: {
                trigger: word,
                start: 'top 50px',
                end: 'top top',
                scrub: true,
              },
              opacity: 0,
              duration: 1,
            }
          )
        })

        // Pin
        ScrollTrigger.create({
          trigger: '.bio',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          pin: '.louise-logo-bio-container',
        })

        ScrollTrigger.create({
          trigger: '.bio',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          pin: '.acabo-logo-bio-container',
        })

        ScrollTrigger.create({
          trigger: '.bio',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          pin: '.column-left',
        })

        // Photo
        gsap.from('.photo-bio', {
          scrollTrigger: {
            trigger: '.bio',
            start: 'top 80%',
            end: 'top 5%',
            scrub: true,
          },
          opacity: 0,
          yPercent: 40,
        })

        // Leave
        gsap.fromTo(
          '.para-bio-container, .photo-bio, .acabo-logo-bio ',
          { opacity: 1 },
          {
            scrollTrigger: {
              trigger: '.bio',
              start: 'bottom 50%',
              end: 'bottom top',
              scrub: true,
            },
            opacity: 0,
            duration: 2,
          }
        )
      }

      /// TABLET
      if (tablet && !mobile) {
        // Pin
        ScrollTrigger.create({
          trigger: '.bio',
          start: 'top top',
          endTrigger: '.photo-bio-mobile',
          end: 'center center',
          scrub: true,
          pin: '.louise-logo-bio-container-tablet',
        })

        ScrollTrigger.create({
          trigger: '.bio',
          start: 'top top',
          endTrigger: '.photo-bio-mobile',
          end: 'center center',
          scrub: true,
          pin: '.acabo-logo-bio-container-tablet',
        })

        // Words Fade-out
        words.words.forEach((word) => {
          gsap.fromTo(
            word,
            { opacity: 1 },
            {
              scrollTrigger: {
                trigger: word,
                start: 'top 160px',
                end: 'top 115px',
                scrub: true,
              },
              opacity: 0,
              duration: 1,
            }
          )
        })
      }

      // MOBILE && TABLET
      if (!desktop) {
        // Photo
        gsap.fromTo(
          '.container-mobile > *',
          { opacity: 1 },
          {
            scrollTrigger: {
              trigger: '.bio',
              start: mobile ? 'bottom 30%' : 'bottom 40%',
              end: 'bottom top',
              scrub: true,
            },
            opacity: 0,
            duration: 2,
          }
        )
      }
    }
  )
})()
export default bio
