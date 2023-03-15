import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

/// SMOOTH SCROLL
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1.3,
  smoothTouch: true,
  touchMultiplier: 4,
  infinite: false,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//// ACCUEIL
let splitWords = new SplitType('[split-words]', {
  types: 'words',
  tagName: 'span',
})

gsap.set('.home-heading, .home-subheading', { autoAlpha: 1 })

let splitChars = new SplitType('[split-chars]', {
  types: 'chars',
  tagName: 'span',
})

let homeSubheading = document.querySelector('.home-subheading')
let charsHomeSubheading = homeSubheading.querySelectorAll('.char')

let intro = gsap.timeline({ paused: true })

intro
  .from('.louise-logo', {
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
    charsHomeSubheading,
    { autoAlpha: 0, xPercent: 50, duration: 0.2, stagger: { amount: 0.8 } },
    '<'
  )

window.addEventListener('DOMContentLoaded', () => {
  /// LOAD EVENT

  intro.play()

  /// NAV
  const navLinks = gsap.utils.toArray('.nav_link-block')
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

  document.querySelector('#navContact').addEventListener('click', () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: 'max',
      ease: 'power1.in',
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

  /// CONCERTS PASSÉS

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

  /// ÉCOUTER

  gsap.from('#ecouter-heading', {
    scrollTrigger: {
      trigger: '#ecouter',
      start: 'top 80%',
      end: 'top 40%',
      scrub: true,
    },
    xPercent: -50,
    yPercent: 100,
    autoAlpha: 0,
    duration: 2,
  })

  let videosDiv = gsap.utils.toArray('.video-div')
  videosDiv.forEach((video) => {
    gsap.from(video, {
      scrollTrigger: {
        trigger: video,
        start: 'top 95%',
        end: 'top 55%',
        scrub: true,
      },
      yPercent: 25,
      opacity: 0,
      duration: 1,
    })
  })

  let medias = document.querySelectorAll('.media-link')

  medias.forEach((media) => {
    let social = media.querySelectorAll('.socialNav')
    media.addEventListener('mouseenter', () =>
      gsap.to(social, { fill: '#bfc3c4' })
    )
    media.addEventListener('mouseleave', () =>
      gsap.to(social, { fill: '#f1d27c' })
    )
  })

  let mail = document.querySelector('.link-mail')
  mail.addEventListener('mouseenter', () =>
    gsap.to('.mail', { color: '#bfc3c4' })
  )
  mail.addEventListener('mouseleave', () =>
    gsap.to('.mail', { color: '#f1d27c' })
  )

  let linkCredit = document.querySelector('.link-credit')
  linkCredit.addEventListener('mouseenter', () =>
    gsap.to(linkCredit, { color: '#bfc3c4' })
  )
  linkCredit.addEventListener('mouseleave', () =>
    gsap.to(linkCredit, { color: '#f1d27c' })
  )

  //// MATCH MEDIAS

  let mm = gsap.matchMedia()

  mm.add(
    {
      isDesktop: `(min-width: 992px)`,
      isTablet: `(max-width: 991px)`,
      isMobile: `(max-width: 500px)`,
    },
    (context) => {
      let { isDesktop, isMobile, isTablet } = context.conditions

      /// ONLY DESKTOP
      if (isDesktop == true) {
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

        /// PHOTO
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

        /// PARA
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

        //// VIDEO HOVER

        const links = gsap.utils.toArray('.titre-video')
        links.forEach((link) => {
          gsap.from(link, {
            scrollTrigger: {
              trigger: link,
              start: 'top 90%',
              end: 'top 80%',
              scrub: true,
            },
            yPercent: 50,
            autoAlpha: 0,
            duration: 2,
          })
        })

        links.forEach((link) => {
          link.addEventListener('mouseover', () => {
            const videos = gsap.utils.toArray('.video-div')
            const current = videos.findIndex((e) => e.style.zIndex == 0)
            const becomeCurrent = link.getAttribute('data')
            videos[current].style.zIndex = -1
            videos[becomeCurrent].style.zIndex = 0

            const links = document.querySelectorAll('.titre-video')
            links[current].style.color = '#6b7b7f'
            links[becomeCurrent].style.color = '#e1c476'
          })
        })

        links.forEach((link) => {
          link.addEventListener('click', () => {
            let index = link.getAttribute('data')
            const videos = gsap.utils.toArray('.video-link')
            videos[index].click()
          })
        })

        const videoDescriptions = gsap.utils.toArray(
          '.desktop .video-description'
        )
        videoDescriptions.forEach((link) => {
          link.addEventListener('click', () => {
            let index = link.getAttribute('data')
            const videos = gsap.utils.toArray('.video-link')
            videos[index].click()
          })
        })

        //// FOOTER

        let charsMail = mail.querySelectorAll('.char')

        let mailAnim = gsap.timeline({ paused: true })
        mailAnim
          .from(charsMail, {
            autoAlpha: 0,
            xPercent: 50,
            duration: 0.2,
            stagger: { amount: 0.7 },
          })
          .from(
            '.media-link',
            {
              yPercent: 50,
              autoAlpha: 0,
              duration: 0.8,
              stagger: 0.2,
            },
            '<'
          )

        ScrollTrigger.create({
          trigger: '.video',
          start: 'bottom bottom',
          onLeaveBack: () => {
            mailAnim.progress(0), mailAnim.pause()
          },
        })

        ScrollTrigger.create({
          trigger: '.video',
          start: 'bottom 70%',
          onEnter: () => mailAnim.play(),
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

      /// ONLY TABLET
      if (isMobile == false && isTablet == true) {
        //// BIO ////
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

        /// PARA
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
    }
  )

  /// MOBILE && TABLET
  let mobTab = gsap.matchMedia()

  mobTab.add('(max-width: 991px)', () => {
    // NAV MOBILE

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
      pin: '.hamburger-container',
      pinSpacing: false,
    })

    let navLinksMob = gsap.utils.toArray('.nav_link-block-mob')
    let navMobile = new TimelineLite({ paused: true, ease: 'power2.in' })
    navMobile
      .to('.line-hamburger1', { top: 25, duration: 0.2 })
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
      .from(navLinksMob[0], { xPercent: 50, autoAlpha: 0, duration: 0.4 })
      .from(
        navLinksMob[1],
        { xPercent: -50, autoAlpha: 0, duration: 0.4 },
        '-=0.2'
      )
      .from(
        navLinksMob[2],
        { xPercent: 50, autoAlpha: 0, duration: 0.4 },
        '-=0.2'
      )
      .from(
        navLinksMob[3],
        { xPercent: -50, autoAlpha: 0, duration: 0.4 },
        '-=0.2'
      )

    function reverse() {
      navMobile.reverse()
      gsap.delayedCall(0.8, () => lenis.start())
    }
    document
      .querySelector('.hamburger-container')
      .addEventListener('click', () => {
        if (navMobile.progress() == 0) {
          if (hero == true) {
            gsap.to(window, {
              scrollTo: '.main',
              onComplete: () => {
                navMobile.play()
                lenis.stop()
              },
            })
          } else {
            navMobile.play()
            lenis.stop()
          }
        } else if (navMobile.progress() == 1) {
          reverse()
        }
      })

    function navOne() {
      gsap.to(window, { duration: 0, scrollTo: '#a-propos' })
      reverse()
    }
    function navTwo() {
      gsap.to(window, { duration: 0, scrollTo: '#agenda' })
      reverse()
    }
    function navThree() {
      gsap.to(window, { duration: 0, scrollTo: '#ecouter' })
      reverse()
    }
    function navFour() {
      gsap.to(window, { duration: 0, scrollTo: { y: 'max' } })
      reverse()
    }
    navLinksMob[0].addEventListener('click', () => navOne())
    navLinksMob[1].addEventListener('click', () => navTwo())
    navLinksMob[2].addEventListener('click', () => navThree())
    navLinksMob[3].addEventListener('click', () => navFour())

    //// PHOTO BIO
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

    //// VIDEOS

    const videoDescriptions = gsap.utils.toArray('.mobile .video-description')
    videoDescriptions.forEach((link) => {
      link.addEventListener('click', () => {
        let index = link.getAttribute('data')
        const videos = gsap.utils.toArray('.video-link')
        videos[index].click()
      })
    })

    // EMPTY HEADER HEIGHT
    const rectifyHeight = () => {
      let footerHeight = document.querySelector('.footer-mobile').offsetHeight
      let emptyHeight = footerHeight - 30
      return gsap.set('.empty-footer', {
        height: emptyHeight,
        duration: 0,
      })
    }

    rectifyHeight()
    window.addEventListener('resize', () => rectifyHeight())

    //// FOOTER
    let mailMob = document.querySelector('.mail-mobile')
    let charsMail = mailMob.querySelectorAll('.char')

    let mailAnim = gsap.timeline({ paused: true })
    mailAnim
      .from(charsMail, {
        autoAlpha: 0,
        xPercent: 50,
        duration: 0.2,
        stagger: { amount: 0.7 },
      })
      .from(
        '.media-link',
        {
          yPercent: 50,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.2,
        },
        '<'
      )

    ScrollTrigger.create({
      trigger: '.video',
      start: 'bottom bottom',
      onLeaveBack: () => {
        mailAnim.progress(0), mailAnim.pause()
      },
    })

    ScrollTrigger.create({
      trigger: '.video',
      start: 'bottom 60%',
      onEnter: () => mailAnim.play(),
    })

    gsap.from('.contact-title', {
      scrollTrigger: {
        trigger: '.video',
        start: 'bottom 60%',
        end: 'bottom 55%',
        scrub: true,
      },
      yPercent: 50,
      autoAlpha: 0,
      duration: 2,
    })
  })

  /// END LOAD EVENT
})
