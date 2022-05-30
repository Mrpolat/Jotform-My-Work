//UTF5 den UTF3 Standartına zamanı 7 saat ileriye convert eden fonksiyon
export const HandleDate = (e) => {
    let year = e.slice(0, 4)
    let month = e.slice(5, 7)
    let day = e.slice(8, 10)
    let hours = e.slice(11, 13)
    let remainder = e.slice(13, 19)
    hours = parseInt(hours) + 7
    const thirtOneMonths = ["01", "03", "05", "07", "09", "11"]
    const thirtyMonths = ["04", "06", "08", "10", "12"]
    const twentyEightMonths = ["02"]
    if (hours >= 24) {
        hours = `0${hours - 24}`
        day++
        //31 çeken ayların son günü submit edilen formlar
        if (thirtOneMonths.includes(month)){
            if (day > 31){
                day = "01"
                month++
                if(!thirtyMonths.includes(String(month))){
                    month = `0${month}`
                }
            }
        }
        //30 çeken ayların son günü submit edilen formlar+
        else if (thirtyMonths.includes(month)) {
            if (day > 30) {
                day = "01"
                month++
                if(month !== 11){
                    month = `0${month}`
                }
                if(month > 12){ //30 aralık gecesi submit edilen formlar
                    month = "01"
                    year++
                }
            }
        }
        //şubat ın 28 çektiği yıllar da son gün submit edilen formlar
        else if(twentyEightMonths.includes(month) && year % 4 !== 0){
            if(day > 28){
                day = "01"
                month++
            }
        }
        //şubat ın 29 çektiği yıllarda son gün submit edilen formlar
        else {
            if(day > 29){
                day = "01"
                month++
            }
        }
    }
    return (`${year + '-' + month + '-' + day + ' ' + hours + remainder}`)
}