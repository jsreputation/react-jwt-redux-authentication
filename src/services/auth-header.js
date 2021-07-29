export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return { Authorization: 'Bearer' + user.accessToken }
        // In case Express is used for backend, please use x-access-token
        // return { 'x-access-token': user.accessToken }; 
    } else {
        return  {};
    }
}