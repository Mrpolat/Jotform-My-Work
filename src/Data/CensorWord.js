export function censorWord(word) {
    let asteriskSentence = '';
    if(word){
        for(var i=0; i<word.length;i++){
            if(i===0){
                asteriskSentence+=word.charAt(0)
            }
            else asteriskSentence+="*"
            
        }
    }
    return asteriskSentence
}