

var gato = SVG(document.getElementById('gato'));
gato.style.minWidth = window.innerWidth;
gato.style.minHeight = window.innerHeight;

var eyeCloseTime = 1000 * 3;
var userIsIdleMaxTime = 1000 * 15;



var flatEarR = "M 145.66509,25.1044833 C 131.57491 35.378421000000003 130.95327 46.125724 130.95327 46.125724 L 99.45709 27.211679Z ";
var flatEarL = "M 58.069616 25.2868833 C 65.159782 26.560824 72.781437 46.308134 72.781437 46.308134 L 87.277611 27.394095 Z"

var flatEarPuffedL = "M 58.069616 25.2868833 C 53.159782 40.560824 72.781437 46.308134 72.781437 46.308134 L 87.277611 27.394095 Z";
var flatEarPuffedR = "M 145.66509,25.1044833 C 150.57491 42.378421000000003 130.95327 46.125724 130.95327 46.125724 L 99.45709 27.211679Z ";

var rStraight = "m 128.66509,9.1044833 c 2.90982,17.2739377 2.28818,37.0212407 2.28818,37.0212407 L 116.45709,27.211679 Z";
var lStraight = "M 75.069616 9.2868833 C 72.159782 26.560824 72.781437 46.308134 72.781437 46.308134 L 87.277611 27.394095Z ";


var tail = SVG(document.getElementById('tail'));
var body = SVG(document.getElementById('body-redo'));

var earL = SVG(document.getElementById('ear-l'));
var earR = SVG(document.getElementById('ear-r'));
var eyeballLCover = SVG(document.getElementById('eyeball-l-cover'));
var coverBaseY = eyeballLCover.children()[0].y();
var eyeballRCover = SVG(document.getElementById('eyeball-r-cover'));
var irisR = SVG(document.getElementById('iris-r')).children()[0];
var irisRClientLoc =document.getElementById('iris-r').getBoundingClientRect().left
var irisRbaseX = irisR.x(); 
var irisRIsMoving = false;
var irisL = SVG(document.getElementById('iris-l')).children()[0];
var irisLClientLoc =document.getElementById('iris-l').getBoundingClientRect().left
var irisLbaseX = irisL.x();
var irisLIsMoving = false;
var maxIrisDist = 2.5;
var earRpath = earR.children()[0];
var earLpath = earL.children()[0];
var eyesOpen = false;


var toungeIsOut = false;
var toungeEl = SVG(document.getElementById('tounge'));
var toungeElips = toungeEl.children()[0];
var toungeElipsBaseY = toungeElips.y();
var toungePath = toungeEl.children()[1];
var toungePathBaseY = toungePath.y();
var maxToungeOut = 20;


var extensionNum = 1;

var extensionMultiplier = 1;

//Lower Body (expandable in other words)
var toesL = SVG(document.getElementById('toes-l'));
var toesR = SVG(document.getElementById('toes-r'));
var legL = SVG(document.getElementById('leg-l'));
var legLCover = SVG(document.getElementById('leg-l-cover'));
var legR = SVG(document.getElementById('leg-r'));
var legRCover = SVG(document.getElementById('leg-r-cover'));

var numberOfViews = -1;

/*
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
var gato = SVG(document.getElementById('gato'));
*/


function expandByFactor(factor){

    
    var increaseAmnmt = (factor * extensionMultiplier)


    var backdrop = document.getElementById('backdrop');

    var bodyRect = body.children()[0];
    var baseBodyHeight = bodyRect.height()
    bodyRect.height(baseBodyHeight + increaseAmnmt);

    toesL.y(toesL.y() + increaseAmnmt);
    toesR.y(toesR.y() + increaseAmnmt);
    legL.y(legL.y() + increaseAmnmt);
    legLCover.y(legLCover.y() + increaseAmnmt);
    legR.y(legR.y() + increaseAmnmt);
    legRCover.y(legRCover.y() + increaseAmnmt);
    tail.y(tail.y() + increaseAmnmt);


    //framing shit
    var oldBdHeight = parseInt(backdrop.style.height.replace('px',''));
    

    var origGatoHeight = gato.height();
    gato.height(origGatoHeight + increaseAmnmt)
    //backdrop.style.height = oldBdHeight + increaseAmnmt;
    //backdrop.style.top = backdrop.style.top - increaseAmnmt ;
    bodyRect.ry(17.508043);
    bodyRect.rx(29.444492);
    //gato.style.height += baseBodyHeight + increaseAmnmt;

    
    var outer = document.getElementById('outer-container');
    var outerHeight = outer.style.height.replace('px','');
    outerHeight = parseInt(outerHeight);
    
    outer.style.height = outerHeight + (increaseAmnmt * 4);
    
    
}

function straightenEars(){
    console.log('straightening ears');
    var earRpath = earR.children()[0];
    var earLpath = earL.children()[0];

    earLpath.animate(200).plot(lStraight);
    earRpath.animate(200).plot(rStraight);

} 


