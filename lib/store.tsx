import create from 'zustand'
import {homeHero, menu, logo, homeWork, homeTechStack, homeBlog} from '../lib/dataQueries'

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

export const useHome = create(set => ({
    //home state
    homeHero : {
        section: {
            primaryHeading: '',
            secondaryHeading: '',
            image: '',
        }
    },
    setHomeHero: async () => {
        const response = await homeHero
       response.forEach((item:any) => set({homeHero: item}))
    },
    homeWork: {
        section: {
            title: '',
            content: '',
            left_image: '',
        }
    },
    setHomeWork: async () => {
        const response = await homeWork
        set({homeWork: response})
        
    },
    homeTechStack: [],
    setHomeTechStack: async () => {
        const response = await homeTechStack
        set({homeTechStack: response})
    },
    homeBlog: {
        section: {
            block: {}
        }
    },
    setHomeBlog: async () => {
        const response = await homeBlog
        response.forEach((item: any) => set({homeBlog: item}))
    }
}))