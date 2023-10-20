const stroyUnitCnt = 5;
const eventUnitCnt = 2;
const nomalUnitCnt = 31;
const limitUnitCnt = 21;
const seasonalUnitCnt = 3;
const collabUnitCnt = 6;
const monsterCnt = 10;;


const rlArkCnt = 0;
const rslArkCnt = 0;
const reArkCnt = 0;
const rcArkCnt = 0;
const rgArkCnt = 26;
const rArkTcnt = rgArkCnt + rcArkCnt + rlArkCnt;

const srgArkCnt = 22;
const srcArkCnt = 2;
const srlArkCnt = 0;
const srslArkCnt = 1;
const sreArkCnt = 0;
const srArkTcnt = srcArkCnt + srlArkCnt + srgArkCnt + srslArkCnt + sreArkCnt;

const ssrgArkCnt = 43;
const ssrcArkCnt = 4;
const ssreArkCnt = 1;
const ssrslArkCnt = 1;
const ssrlArkCnt = 1;
const ssrArkTCnt = ssrgArkCnt + ssrcArkCnt + ssrlArkCnt + ssrslArkCnt + ssreArkCnt;

const ureArkCnt = 1;
const urgArkCnt = 6;
const urArkTCnt = ureArkCnt + urgArkCnt;

const lreArkCnt = 2;
const lrslArkCnt = 0;
const lrlArkCnt = 0;
const lrcArkCnt = 0;
const lrgArkCnt = 0;
const lrArkTCnt = lreArkCnt + lrgArkCnt + lrslArkCnt + lrlArkCnt;

const maxUnitCnt = stroyUnitCnt + eventUnitCnt + nomalUnitCnt + limitUnitCnt + seasonalUnitCnt + collabUnitCnt + monsterCnt;
const maxArkCnt  = rArkTcnt + srArkTcnt + ssrArkTCnt + lrArkTCnt + urArkTCnt;     

const unitInfo = {
    collab :    { rate : "collab",   cnt : collabUnitCnt,   title : "콜라보(" + collabUnitCnt + ")"      }, 
    limit  :    { rate : "limit",    cnt : limitUnitCnt,    title : "영웅 강림(" + limitUnitCnt + ")"    }, 
    seasonal  : { rate : "seasonal", cnt : seasonalUnitCnt, title : "계절 한정(" + seasonalUnitCnt + ")" }, 
    nomal  :    { rate : "nomal",    cnt : nomalUnitCnt,    title : "통상(" + nomalUnitCnt + ")"         }, 
    event  :    { rate : "event",    cnt : eventUnitCnt,    title : "이벤트(" + eventUnitCnt + ")"       }, 
    story  :    { rate : "story",    cnt : stroyUnitCnt,    title : "스토리(" + stroyUnitCnt + ")"       }, 
    monster :   { rate : "monster",  cnt : monsterCnt,      title : "몬스터(" + monsterCnt + ")"         }, 
};
const arkInfo = {
    ur :  { rate : "ur",  tcnt : urArkTCnt,  gcnt : urgArkCnt,  eCnt : ureArkCnt, title : "UR(" + urArkTCnt +")"}, 
    lr :  { rate : "lr",  tcnt : lrArkTCnt,  gcnt : lrgArkCnt,  eCnt : lreArkCnt,  slimitCnt : lrslArkCnt,  limitCnt : lrlArkCnt,  collabCnt : lrcArkCnt,  title : "LR(" + lrArkTCnt +")"}, 
    ssr : { rate : "ssr", tcnt : ssrArkTCnt, gcnt : ssrgArkCnt, eCnt : ssreArkCnt, slimitCnt : ssrslArkCnt, limitCnt : ssrlArkCnt, collabCnt : ssrcArkCnt, title : "SSR(" + ssrArkTCnt +")" }, 
    sr :  { rate : "sr",  tcnt : srgArkCnt,  gcnt : srgArkCnt,  eCnt : sreArkCnt,  slimitCnt : srslArkCnt,   limitCnt : srlArkCnt,  collabCnt : srcArkCnt,  title : "SR(" + srArkTcnt +")"   }, 
    r :   { rate : "r",   tcnt : rArkTcnt,   gcnt : rgArkCnt,   eCnt : reArkCnt,   slimitCnt : rslArkCnt,   limitCnt : rlArkCnt,   collabCnt : rcArkCnt,   title : "R(" + rArkTcnt +")"     },
};

let unitHtml = "";
let arkHtml = "";
let entireHtml = "";

