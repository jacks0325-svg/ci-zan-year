
export const coreHolyDays=[
 {month:'any',day:8,name:'藥師佛日',type:'holy',multiplier:'practice',good:['藥師咒','供燈','祈願健康','迴向病苦眾生'],note:'每月藏曆初八。'},
 {month:'any',day:10,name:'蓮師日',type:'holy',multiplier:'practice',good:['蓮師心咒','薈供','供燈','祈請蓮師'],note:'每月藏曆初十。'},
 {month:'any',day:15,name:'佛日／滿月修行日',type:'holy',multiplier:'practice',good:['供燈','持咒','放生','誦經','發願'],note:'每月藏曆十五。'},
 {month:'any',day:25,name:'空行母日',type:'holy',multiplier:'practice',good:['薈供','供養','懺悔','迴向'],note:'每月藏曆二十五。'},
 {month:'any',day:29,name:'除障日',type:'holy',multiplier:'practice',good:['除障','懺悔','清淨環境','持咒'],note:'每月藏曆二十九。'},
 {month:'any',day:30,name:'護法日',type:'holy',multiplier:'practice',good:['護法供','除障','迴向','清淨環境'],note:'每月藏曆三十。'}
];
export const meritDays=[
 {month:1,day:1,name:'藏曆新年／神變月開始',type:'merit',multiplier:'100,000x',good:['供燈','持咒','發願','布施'],note:'請依寺院年曆逐年校正。'},
 {month:1,day:15,name:'神變節',type:'merit',multiplier:'10,000,000x',good:['供燈','誦經','持咒','放生'],note:'請依寺院年曆逐年校正。'},
 {month:4,day:15,name:'薩嘎達瓦',type:'merit',multiplier:'10,000,000x',good:['供燈','布施','持咒','放生','受持善行'],note:'請依寺院年曆逐年校正。'},
 {month:6,day:4,name:'轉法輪日',type:'merit',multiplier:'10,000,000x',good:['聞法','誦經','供燈','發願'],note:'紀念佛陀初轉法輪。'},
 {month:9,day:22,name:'天降日',type:'merit',multiplier:'10,000,000x',good:['供燈','供養','持咒','感恩迴向'],note:'紀念佛陀自忉利天下降。'}
];
function byTibetan(days,t){return days.filter(d=>(d.month==='any'||Number(d.month)===Number(t.month))&&Number(d.day)===Number(t.day));}
function bySolar(days,date){const k=`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;return days.filter(d=>d.solar===k);}
export function getHolyEvents(tibetan,date,profile){return[...byTibetan(meritDays,tibetan),...byTibetan(coreHolyDays,tibetan),...byTibetan(profile.extraDays||[],tibetan),...bySolar(profile.extraDays||[],date)];}
