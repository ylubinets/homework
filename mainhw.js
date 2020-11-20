'use strict'

    function createNewUser () {
        const newUser = {
            firstName : prompt('Name'),
            lastName : prompt('Surname'),
            birthday : prompt('dd.mm.yyyy'),

            getLogin() {
                return ((this.firstName[0] + this.lastName.trim()).toLowerCase());
            },
            getAge () {
                let today = new Date();
                let age = today.getFullYear() - this.birthday.slice(6);

                if (today.getMonth() > this.birthday.slice(3,5)){
                        return age;
                    } if (today.getDate() > this.birthday.slice(0,3)){
                        return age;
                }else {
                  return  age = age - 1;
                }
            },
            getPassword () {
                return (((this.firstName[0]).toUpperCase() + (this.lastName + this.birthday.slice(6)).toLowerCase()).trim());
            },
        }
        return newUser;
    }

    const firstUser = createNewUser();

    console.log(firstUser.getLogin());
    console.log(firstUser.getAge());
    console.log(firstUser.getPassword());










