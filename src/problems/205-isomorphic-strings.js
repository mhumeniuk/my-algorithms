/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const joinArr = (arrOfArrays) => {
  return arrOfArrays.map(a => a.join(":")).join(";");
}

//My version is very slow, faster than 5%
var isIsomorphic = function(s, t) {
  let sMap = {};
  let tMap = {};
  let sArr = s.split("");
  let tArr = t.split("");
  
  sArr.forEach((n,i) => {
      let key = `${n}key`;
      sMap[key] = sMap[key] ?? [];
      sMap[key].push(i)
  });
  
  tArr.forEach((n,i) => {
      let key = `${n}key`;
      tMap[key] = tMap[key] ?? [];
      tMap[key].push(i);
  });
  
  const sPattern = joinArr(Object.values(sMap));
  const tPattern = joinArr(Object.values(tMap));
  
  return sPattern === tPattern;
  
};

//better version

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
  const mapStoT = new Map();
  const mapTtoS = new Map();
  
  for(let i = 0 ; i < s.length; i++){
      const c1 = s[i];
      const c2 = t[i];
      
      if(!mapStoT.has(c1) && !mapTtoS.has(c2)){
          mapStoT.set(c1, c2);
          mapTtoS.set(c2,c1);
      }else if(!(mapStoT.get(c1) === c2 && mapTtoS.get(c2) === c1)) return false;
  }
  return true;
};