function fncRenderHtml(){
    const div_unit = document.querySelector("#unit");
    const div_ark = document.querySelector("#ark");
    const div_entire = document.querySelector("#scDiv");
    let index = 0;

    document.querySelector("#maxUnit").innerHTML = maxUnitCnt;
    document.querySelector("#maxArk").innerHTML = maxArkCnt;            
    document.querySelector("#maxEntire").innerHTML = maxUnitCnt + maxArkCnt;            
    
    for(let key in unitInfo){ unitHtml += fncCreateUnitHtml(unitInfo[key], index); index++; }
    index = 0;
    entireHtml += '<br/>';
    for(let key in arkInfo) { arkHtml += fncCreateArkHtml(arkInfo[key], index); index++; }

    div_unit.insertAdjacentHTML('beforeend', unitHtml);
    div_ark.insertAdjacentHTML('beforeend', arkHtml);   
    div_entire.insertAdjacentHTML('beforeend', entireHtml);   
    document.querySelector("#currunit").innerHTML = document.querySelectorAll('#unit .iactive').length;
    document.querySelector("#currark").innerHTML = document.querySelectorAll('#ark .iactive').length;
    document.querySelector("#currentire").innerHTML = document.querySelectorAll('#entire .iactive').length;
}

function fncCreateTitleHtml(index, title){
    let returnHtml = "";   
    returnHtml += '<div class="container-fluid">'+
                        '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
                            '<div class="panel panel-default">'+
                                '<div class="panel-heading mt-3 mb-3" role="tab" style="border-bottom: 3px solid white;">'+
                                    '<a class="brancht" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse'+index+'" aria-expanded="false">'+title+'</a>'+                                            
                                '</div>'+
                            '<div id="collapse'+index+'" class="panel-collapse collapse show" role="tabpanel">'+
                        '<div class="panel-body">'; 
    return returnHtml;                                    
}

function fncCreateUnitHtml(item, index){                        
    let returnHtml = "";  
    let isIactive = "";
    if(item.cnt > 0){                
        returnHtml += fncCreateTitleHtml(index, item.title);                            
        for(let i = 1; i <= item.cnt; ++i){
            isIactive = localStorage.getItem("unit" + (item.rate + i)) !== null;
            returnHtml += '<img class="unit '+ (isIactive ? "iactive" : "") + '" id="unit'+(item.rate + i)+'" src="./unit/'+item.rate+'/'+i+'.png" onclick="fncSelect(unit'+(item.rate + i)+',0)">'; 

            isIactive = localStorage.getItem("entire" + (item.rate + i)) !== null;
            entireHtml += '<img class="unit '+ (isIactive ? "iactive" : "") + '" id="entire'+(item.rate + i)+'" src="./unit/'+item.rate+'/'+i+'.png" onclick="fncSelect(entire'+(item.rate + i)+',2)">'; 
        }
        returnHtml += '</div></div></div></div></div>';
    }         
    return returnHtml;
}

