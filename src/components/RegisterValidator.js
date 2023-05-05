import axios from "axios";

 const registerValidator = (username, surname, email, password) =>{
    try{
        const response =  axios({
            url:"http://192.190.42.194:5003/api/Users/Register",
            method: 'POST',
            data: {
                "fullname": username + " " + surname,
                "email": email,
                "password": password
            }
        }).then(response => console.log(response.status))
    }catch{
        console.log("No sirvio pa ni mrda");
    }
    
}

export {registerValidator};