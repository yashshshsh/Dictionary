const search = document.querySelector(".search");
const input = document.querySelector(".input-box input");
const samp = document.querySelector("#samp");
const prop1 = document.querySelector("#prop1");
const prop2 = document.querySelector("#prop2");
const mean = document.querySelector("#mean");
const eg = document.querySelector("#eg");

search.addEventListener("click",async()=>{
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`);
    const data = await response.json();
    console.log(data);

    if(data && data.length>0){
        samp.innerText = `${input.value}`;
        prop1.innerText = data[0].meanings[0].partOfSpeech || "POS not available";
        prop2.innerText = data[0].phonetics[0]?.text || ""
        mean.innerText = data[0].meanings[0].definitions[0].definition || "Definaton is not available";
        eg.innerText =  data[0].meanings[0].definitions[0].example || "Example not available";
    }
})