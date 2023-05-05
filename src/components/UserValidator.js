import axios from "axios";

const users = [
    {username: "jeisson", password: "123ABC"},
    {username: "daniel", password: "123ABC"}
];



//const userValidator2 = (username, password) =>{
//    return users.find(e => e.username === username) != null && users.find(e => e.password === username) != null; 
//}


 const userValidator = (username, password) =>{
    try{
        const response =  axios({
            url:"http://192.190.42.194:5003/api/Users/login",
            method: 'POST',
            data: {
                "email": username,
                "password": password
            }
        }).then(response => console.log(response))
    }catch{
        console.log("No sirvio pa ni mrda");
    }
    
}

export {userValidator};