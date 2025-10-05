/*
{
  ana.smith@gmail.com
  luis.cordero@gmail.com
  roger.aguilar@outlook.com
  ana.smith@gmail.com
  luis.aguilar@gmail.com
  martina.lopez@yahoo.com
  miguel.rios@yahoo.com
  roger.aguilar@outlook.com
}
*/

function toPascalCase(name: string) {
   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}
function processEmail(emails: string[]) {
    
    for (let i=0; i < emails.length; i++) {
        
        const fullName = emails[i].split('@',1)
        const formattedName = fullName[0].replace('.', ' ').split(' ')
        const firstName: string = toPascalCase(formattedName[0].toString())
        const lastName: string = toPascalCase(formattedName[1].toString())
        
        console.log('Hello', firstName, lastName, ' Nice pleasure for meet you!!!') 
    } 

}

const emails = new Set(   
  ['ana.smith@gmail.com',
  'luis.cordero@gmail.com',
  'roger.aguilar@outlook.com',
  'ana.smith@gmail.com',
  'luis.aguilar@gmail.com',
  'martina.lopez@yahoo.com',
  'miguel.rios@yahoo.com',
  'roger.aguilar@outlook.com']  
)

const emailList = Array.from(emails)

processEmail(emailList)