import { createContext } from "react";
import { searchDataProp } from "../model/apiDataType";

interface wordStateContexProp{
    word:string;
    setWord:React.Dispatch<React.SetStateAction<string>>;
    searchWordData:searchDataProp[]
    setSearchWordData:React.Dispatch<React.SetStateAction<searchDataProp[]>>
}

export const WordStateContext = createContext<wordStateContexProp>({
    word:"",
    setWord:()=>{},
    setSearchWordData:()=>{},
    searchWordData:[]
})