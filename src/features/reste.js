import { gsap } from 'gsap'

const hover = (function () {
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
})()

export default hover