function flattenEars(ease){
    console.log('flattening ears')
    
    //m 128.66509,9.1044833 c 2.90982,17.2739377 2.28818,37.0212407 2.28818,37.0212407 L 116.45709,27.211679 Z
    earRpath.animate(ease ? 4000 : 200).plot(flatEarR);

    //M 75.069616 9.2868833 C 72.159782 26.560824 72.781437 46.308134 72.781437 46.308134 L 87.277611 27.394095Z 
    earLpath.animate(ease ? 4000 : 200).plot(flatEarL);
    //puffFlattenedEars(false);
}


async function puffFlattenedEars(loop){
    console.log(`puffing ears, looped: ${loop}`);

    earLpath.animate(12000).plot(flatEarPuffedL).loop(loop);
    earRpath.animate(12000).plot(flatEarPuffedR).loop(loop);
    
}

function openEyes(){
    if(!eyesOpen){
        console.log('opening eyes');
        var eyeballRCoverChild = eyeballRCover.children()[0];
        var eyeballLCoverChild = eyeballLCover.children()[0];
        eyeballLCoverChild.height(0);
        eyeballRCoverChild.height(0);
        
        eyesOpen=true;
    }

}

function closeEyes(){
    if(eyesOpen){
        console.log('closing eyes');    
        var eyeballRCoverChild = eyeballRCover.children()[0];
        var eyeballLCoverChild = eyeballLCover.children()[0];
        
        
        eyeballLCoverChild.height(12)
        eyeballRCoverChild.height(12)
        eyesOpen=false;
    }
}


function trackMouseWithEyes(x, y){
    if(x < irisLClientLoc && irisL.x() != irisLbaseX - maxIrisDist && !irisLIsMoving){
        //console.log('moving left');
        irisLIsMoving= true;
        irisL.animate(100).x(irisLbaseX - maxIrisDist);
    }else if( x > irisLClientLoc && irisL.x() != irisLbaseX + maxIrisDist && !irisLIsMoving){
        //console.log('moving right');
        irisLIsMoving= true;
        irisL.animate(100).x(irisLbaseX + maxIrisDist);
    }else{
        irisLIsMoving = false;
    }

    if(x < irisRClientLoc && irisR.x() != irisRbaseX - maxIrisDist && !irisRIsMoving){
        //console.log('moving left');
        irisRIsMoving= true;
        irisR.animate(100).x(irisRbaseX - maxIrisDist);
    }else if( x > irisRClientLoc && irisR.x() != irisRbaseX + maxIrisDist && !irisRIsMoving){
        //console.log('moving right');
        irisRIsMoving= true;
        irisR.animate(100).x(irisRbaseX + maxIrisDist);
    }else{
        irisRIsMoving = false;
    }
}

function stickToungeOut(){
    if(!toungeIsOut){
        console.log('extending tounge');
        toungePath.animate(2000).y(toungePathBaseY + maxToungeOut);
        toungeElips.animate(2000).y(toungeElipsBaseY  + maxToungeOut);
        toungeIsOut = true;
    }
}

function retractTounge(){
    if(toungeIsOut){
        console.log('retracting tounge');
        toungePath.animate(2000).y(toungePathBaseY);
        toungeElips.animate(2000).y(toungeElipsBaseY);
        toungeIsOut = false;
    }
}

function mlem(){
    console.log('mlem');
    toungePath.animate(2000).y(toungePathBaseY + 10);
    toungeElips.animate(2000).y(toungeElipsBaseY  + 10);
    toungeIsOut = true;
}



document.addEventListener("click", () => {
        straightenEars();
        if(eyesOpen)
            closeEyes();
        else  
            openEyes();
        
        if(toungeIsOut){
            retractTounge();
        }else{
            stickToungeOut();
        }

        //expandByFactor(1);
    }
    
    
);

    

var waitCount;
onmousemove = function(e){
    if(eyesOpen){
        trackMouseWithEyes(e.clientX, e.clientY);
    }
}

var trackIdle = function () {
    var time;
    var time2;
    window.onload = resetTimer;
    // DOM Events
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;

    function logout() {
        console.log('user has gone idle');
        closeEyes();
        flattenEars( true);
        mlem();
        //location.href = 'logout.html'
    }
    function rest(){
        closeEyes();
    }

    function resetTimer() {
        clearTimeout(time);
        clearTimeout(time2);
        openEyes();
        time = setTimeout(logout, userIsIdleMaxTime)
        time2 = setTimeout(rest, eyeCloseTime)
        // 1000 milliseconds = 1 second
    }
};

async function getViews(){
    return await $.ajax({
        url: 'http://localhost:5000/AccessLogging',
        type: 'GET',
        crossDomain: true,
        success: function(data){
            //console.log('number of views');
            //console.log(data);
            expandByFactor(data);
            numberOfViews = data;
            document.getElementById('gato').style.visibility = "visible";
        }
    });
}
//set backdrop to window height

window.addEventListener('load', (event) => {
    var backdrop = document.getElementById('backdrop');
    var outer = document.getElementById('outer-container');

    outer.style.height = window.innerHeight;
    backdrop.style.height = window.innerHeight;

    gato.width(window.innerWidth);
    gato.height(window.innerHeight);
   

    //var submitView;

    getViews();
    openEyes();
    trackIdle();
  });



//trackEyeClose();
