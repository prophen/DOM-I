const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav

const nav = document.querySelector('nav')

const navItems = document.querySelectorAll('nav a')
let i = 1
navItems.forEach(item => {
  item.setAttribute('class', `nav-item-${i}`)
  item.setAttribute('href', '#')
  item.innerText = siteContent.nav[`nav-item-${i}`]
  item.style.color = 'green'
  i++
})

const shopNavItem = document.createElement('a')
shopNavItem.innerText = 'Shop'
shopNavItem.classList.add('green')
nav.appendChild(shopNavItem)

const teamNavItem = document.createElement('a')
teamNavItem.innerText = 'Team'
teamNavItem.classList.add('green')
nav.prepend(teamNavItem)

// cta
const ctaH1 = document.querySelector('h1')
ctaH1.innerText = siteContent.cta['h1']

const ctaButton = document.querySelector('button')
ctaButton.innerText = siteContent.cta['button']

const ctaImg = document.getElementById('cta-img')
ctaImg.setAttribute('src', siteContent.cta['img-src'])

// top-content
const topTextContent = document.querySelectorAll('.top-content .text-content')
topTextContent[0].children[0].innerText = siteContent["main-content"]["features-h4"]
topTextContent[1].children[0].innerText = siteContent["main-content"]["about-h4"]

topTextContent[0].children[1].innerText = siteContent["main-content"]["features-content"]
topTextContent[1].children[1].innerText = siteContent["main-content"]["about-content"]

// middle-img

const middleImg = document.querySelector('#middle-img')
middleImg.setAttribute('src', siteContent["main-content"]['middle-img-src'])

// bottom-content

const bottomTextContent = document.querySelectorAll('.bottom-content .text-content')

bottomTextContent[0].children[0].innerText = siteContent["main-content"]["services-h4"]
bottomTextContent[1].children[0].innerText = siteContent["main-content"]["product-h4"]
bottomTextContent[2].children[0].innerText = siteContent["main-content"]["vision-h4"]

bottomTextContent[0].children[1].innerText = siteContent["main-content"]["services-content"]
bottomTextContent[1].children[1].innerText = siteContent["main-content"]["product-content"]
bottomTextContent[2].children[1].innerText = siteContent["main-content"]["vision-content"]

// contact

const contact = document.querySelectorAll('.contact')
contact[0].children[0].innerText = siteContent.contact["contact-h4"]
contact[0].children[1].innerText = siteContent.contact["address"]
contact[0].children[2].innerText = siteContent.contact["phone"]
contact[0].children[3].innerText = siteContent.contact["email"]

// footer

const footer = document.querySelector('footer p')
footer.innerText = siteContent.footer.copyright
