
function generateHtml(data) {
    for(i=0; i<data.length; i++){
        if(data[i].getRole() == "Manager") {
            return `<h1>some HTML about manager</h1>
            `;
        }
    }
    console.log(data);
}
console.log(generateHtml);

module.exports = generateHtml;