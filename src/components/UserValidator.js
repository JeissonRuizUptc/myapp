import axios from "axios";

const response = "";
 const userValidator = (username, password) =>{
    try{
        const response =  axios({
            url:"http://192.190.42.194:5003/api/Users/login",
            method: 'POST',
            data: {
                "email": username,
                "password": password
            }
        })
    }catch{
        console.log("No sirvio");
    }
    return response.HttpStatusCode;
}
 
export {userValidator};