const keyName ='user';

function login(obj){
    let str = JSON.stringify(obj);
    localStorage.setItem(keyName,str);
}
function logout(){
    localStorage.removeItem(keyName);
}
function getUser(){
    const user = localStorage.getItem(keyName);
    return user ? JSON.parse(user) : null;
}
export default {
    login,
    logout,
    getUser
}