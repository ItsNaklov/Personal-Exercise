// Create for loop logs out the numbers from 74-98

for(let i = 74; i <= 98;  i++)
{
    console.log (i);
}


function logString(stringToLog, numberOfTimesToLog)
{
  for (let i = 0; i < numberOfTimesToLog; i++)
}
{
    console.log(stringToLog);
}


// This function emulates sending emails to receipients
function sendEmailTo(recepient) {
    // But really it only logs out a string
    console.log('email sent to ' + recepient);
}

const allEmails = "benjamin@gmail.com|peter@gmail.com|nans@gmail.com|ahmad@gmail.com
const allEmailsArray = allEmails.split("|");

//for (let i = 0; i < allEmailsArray.length; i++)
// {
//     const email = allEmailsArray[i];
//     sendEmailTo(email);
// }
// allEmailsArray.forEach(sendEmailTo)