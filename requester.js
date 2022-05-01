


function getData(ajaxurl, type) { 
    return $.ajax({
        url: ajaxurl,
        type: type,
        crossDomain: true,
    });
};

var Token = null;


async function getToken() {
    try {
        const res = await getData('https://localhost:7009/AccessLogging', 'POST')
        console.log('res')
        console.log(res)
        Token = res;
    } catch(err) {
        console.log('err');
        console.log(err);
    }
}

getToken();

//$(window).unload(function(){

    /*
    getData('https://localhost:7009/AccessLogging?token=' + Token, 'POST');
    $.ajax({
        url: 'https://localhost:7009/AccessLogging?token=' + Token,
        type:  'POST',
        crossDomain: true,
        async: false
    });
    */
   
	//navigator.sendBeacon('https://localhost:7009/AccessLogging?token=' + Token);
//});