import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const listen = (function () {
  gsap.from('#ecouter-heading', {
    scrollTrigger: {
      trigger: '#ecouter',
      start: 'top 90%',
      end: 'top 50%',
      scrub: true,
    },
    xPercent: -40,
    yPercent: 100,
    opacity: 0,
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
    })
  })

  let mm = gsap.matchMedia()
  // DESKTOP
  mm.add('(min-width: 992px)', () => {
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

    const videoDescriptions = gsap.utils.toArray('.desktop .video-description')
    videoDescriptions.forEach((link) => {
      link.addEventListener('click', () => {
        let index = link.getAttribute('data')
        const videos = gsap.utils.toArray('.video-link')
        videos[index].click()
      })
    })
  })

  /// MOBILE && TABLET
  mm.add('(max-width: 991px)', () => {
    const videoDescriptions = gsap.utils.toArray('.mobile .video-description')
    videoDescriptions.forEach((link) => {
      link.addEventListener('click', () => {
        let index = link.getAttribute('data')
        const videos = gsap.utils.toArray('.video-link')
        videos[index].click()
      })
    })
  })
})()
export default listen
