import { wordData } from './wordData';

export const getRandomWord = (): string => {
    const words:string[] = wordData
    // Generate a random index based on the length of the array
    const randomIndex = Math.floor(Math.random() * words.length);
  
    // Return the word at the random index
    return words[randomIndex];
  };

