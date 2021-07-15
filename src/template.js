
let details = ""

function generateHtml(data) {
    for(i=0; i<data.length; i++){
    eeName = data[i].employeeName;
    eeRole = data[i].role;
    eeID = data[i].employeeID;
    eeOfc = data[i].officeNumber;
    eeGithub = data[i].github;
    eeSchool = data[i].school;
    eeEmail = data[i].emailAddress

    switch (data[i].role) {
        case "Manager":
        details = details.concat(`<div class="column is-one-quarter"><div class="message is-info">
        <div class="message-header">
            <div class="title is-4">
                <p>${eeName}</p>
                <p><i class="fas fa-mug-hot">&nbsp;</i>${eeRole}</p>
            </div>
        </div>
        <div class="message-body">
            ID: ${eeID}<br>
            <br>Email: ${eeEmail}<br>
            <br>Office number: ${eeOfc}<br>
        </div>
    </div>
    </div>`);
        break;
    case "Engineer":
        details = details.concat(`<div class="column is-one-quarter"><div class="message is-info">
        <div class="message-header">
            <div class="title is-4">
                <p>${eeName}</p>
                <p><i class="fas fa-glasses">&nbsp;</i>${eeRole}</p>
            </div>
        </div>
        <div class="message-body">
            ID: ${eeID}<br>
            <br>Email: ${eeEmail}<br>
            <br>Github: ${eeGithub}<br>
        </div>
        </div>
    </div>`);
        break;
    default:
        details = details.concat(`
        <div class="column is-one-quarter"><div class="message is-info">
            <div class="message-header">
                <div class="title is-4">
                    <p>${eeName}</p>
                    <p><i class="fas fa-school">&nbsp;</i>${eeRole}</p>
                </div>
            </div>
        <div class="message-body">
            ID: ${eeID}<br>
            <br>Email: ${eeEmail}<br>
            <br>School: ${eeSchool}<br>
        </div>
    </div>
    </div>`);
    }

}
    return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script src="https://kit.fontawesome.com/ac4b8ce29b.js" crossorigin="anonymous"></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
                <title>My Team</title>
            </head>
                <div class="container">
                    <section class="hero is-danger">
                        <div class="hero-body">
                            <h1 class="title is-2">
                                My Team
                            </h1>
                        </div>
                    </section>
                </div>
                    <section>
                        <br>
                        <div class="container max-width">
                            <div class="columns">
                                ${details}
                            </div>
                        </div>
                        </section>
                    </div>
                </body>
            </html>
            `;
        }




module.exports = generateHtml;