import  { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';


const generateName = () => uniqueNamesGenerator({
  dictionaries: [adjectives, animals, colors],
  length: 3,
  separator: ' ',
});




export { generateName } 