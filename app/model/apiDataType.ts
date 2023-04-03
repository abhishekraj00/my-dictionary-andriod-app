interface definitionsDataType{
    definition:string
}
interface phoneticsDataType{
    audio:string
}
interface meandingDataType{ 
    partOfSpeech:string
    definitions:definitionsDataType[]
}

export interface searchDataProp {
    word: string;
    meanings: meandingDataType[];
    phonetics: phoneticsDataType[];
  }


  