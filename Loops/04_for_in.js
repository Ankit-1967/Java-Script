const countryCode = {
    IN: 'India',
    JPN: 'Japan',
    NEP:'Nepal',
    CNA:'China'
}


for (const key in countryCode) {
    console.log(`${countryCode[key]} country code is ${key}`)
}



const language = ["HTML", "JAVASCRIPT", "CSS", "Liquid"];


for (const key in language) {
    console.log(language[key]);
}