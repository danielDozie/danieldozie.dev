import { DarkModeToggle } from 'tailwind-darkmode-toggle';


export const Toggle: React.FC = () => {
    return (
        <DarkModeToggle className='w-5 h-5 text-gray-800 dark:text-yellow-300 cursor-pointer mx-2'/>
    )
}
