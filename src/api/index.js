import Avengers from './avengerList';

export const getAvengers=()=>{
    return new Promise(res=>{
        setTimeout(() => {
            res(Avengers);
        }, 1000);
    });
}