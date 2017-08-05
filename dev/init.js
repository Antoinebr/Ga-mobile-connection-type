window.addEventListener("load", function(event) {

  try {
  
    (new gaMobileConnectivity()).init();

  } catch (error) {

    console.log('[GaConnect] ', 'Error :( ', error);

  }

});



