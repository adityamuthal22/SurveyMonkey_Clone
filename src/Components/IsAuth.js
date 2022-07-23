export const isAuth = () => {

    if (localStorage.getItem('Email')) {
        return JSON.parse(localStorage.getItem('Email'));
    } else {
        return false;
    }
}