'use strict'

function createNewUser () {
      newUser.firstName = prompt('Name');
      newUser.lastName = prompt('Surname');
      newUser.birthday = prompt(`dd.mm.yyyy`);

}
 const newUser = {
     getLogin() {
         console.log((this.firstName[0] + this.lastName.trim()).toLowerCase())
     },
     getAge () {
         const year = (new Date().getFullYear())
         console.log(`Age: ${year - this.birthday.slice(6)}`)
         },
     getPassword () {
         console.log(((this.firstName[0]).toUpperCase() + (this.lastName + this.birthday.slice(6)).toLowerCase()).trim())
     }

 }

 createNewUser()
 newUser.getLogin()
 newUser.getAge()
 newUser.getPassword()