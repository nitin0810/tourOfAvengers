import Avengers from './avengerList';

export const getAvengers=()=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(Avengers);
            // rej('Error');
        }, 1000);
    });
}