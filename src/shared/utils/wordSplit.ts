
export default function wordSplit(str:string,qty:number){
    const words = str.split(" ");
    return words.slice(0, qty).join(" ");
}