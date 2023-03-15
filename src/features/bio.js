import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const bio = (function () {
  // eslint-disable-next-line no-unused-vars
  let splitWords = new SplitType('[split-words]', {
    types: 'words',
    tagName: 'span',
  })

  //// BIO ////
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

  /// PARA
  gsap.set('.para-bio .word', { autoAlpha: 0, yPercent: 100 })
  const bioLines = gsap.utils.toArray('.para-bio .word')
  bioLines.forEach((line) => {
    gsap.to(line, {
      autoAlpha: 1,
      yPercent: 100,
      duration: 1,
      scrollTrigger: {
        trigger: line,
        start: 'top 90%',
        end: 'top 80%',
        scrub: true,
      },
    })
  })

  // QUOTE
  let wordsQuote = gsap.utils.toArray('.quote .word')
  wordsQuote.forEach((word) => {
    gsap.from(word, {
      scrollTrigger: {
        start: 'top 90%',
        end: 'top 50%',
        trigger: word,
        scrub: true,
      },
      autoAlpha: 0,
      yPercent: 20,
    })
  })

  gsap.from('.legend', {
    scrollTrigger: {
      start: 'top 90%',
      end: 'top 50%',
      trigger: '.legend',
      scrub: true,
    },
    autoAlpha: 0,
    yPercent: 20,
  })
  gsap.from('.quote-mark-right', {
    scrollTrigger: {
      start: 'top 90%',
      end: 'top 50%',
      trigger: '.quote-mark-right',
      scrub: true,
    },
    autoAlpha: 0,
    xPercent: 100,
    rotate: 90,
    transformOrigin: 'center',
  })
  gsap.from('.quote-mark-left', {
    scrollTrigger: {
      start: 'top 90%',
      end: 'top 50%',
      trigger: '.quote-mark-left',
      scrub: true,
    },
    autoAlpha: 0,
    xPercent: -100,
    rotate: -90,
    transformOrigin: 'center',
  })

  /// BACKGROUND COLOR

  gsap.to('.concerts, .bio, .quote-section', {
    scrollTrigger: {
      trigger: '.concerts',
      start: 'top center',
      end: 'top 35%',
      scrub: true,
    },
    backgroundColor: '#fff4e6',
    duration: 1,
    ease: 'linear',
  })

  //// MATCH MEDIAS

  let mm = gsap.matchMedia()

  mm.add(
    {
      desktop: `(min-width: 992px)`,
      tablet: `(max-width: 991px)`,
      mobile: `(max-width: 500px)`,
    },
    (context) => {
      let { desktop, mobile, tablet } = context.conditions

      // ONLY DESKTOP
      if (desktop == true) {
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

        // PHOTO
        gsap.from('.photo-bio', {
          scrollTrigger: {
            trigger: '.bio',
            start: 'top 80%',
            end: 'top 5%',
            scrub: true,
          },
          autoAlpha: 0,
          yPercent: 60,
        })

        // PARA
        const bioLinesOne = gsap.utils.toArray('.para-wrapper1 .word')
        bioLinesOne.forEach((line) => {
          gsap.fromTo(
            line,
            { opacity: 1 },
            {
              scrollTrigger: {
                trigger: line,
                start: 'top 160px',
                end: 'top 115px',
                scrub: true,
              },
              opacity: 0,
              duration: 1,
            }
          )
        })

        const bioLinesTwo = gsap.utils.toArray('.para-wrapper2 .word')
        bioLinesTwo.forEach((line) => {
          gsap.fromTo(
            line,
            { opacity: 1 },
            {
              scrollTrigger: {
                trigger: line,
                start: 'top 50px',
                end: 'top top',
                scrub: true,
              },
              opacity: 0,
              duration: 1,
            }
          )
        })

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

      /// ONLY TABLET
      else if (mobile == false && tablet == true) {
        gsap.from('.container-mobile .louise-logo-bio', {
          scrollTrigger: {
            trigger: '.container-mobile .louise-logo-bio',
            start: 'top 90%',
            end: 'top 50%',
            scrub: true,
          },
          opacity: 0,
          xPercent: 20,
        })

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

        // PARA
        const bioLines = gsap.utils.toArray('.para-bio .word')
        bioLines.forEach((line) => {
          gsap.fromTo(
            line,
            { opacity: 1 },
            {
              scrollTrigger: {
                trigger: line,
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
      else if (desktop == false) {
        // PHOTO
        gsap.fromTo(
          '.photo-bio-mobile',
          { opacity: 1 },
          {
            scrollTrigger: {
              trigger: '.bio',
              start: 'bottom 40%',
              end: '150% top',
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
