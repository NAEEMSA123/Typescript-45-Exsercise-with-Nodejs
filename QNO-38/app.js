// Task 38
function discribe_citi(citi, country) {
    if (country === void 0) { country = 'pakistan'; }
    console.log("".concat(citi, " Is in ").concat(country));
}
discribe_citi('karachi'); // defult sentence
discribe_citi('france', 'europe');
discribe_citi('lahore', 'Is in punjab');
