const reverseWords = (s) => {
    let wordsInS = [];
    let word  = "";
    for(let i = 0; i < s.length; ++i){
        if(i > 0 && s[i] === " " && s[i - 1] !== " "){
            wordsInS.push(word);
            word = ""
        }else if(s[i] !== " "){
            word += s[i];
        }
    }
    if(word !== ""){
        wordsInS.push(word);
    }
    let result = "";
    for(let i = wordsInS.length - 1; i >= 0; --i){
        result += wordsInS[i];
        if(i > 0){
            result += ' ';
        }
    }
    return result;
}

console.log(reverseWords("the sky is blue"));