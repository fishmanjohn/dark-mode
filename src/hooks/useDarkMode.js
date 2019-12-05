import {useEffect} from 'react';
import useLocalStorage from './useLocalStroage';


function useDarkMode (value) {
const [darkMode, setDarkMode] = useLocalStorage (value)
    useEffect(()=>{
        const body = document.querySelector('body')
        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
    },[darkMode])
    return [darkMode,setDarkMode]
}
export default useDarkMode