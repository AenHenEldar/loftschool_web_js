const string = "Привет! Как дела?";
const vowels = ['А', 'Е' ,'И' ,'Ю','Ё','Ы','У','Э','О','Я','а','у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё','е']

const getVowels = (str) => [...str].filter(s => vowels.includes(s)).join('')

console.log(getVowels(string));