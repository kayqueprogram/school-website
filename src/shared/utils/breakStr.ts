export function breakStr(str:string) {
    const splitStr = str.split('.');
    const resArr = [];
    for (let i = 0; i < splitStr.length; i += 4) {
      const currStr = splitStr[i].trim();
      if (currStr.length > 0) {
        let nextStr = splitStr[i+1] ? splitStr[i+1].trim() : '';
        if (nextStr.length > 0) {
          nextStr = nextStr[0] === ' ' ? nextStr.slice(1) : nextStr;
          resArr.push(`${currStr}. ${nextStr}.`);
        } else {
          resArr.push(`${currStr}.`);
        }
      }
    }
    return resArr;
}