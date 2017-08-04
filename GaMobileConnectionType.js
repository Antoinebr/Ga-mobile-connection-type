gaMobileConnectivity = function(){


  this.getConnectionName = function(type, downlinkMax){

    if( type === 'cellular') {
    
      if(downlinkMax > 42)  return '4G';

      if (downlinkMax <= 42 && downlinkMax > 14.7) return '3GFAST';

      if (downlinkMax >= 2 && downlinkMax < 14.7) return '3GSLOW';

      if (downlinkMax < 2) return '2G';

    }
    
    
    if( type === 'wifi') {
    
      if(downlinkMax <= 11)  return 'SLOW';
      
      if(downlinkMax >= 54 && downlinkMax < 6933)  return 'G';
      
      if(downlinkMax >= 6933 && downlinkMax < 7000 )  return 'AC';
      
      if(downlinkMax >= 7000 )  return 'AD';

    }
    
    
    if ( type === 'unknow') return false;
    
    return false;

  }


  this.getLoadTime = function() {

        if(!window.performance){
            
            return performance.timing.loadEventStart - performance.timing.navigationStart;

        }

  }



  this.getConnectionType = function() {

    if ('connection' in navigator && 'downlinkMax' in navigator.connection ){
        
      connectionType = navigator.connection.type;
      
      downlinkMax = navigator.connection.downlinkMax;

      return {type : connectionType, max: downlinkMax};

    }

    return false;

  }



  this.sendToGA = function(connection) {

    ga('send', 'event', 'connectivity', connection.type, connection.name, {nonInteraction: true});

    ga('send', 'timing', 'FirstView', 'loadTime', this.getLoadTime());

    this.createCookie('gaConnectivitySent', true,10);

    console.log('[GaConnect] ',connection.type, connection.name,' sent !');

    console.log('[GaConnect] load time sent : ', this.getLoadTime() );

    return true; 
    
  }


  this.track = function() {
    
   
    if( this.getCookieValue('gaConnectivitySent') !== "" ){

      console.log('[GaConnect] ','Cookie detected it\'s not the first view');

      return false;

    } 


    var connection = this.getConnectionType();

    if(connection){

      connection.name =  this.getConnectionName(connection.type ,connection.max);
      
      if(connection.name && connection.type ) this.sendToGA(connection);
         
    }

    return false; 

  }


  this.init = function(){

    if (typeof ga === 'function') this.track();

    else setTimeout(this.init,500);

  }


  this.getCookieValue = function(a) {var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');return b ? b.pop() : '';}
  
  this.createCookie = function(name, value, days) {if (days) {var date = new Date();date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));var expires = "; expires=" + date.toGMTString();} else var expires = "";document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";}


}



window.addEventListener("load", function(event) {


  try {
  
    (new gaMobileConnectivity()).init();

  } catch (error) {

    console.log('[GaConnect] ', 'Error :( ', error);

  }

});


