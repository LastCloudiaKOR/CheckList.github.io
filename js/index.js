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

const ssrgArkCnt = 44;
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
    ur :  { rate : "ur",  tcnt : urArkTCnt,  gcnt : urgArkCnt,  eCnt : ureArkCnt,  title : "UR(" + urArkTCnt +")"}, 
    lr :  { rate : "lr",  tcnt : lrArkTCnt,  gcnt : lrgArkCnt,  eCnt : lreArkCnt,  slimitCnt : lrslArkCnt,  limitCnt : lrlArkCnt,  collabCnt : lrcArkCnt,  title : "LR(" + lrArkTCnt +")"}, 
    ssr : { rate : "ssr", tcnt : ssrArkTCnt, gcnt : ssrgArkCnt, eCnt : ssreArkCnt, slimitCnt : ssrslArkCnt, limitCnt : ssrlArkCnt, collabCnt : ssrcArkCnt, title : "SSR(" + ssrArkTCnt +")" }, 
    sr :  { rate : "sr",  tcnt : srgArkCnt,  gcnt : srgArkCnt,  eCnt : sreArkCnt,  slimitCnt : srslArkCnt,  limitCnt : srlArkCnt,  collabCnt : srcArkCnt,  title : "SR(" + srArkTcnt +")"   }, 
    r :   { rate : "r",   tcnt : rArkTcnt,   gcnt : rgArkCnt,   eCnt : reArkCnt,   slimitCnt : rslArkCnt,   limitCnt : rlArkCnt,   collabCnt : rcArkCnt,   title : "R(" + rArkTcnt +")"     },
};

const imgUnitPath = '" src="./img/unit/';
const imgArkPath  = '" src="./img/ark/';
let unitHtml = '';
let arkHtml = '';
let entireHtml = '';
let returnHtml = '';   
let isIactive = '';
let index = 0;

function fncRenderHtml(){
    const div_unit   = document.querySelector("#unit");
    const div_ark    = document.querySelector("#ark");
    const div_entire = document.querySelector("#scDiv");

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

    document.querySelector("#currunit").innerHTML   = document.querySelectorAll('#unit .iactive').length;
    document.querySelector("#currark").innerHTML    = document.querySelectorAll('#ark .iactive').length;
    document.querySelector("#currentire").innerHTML = document.querySelectorAll('#entire .iactive').length;
}

function fncCreateTitleHtml(index, title){
    returnHtml = '';   
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
     returnHtml = '';  
    if(item.cnt > 0){                
        returnHtml += fncCreateTitleHtml(index, item.title);                            
        for(let i = 1; i <= item.cnt; ++i){
            isIactive = localStorage.getItem("unit_" + (item.rate + i)) !== null;
            returnHtml += '<img class="unit '+ (isIactive ? 'iactive' : '') 
                            +'" id="unit_'+(item.rate + i) + imgUnitPath + item.rate+'/'+i+'.png" onclick="fncSelect(unit_'+(item.rate + i)+',0)">'; 

            isIactive = localStorage.getItem("entire_" + (item.rate + i)) !== null;
            entireHtml += '<img class="unit '+ (isIactive ? 'iactive' : '')
                            +'" id="entire_'+(item.rate + i) + imgUnitPath + item.rate+'/'+i+'.png" onclick="fncSelect(entire_'+(item.rate + i)+',2)">'; 
        }
        returnHtml += '</div></div></div></div></div>';
    }         
    return returnHtml;
}

