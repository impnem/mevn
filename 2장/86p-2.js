/**
 * 86p-2
 */

let mp = new Map()
mp.set("사과", "딸기")
mp.set("포도", "배")
console.log(mp.get("사과"))
for(const a of mp) console.log(a)
console.log(Symbol.iterator in mp)
/*
딸기
[ '사과', '딸기' ]
[ '포도', '배' ]
true
*/