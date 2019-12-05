import React,{useState} from 'react';


const useLocalStorage = (key, initialValue) =>{
const [storedValue,setStoredValue] = useState(()=>{
    const starter = window.localStorage.getItem(key)
    return starter ?
            JSON.parse(starter):
            initialValue
})
  const setKey =(input)=>{
      setStoredValue(input)
      window.localStorage.setItem(key, JSON.stringify(input))
  }   
 return [storedValue, setKey]
}
export default useLocalStorage;
