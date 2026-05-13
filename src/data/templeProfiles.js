
export const templeProfiles={
 common:{id:'common',name:'通用藏傳版',description:'常見藏傳佛教修行日邏輯。',emphasis:['供燈','持咒','供水','迴向'],extraDays:[]},
 gelug:{id:'gelug',name:'格魯版',description:'偏重聞思、供燈、誦經與發願。',emphasis:['聞法','誦經','供燈','發願'],extraDays:[{month:10,day:25,name:'宗喀巴大師紀念日（示意）',type:'master',multiplier:'practice',good:['供燈','誦經','祈願智慧'],note:'請依寺院年曆校正。'}]},
 nyingma:{id:'nyingma',name:'寧瑪版',description:'偏重蓮師日、薈供與除障。',emphasis:['蓮師心咒','薈供','供燈','除障'],extraDays:[]},
 kagyu:{id:'kagyu',name:'噶舉版',description:'偏重上師相應、持咒與禪修。',emphasis:['上師相應','禪修','持咒','迴向'],extraDays:[]},
 sakya:{id:'sakya',name:'薩迦版',description:'偏重祈願、供養與聞思。',emphasis:['祈願','供養','聞思','迴向'],extraDays:[]},
 taiwan:{id:'taiwan',name:'台灣寺院版',description:'預留台灣寺院逐年校正資料欄位。',emphasis:['供燈','共修','法會','迴向'],extraDays:[{solar:'2026-05-01',name:'台灣寺院校正示例',type:'templeCorrection',multiplier:'校正日',good:['法會','供燈','共修'],note:'可替換成真實寺院資料。'}]}
};
