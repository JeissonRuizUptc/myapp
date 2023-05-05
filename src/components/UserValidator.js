import axios from "axios";

 const userValidator = (username, password) =>{
    try{
        const response =  axios({
            url:"http://192.190.42.194:5003/api/Users/login",
            method: 'POST',
            data: {
                "email": username,
                "password": password
            }
        }).then(response => console.log(response.status))
    }catch{
        console.log("No sirvio pa ni mrda");
    }
    
}

export {userValidator};