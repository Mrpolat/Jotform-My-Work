import { useSub } from "../context/submission";

export function AnimalData(){

    const {animalSubmissions,definedID} = useSub();
    let deneme = animalSubmissions[definedID];
    let AnswerData = {
        id:'',
        İmage:'', 
        Title:'',
        OwnerFirst:'',
        OwnerLast:'',
        AdopStatus:'',
        PetID:'',
        PhoneNumber:'',
        BreedOf:'',
        AboutAnimal:''
    }    
    if(deneme){
        AnswerData.id=deneme.id;
        AnswerData.İmage=deneme.answers[4].answer[0];
        AnswerData.Title=deneme.answers[7].answer;
        AnswerData.OwnerFirst=deneme.answers[8].answer.first;
        AnswerData.OwnerLast=deneme.answers[8].answer.last;
        AnswerData.AdopStatus=deneme.answers[11].answer;
        AnswerData.PetID=deneme.id;
        AnswerData.PhoneNumber=deneme.answers[9].answer.full;
        AnswerData.BreedOf=deneme.answers[6].answer;
        AnswerData.AboutAnimal=deneme.answers[5].answer;
    }
    return AnswerData;
}