function fncCreateArkHtml(item, index){            
    let returnHtml = "";               
    if(item.tcnt > 0){
        returnHtml += fncCreateTitleHtml("A" + index, item.title); 
        returnHtml += item.gcnt > 0 ? '<p class="pst">통상</p>' : '';
        for(let i = 1; i <= item.gcnt; ++i){ 
            isIactive = localStorage.getItem("ark" + (item.rate + i)) !== null;
            returnHtml += '<img class="'+ (isIactive ? "iactive" : "") + '" id="ark'+(item.rate+ i)+'" src="./ark/'+ item.rate +'/'+i+'.png" onclick="fncSelect('+("ark"+item.rate+i)+',1)">'; 

            isIactive = localStorage.getItem("entire" + (item.rate + i)) !== null;
            entireHtml += '<img class="'+ (isIactive ? "iactive" : "") + '" id="entire'+(item.rate+ i)+'" src="./ark/'+ item.rate +'/'+i+'.png" onclick="fncSelect('+("entire"+item.rate+i)+',2)">';
        }
        if(item.eCnt > 0){ 
            returnHtml += item.gcnt > 0 ? '<br>' : '';
            returnHtml += '<p class="pst">이벤트</p>';
            for(let i = 1; i <= item.eCnt; ++i){ 
                isIactive = localStorage.getItem("arke" + (item.rate + i)) !== null;
                returnHtml += '<img class="'+ (isIactive ? "iactive" : "") + '" id="arke'+(item.rate+ i)+'" src="./ark/'+ item.rate +'/e/'+i+'.png" onclick="fncSelect('+("arke"+item.rate+i)+',1)">';  

                isIactive = localStorage.getItem("entiree" + (item.rate + i)) !== null;                       
                entireHtml += '<img class="'+ (isIactive ? "iactive" : "") + '" id="entiree'+(item.rate+ i)+'" src="./ark/'+ item.rate +'/e/'+i+'.png" onclick="fncSelect('+("entiree"+item.rate+i)+',2)">';                                                 
            }
        }
        if(item.limitCnt > 0){ 
            returnHtml += '<br><p class="pst">한정</p>';
            for(let i = 1; i <= item.slimitCnt; ++i){ 
                isIactive = localStorage.getItem("arkl" + (item.rate + i)) !== null;
                returnHtml += '<img class="'+ (isIactive ? "iactive" : "") + '" id="arkl'+(item.rate+ i)+'" src="./ark/'+ item.rate +'/l/'+i+'.png" onclick="fncSelect('+("arkl"+item.rate+i)+',1)">';  

                isIactive = localStorage.getItem("entirel" + (item.rate + i)) !== null;                       
                entireHtml += '<img class="'+ (isIactive ? "iactive" : "") + '" id="entirel'+(item.rate+ i)+'" src="./ark/'+ item.rate +'/l/'+i+'.png" onclick="fncSelect('+("entirel"+item.rate+i)+',2)">';                                                 
            }
        }
        if(item.slimitCnt > 0){ 
            returnHtml += '<br><p class="pst">계절 한정</p>';
            for(let i = 1; i <= item.slimitCnt; ++i){ 
                isIactive = localStorage.getItem("arksl" + (item.rate + i)) !== null;
                returnHtml += '<img class="'+ (isIactive ? "iactive" : "") + '" id="arksl'+(item.rate+ i)+'" src="./ark/'+ item.rate +'/sl/'+i+'.png" onclick="fncSelect('+("arksl"+item.rate+i)+',1)">';  

                isIactive = localStorage.getItem("entiresl" + (item.rate + i)) !== null;                       
                entireHtml += '<img class="'+ (isIactive ? "iactive" : "") + '" id="entiresl'+(item.rate+ i)+'" src="./ark/'+ item.rate +'/sl/'+i+'.png" onclick="fncSelect('+("entiresl"+item.rate+i)+',2)">';                                                 
            }
        }
        if(item.collabCnt > 0){ 
            returnHtml += '<br><p class="pst">콜라보</p>';
            for(let i = 1; i <= item.collabCnt; ++i){ 
                isIactive = localStorage.getItem("arkc" + (item.rate + i)) !== null;
                returnHtml += '<img class="'+ (isIactive ? "iactive" : "") + '" id="arkc'+(item.rate+i)+'" src="./ark/'+ item.rate +'/c/'+i+'.png" onclick="fncSelect('+("arkc"+item.rate+i) + ',1)">'; 

                isIactive = localStorage.getItem("entirec" + (item.rate + i)) !== null;                       
                entireHtml += '<img class="'+ (isIactive ? "iactive" : "") + '" id="entirec'+(item.rate+i)+'" src="./ark/'+ item.rate +'/c/'+i+'.png" onclick="fncSelect('+("entirec"+item.rate+i) + ',2)">'; 
            }
        }
        returnHtml += '</div></div></div></div></div>';
    }
    return returnHtml;
}

function fncSelect(target, isType){        
    let branch = "#curr" + (isType == 0 ? "unit" : isType == 1 ? "ark" : "entire");
    let currCnt = Number(document.querySelector(branch).innerHTML);
    if(localStorage.getItem(target.id) !== null){
        target.style.opacity = 0.3;
        document.querySelector(branch).innerHTML = currCnt-1;
        localStorage.removeItem(target.id);
    }   
    else{
        target.style.opacity = 1;
        document.querySelector(branch).innerHTML = currCnt+1;
        localStorage.setItem(target.id, "");
    }       
    return false;
}

function fncAllSelect(type){
    let saveType = type == "entire" ?  "scDiv" : type;            
    document.querySelector("#curr" + type).innerHTML = (saveType === "unit" ? maxUnitCnt :  saveType === "ark" ? maxArkCnt : maxUnitCnt + maxArkCnt);
    document.querySelectorAll("#" +  type + " img").forEach(function(item){ item.style.opacity = 1 }); 
    document.querySelectorAll("#" + saveType + " img").forEach(function(e){ localStorage.setItem(e.id, ""); })
    return false;
}
function fncReset(type){
    let saveType = type == "entire" ?  "scDiv" : type;     
    document.querySelector("#curr" + type).innerHTML = 0;
    document.querySelectorAll("#" +  type + " img").forEach(function(item){ item.style.opacity = 0.3 }); 
    document.querySelectorAll("#" + saveType + " img").forEach(function(e){ localStorage.removeItem(e.id); })
    return false;
}

function fncDownload(div){
    domtoimage.toBlob(document.getElementById(div)).then(function (blob) {
        window.saveAs(blob, 'LastCloudia_KR_CheckList.png');
    });
    return false;
}
