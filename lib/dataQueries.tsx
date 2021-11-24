import imageUrlBuilder from '@sanity/image-url'
import client from './sanityClient'

const builder = imageUrlBuilder(client)
function urlFor(source) {
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

//BEGIN HOMEPAGE query
//+++++++++++++++++//
//home heroSection
const homeHeroSection = `*[_type == 'pages' && title == 'Home']{
  section[0]{
    primaryHeading,
    secondaryHeading,
    image{
    asset->{
    url
  }
  }
  },
  }`
const homeHero:any = client.fetch(homeHeroSection);
//Home work section
const homeWorkSection = `*[_type == 'pages' && title == 'Home']{
  section[1]
}`
const homeWork:any = client.fetch(homeWorkSection);

//Home TechStack
const homeTechSection = `*[_type == 'pages' && title == 'Home']{
  section[2]
}`
const homeTechStack = client.fetch(homeTechSection)
//home Blog
const homeBlogSection = `*[_type == 'pages' && title == 'Home']{
  section[3]{
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
}`
const homeBlog:any = client.fetch(homeBlogSection)

//END OF HOMEPAGE QUERIES

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
export {homeHero, homeWork, homeTechStack,homeBlog, aboutMePage, getInTouchPage, blog, urlFor, menu, logo, }