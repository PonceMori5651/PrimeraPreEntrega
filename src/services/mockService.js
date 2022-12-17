import item from "../data/item";

function getItems(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(item)
        }, 2000)
        });
}

export default getItems;    