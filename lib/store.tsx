import create from 'zustand'
import {menu, logo, aboutMePage, blog} from '../lib/dataQueries'

export const useHeader = create(set => ({
    //logo state
    siteLogo: {
        name: '',
        abbreviation: '',
        icon: '',
    },
    setSiteLogo: async () => {
        const response = await logo
        response.forEach((item: any) => set({siteLogo: item}))
    },
    //menu state
    menuItems: [],
    setMenuItems: async () => {
        const response = await menu
        set({menuItems: response})
    }
}))

// export const useHome = create(set => ({
//     //home state
//     homeHero : {
//         section: {
//             primaryHeading: '',
//             secondaryHeading: '',
//             image: '',
//         }
//     },
//     setHomeHero: async () => {
//         const response = await homeHero
//        response.forEach((item:any) => set({homeHero: item}))
//     },
//     homeWork: [{
//         section: {
//             content: [],
//             left_image: '',
//             title: '',
//         }
//     }],
//     setHomeWork: async () => {
//         const response = await homeWork
//         set({homeWork: response})
        
//     },
//     homeTechStack: [
//         {
//             section: {
//                 title: '',
//                 subtitle: '',
//                 content: [],
//                 logo_icon: [],
//                 logo_text: [],
//                 button: []
//             }
//         }
//     ],
//     setHomeTechStack: async () => {
//         const response = await homeTechStack
//         set({homeTechStack: response})
//     },
//     homeBlog: {
//         section: {
//             block: [],
//             custom_blogs: [],
//         }
//     },
//     setHomeBlog: async () => {
//         const response = await homeBlog
//         response.forEach((item: any) => set({homeBlog: item}))
//     },
// }))

export const useAboutMePage = create(set => ({ 
    aboutMePage: {
        title: '',
        section: {
            block: [],
        },
    },
    setAboutMePage: async () => {
        const response = await aboutMePage
        response.forEach((item: any) => set({aboutMePage: item}))
    }
}))


export const useBlog = create(set => ({
    blogs: [],
    setBlogs: async () => {
        const response = await blog
        set({blogs: response})
    }
}))