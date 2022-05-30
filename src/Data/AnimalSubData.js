import { useSub } from "../context/submission";

export function AnimalData() {

    const { animalParsedData } = useSub();

    let AnswerData = {
        id: '',
        Image: '',
        Title: '',
        OwnerFirst: '',
        OwnerLast: '',
        AdopStatus: '',
        PetID: '',
        PhoneNumber: '',
        BreedOf: '',
        AboutAnimal: ''
    }
    if (animalParsedData) {
        AnswerData.id = animalParsedData.id;
        AnswerData.Image = animalParsedData.answers[4].answer[0];
        AnswerData.Title = animalParsedData.answers[7].answer;
        AnswerData.OwnerFirst = animalParsedData.answers[8].answer.first;
        AnswerData.OwnerLast = animalParsedData.answers[8].answer.last;
        AnswerData.AdopStatus = animalParsedData.answers[11].answer ;
        AnswerData.PetID = animalParsedData.id;
        AnswerData.PhoneNumber = animalParsedData.answers[9].answer.full;
        AnswerData.BreedOf = animalParsedData.answers[6].answer;
        AnswerData.AboutAnimal = animalParsedData.answers[5].answer;
    }
    return AnswerData;
}

// export function AdaptionData() {
//     const { adaptionParsedData } = useSub();
//     let AnswerData = []   
//     if (adaptionParsedData) {
//         adaptionParsedData.map((sub)=>{
//             AnswerData.push({
//                 id:sub.id,
//                 OwnerFirst: sub.answers[4].answer.first,
//                 OwnerLast: sub.answers[4].answer.last,
//                 PetID: sub.answers[14].answer,
//                 PhoneNumber: sub.answers[7].answer.full,
//                 previousPet: sub.answers[10].answer,
//                 reasonOwning:sub.answers[12].answer,
//                 concernPet:sub.answers[13].answer
//             })
//         });
//         console.log(AnswerData)
//     }
//     return AnswerData;
// }
