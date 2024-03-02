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
function saveMsgs(items){
    let str = JSON.stringify(items);
    localStorage.setItem('messages',str);
}
function getMsgs(){
    const msgs = localStorage.getItem('messages');
    return msgs ? JSON.parse(msgs) :[];
}
export default {
    login,
    logout,
    getUser,
    saveMsgs,
    getMsgs
}