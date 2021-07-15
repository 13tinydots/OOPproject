
function generateHtml(data) {
    for(i=0; i<data.length; i++){
        if(data[i].getRole() === "Manager") {
            return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
                <title>My Team</title>
            </head>
                <section class="hero is-danger">
                    <div class="hero-body">
                        <h1 class="title is-2">
                            My Team
                        </h1>
                    </div>
                </section>
                <section>
                    <div class="container max-width">
                        
                    </div>
                </section>
            
            </body>
            </html>
            `;
        }
    }
}


module.exports = generateHtml;