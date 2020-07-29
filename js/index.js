const form = document.querySelector("form");
const [textareaJson] = document.getElementsByName("json");
const [textareaCsv] = document.getElementsByName("csv");


const validateJsonObj = (jsonString) => {
    try {
        console.log(JSON.parse(jsonString));
    } catch (error) {
        throw new Error(error)        
    }
}

const convertJsonToCsv = (jsonObjArray) => {
    try {
        let csv = ''

        csv = csv + `${Object.keys(jsonObjArray[0])}\n`

        for (const jsonObj of jsonObjArray) {
            csv = csv + `${Object.values(jsonObj)}\n`
        }

        return csv
    } catch (error) {
        throw new Error(error)
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    e.stopPropagation();

    try {
        const jsonString = textareaJson.value

        validateJsonObj(jsonString)

        const jsonObjArray = JSON.parse(jsonString)

        
        textareaCsv.value = `${convertJsonToCsv(jsonObjArray)}`       
        
        textareaJson.style.border = 'solid 1px black'  
    } catch (error) {
        textareaJson.style.border = 'solid 2px red'
        textareaCsv.value = ''
    }
})
