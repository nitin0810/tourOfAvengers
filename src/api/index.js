import Avengers from './avengerList';

export const getAvengers=()=>{
    return new Promise((res,rej)=>{

        const random = Math.random();

        setTimeout(() => {
            if(random<0.9){
                res(Avengers);
            }else{
                rej({msg:'Some error occured while loading'});
            }
        }, 1000);
    });
}