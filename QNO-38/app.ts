// Task 38

function discribe_citi(citi:string,country:string = 'pakistan'):void{
    console.log(`${citi} Is in ${country}`)
}

discribe_citi('karachi');// defult sentence
discribe_citi('france','europe');
discribe_citi('lahore', 'Is in punjab')