function fncCreateArkHtml(item, index){            
    returnHtml = '';               
    if(item.tcnt > 0)
    {
        returnHtml += fncCreateTitleHtml("A" + index, item.title); 
        returnHtml += item.gcnt > 0 ? '<p class="pst">통상</p>' : '';
        for(let i = 1; i <= item.gcnt; ++i){ 
            isIactive = localStorage.getItem("ark_" + (item.rate + i)) !== null;
            returnHtml += '<img class="'+ (isIactive ? 'iactive' : '') 
                            +'" id="ark_'+(item.rate+ i) + imgArkPath + item.rate +'/'+i+'.png" onclick="fncSelect('+("ark_"+item.rate+i)+',1)">'; 

            isIactive = localStorage.getItem("entire_" + (item.rate + i)) !== null;
            entireHtml += '<img class="'+ (isIactive ? 'iactive' : '') 
                            +'" id="entire_'+(item.rate+ i) + imgArkPath + item.rate +'/'+i+'.png" onclick="fncSelect('+("entire_"+item.rate+i)+',2)">';
        }
        if(item.eCnt > 0){ 
            returnHtml += item.gcnt > 0 ? '<br>' : '';
            returnHtml += '<p class="pst">이벤트</p>';
            for(let i = 1; i <= item.eCnt; ++i){ 
                isIactive = localStorage.getItem("ark_e" + (item.rate + i)) !== null;
                returnHtml += '<img class="'+ (isIactive ? 'iactive' : '') 
                                +'" id="ark_e'+(item.rate+ i) + imgArkPath + item.rate +'/e/'+i+'.png" onclick="fncSelect('+("ark_e"+item.rate+i)+',1)">';  

                isIactive = localStorage.getItem("entire_e" + (item.rate + i)) !== null;                       
                entireHtml += '<img class="'+ (isIactive ? 'iactive' : '') 
                                +'" id="entire_e'+(item.rate+ i) + imgArkPath + item.rate +'/e/'+i+'.png" onclick="fncSelect('+("entire_e"+item.rate+i)+',2)">';                                                 
            }
        }
        if(item.limitCnt > 0){ 
            returnHtml += '<br><p class="pst">한정</p>';
            for(let i = 1; i <= item.slimitCnt; ++i){ 
                isIactive = localStorage.getItem("ark_l" + (item.rate + i)) !== null;
                returnHtml += '<img class="'+ (isIactive ? 'iactive' : '') 
                                +'" id="ark_l'+(item.rate+ i) + imgArkPath + item.rate +'/l/'+i+'.png" onclick="fncSelect('+("ark_l"+item.rate+i)+',1)">';  

                isIactive = localStorage.getItem("entire_l" + (item.rate + i)) !== null;                       
                entireHtml += '<img class="'+ (isIactive ? 'iactive' : '') 
                                +'" id="entire_l'+(item.rate+ i) + imgArkPath + item.rate +'/l/'+i+'.png" onclick="fncSelect('+("entire_l"+item.rate+i)+',2)">';                                                 
            }
        }
        if(item.slimitCnt > 0){ 
            returnHtml += '<br><p class="pst">계절 한정</p>';
            for(let i = 1; i <= item.slimitCnt; ++i){ 
                isIactive = localStorage.getItem("ark_sl" + (item.rate + i)) !== null;
                returnHtml += '<img class="'+ (isIactive ? 'iactive' : '') 
                                +'" id="arks_sl'+(item.rate+ i) + imgArkPath + item.rate +'/sl/'+i+'.png" onclick="fncSelect('+("arks_sl"+item.rate+i)+',1)">';  

                isIactive = localStorage.getItem("entire_sl" + (item.rate + i)) !== null;                       
                entireHtml += '<img class="'+ (isIactive ? 'iactive' : '') 
                                +'" id="entire_sl'+(item.rate+ i) + imgArkPath + item.rate +'/sl/'+i+'.png" onclick="fncSelect('+("entire_sl"+item.rate+i)+',2)">';                                                 
            }
        }
        if(item.collabCnt > 0){ 
            returnHtml += '<br><p class="pst">콜라보</p>';
            for(let i = 1; i <= item.collabCnt; ++i){ 
                isIactive = localStorage.getItem("ark_c" + (item.rate + i)) !== null;
                returnHtml += '<img class="'+ (isIactive ? 'iactive' : '') 
                                +'" id="ark_c'+(item.rate+i) + imgArkPath + item.rate +'/c/'+i+'.png" onclick="fncSelect('+("ark_c"+item.rate+i) + ',1)">'; 

                isIactive = localStorage.getItem("entire_c" + (item.rate + i)) !== null;                       
                entireHtml += '<img class="'+ (isIactive ? 'iactive' : '') 
                                +'" id="entire_c'+(item.rate+i) + imgArkPath + item.rate +'/c/'+i+'.png" onclick="fncSelect('+("entire_c"+item.rate+i) + ',2)">'; 
            }
        }
        returnHtml += '</div></div></div></div></div>';
    }
    return returnHtml;
}

