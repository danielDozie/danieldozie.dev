import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import client from './sanityClient'

const builder = imageUrlBuilder(client)
function urlFor(source: SanityImageSource) {
  return builder.image(source)
}


const defaultEx = 'Hello';

//logo query
const logoQuery = `*[_type == "logo" ]{
  name,
  abbreviation,
  icon {
  asset->{
  	url
    }
  }
}`
const logo:any = client.fetch(logoQuery)

//menu Query
const menuQuery = `*[_type == "menu" ]| order(order desc){
  _id,
  name,
  link{
  current
}
}`
const menu:any = client.fetch(menuQuery)

const logoAndMenuQuery = `{
  'Logo':*[_type == 'logo']{
  name,
  abbreviation,
  icon{
  asset->{
  url
 }
 }
 }, 'Menu': *[_type == "menu" ]| order(order desc){
   _id,
   name,
   link{
   current
 }
 }
}`
const logoAndMenu = client.fetch(logoAndMenuQuery)


//New Home query
const newHomeQuery = `*[_type == 'pages' && title == 'Home']{
  title,
description,
slug{
current,
},
'HeroSection':section[0]{
primaryHeading,
  secondaryHeading,
  image{
  asset->{
  url
}
}
},
'WorkSection':section[1]{
title,
left_image{
asset->{
url,
}
},
content,
},
'TechSection':section[2]{
title,
subtitle,
logo_text,
logo_icon,
button,
content
},
'BlogSection':section[3]{
  block,
  custom_blogs[][0...2]->{
      _createdAt,
      _id,
      title,
      slug,
      excerpts,
      image{
        asset -> {
          url,
        }
      },
      author->{
      _id,
      fullname,
    }
    }
  }
}
`
const homePage = client.fetch(newHomeQuery)


//About Me query
const aboutMePageQuery = `*[_type == 'pages' && title == 'About me']{
  title,
  description,
  section[],
  slug{
    current
  },
}`
const aboutMePage = client.fetch(aboutMePageQuery)

//Get in touch query
const getInTouchQuery = `*[_type == 'pages' && title == 'Get in touch']{
  title,
  description,
  section[],
  slug{
    current
  },

}`
const getInTouchPage = client.fetch(getInTouchQuery)



//blog query
const blogQuery = `*[_type == 'blog']{
  _createdAt,
  _id,
  author->{
  _id,
  fullname
},
  content,
  excerpts,
  image{
  asset->{
  url
}
},
  slug,
  title
  
}`
const blog = client.fetch(blogQuery)

//export data components
export default defaultEx;
export {logoAndMenu, homePage, aboutMePage, getInTouchPage, blog, urlFor, menu, logo, }