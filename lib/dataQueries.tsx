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
const logo = client.fetch(logoQuery)

//menu Query
const menuQuery = `*[_type == "menu" ]| order(order desc){
  _id,
  name,
  link{
  current
}
}`
const menu = client.fetch(menuQuery)

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
const homeHero = client.fetch(homeHeroSection);
//Home work section
const homeWorkSection = `*[_type == 'pages' && title == 'Home']{
  section[1]
}`
const homeWork = client.fetch(homeWorkSection);

//Home TechStack
const homeTechSection = `*[_type == 'pages' && title == 'Home']{
  section[2]
}`
const homeTechStack = client.fetch(homeTechSection)
//home Blog
const homeBlogSection = `*[_type == 'pages' && title == 'Home']{
  section[3]{
    block,
    custom_blogs[]->{
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
const homeBlog = client.fetch(homeBlogSection)

//END OF HOMEPAGE QUERIES





//about query
const aboutPageQuery = `*[_type == 'aboutPage']{
  primaryHeading, 
  secondaryHeading, 
  content
}`
const aboutPage = client.fetch(aboutPageQuery)

//blog query
const blogQuery = `*[_type == 'blog']{
  _id,
  createdAt,
  title,
  slug,
  content,
  image,
}`
const blog = client.fetch(blogQuery)

//export data components
export default defaultEx;
export {homeHero, homeWork, homeTechStack,homeBlog, aboutPage, blog, urlFor, menu, logo, }