function fncSelect(target, isType){        
    let branch = '#curr' + (isType == 0 ? 'unit' : 'ark');

    if(localStorage.getItem(target.id) !== null){                
        target.style.opacity = 0.3;        
        localStorage.removeItem(target.id);
    }   
    else{   
        target.style.opacity = 1;        
        localStorage.setItem(target.id, '');
    }           
    fncCheckOtherItems(target);
    fncReloadCnt();    
    return false;
}

function fncCheckOtherItems(target){       
    let splitCheckId = target.id.split('_')[1]; 
    document.querySelectorAll('div img').forEach(function(e)
    {
        if(target.id !== e.id && splitCheckId === e.id.split('_')[1])
        {
             let isCheck = localStorage.getItem(e.id) == null;
             if(isCheck){
                 e.style.opacity = 1;
                 localStorage.setItem(e.id, '');
             }
             else{
                 e.style.opacity = 0.3;
                 localStorage.removeItem(e.id);
             }
             
        }
     });
    return false;
}

function fncAllSelect(type){
    if(type == 'entire'){
        document.querySelectorAll('div img').forEach(function(e){           
            localStorage.setItem(e.id, ''); 
            e.style.opacity = 1;
        });
    }
    else{
        document.querySelectorAll('#' + type + ' img').forEach(function(e){         
            localStorage.setItem(e.id, '');                 
            localStorage.setItem('entire_' + e.id.split('_')[1], ''); 
            e.style.opacity = 1;
            document.querySelector('#entire_' + e.id.split('_')[1]).style.opacity = 1;            
        });
    }    
    
    fncReloadCnt();
    return false;
}
function fncReset(type){
    if(type == 'entire'){
        localStorage.clear();    
        document.querySelectorAll('span[id^="curr"]').forEach(function(e){ e.innerHTML = 0; });
        document.querySelectorAll('img').forEach(function(e){ e.style.opacity = 0.3; })
    }
    else{
        document.querySelector('#curr' + type).innerHTML = '0';
        document.querySelectorAll('#' + type + ' img').forEach(function(e){             
            localStorage.removeItem(e.id); 
            localStorage.removeItem('entire' + e.id.split('_')[1]); 
            document.querySelector('#entire_' + e.id.split('_')[1]).style.opacity = 0.3;
            e.style.opacity = 0.3
        })
    }
    return false;
}

function fncReloadCnt(){    
    let entireCnt = 0;
    let arkCnt = 0;
    let unitCnt = 0;

    document.querySelectorAll('#scDiv img').forEach(function(e){ if(e.style.opacity == 1) entireCnt++; });
    document.querySelectorAll('#ark   img').forEach(function(e){ if(e.style.opacity == 1) arkCnt++;  });
    document.querySelectorAll('#unit  img').forEach(function(e){ if(e.style.opacity == 1) unitCnt++; });

    document.querySelector('#currentire').innerHTML = entireCnt;
    document.querySelector('#currark').innerHTML    = arkCnt;
    document.querySelector('#currunit').innerHTML   = unitCnt;

    return false;
}

function fncDownload(div){
    domtoimage.toBlob(document.getElementById(div)).then(function (blob) { window.saveAs(blob, 'LastCloudia_KOR_CheckList.png'); });
    return false;
}


