export const setCookie = (cname: string, cvalue: string) => {
    return document.cookie = cname + "=" + cvalue + ";"
  };
  

export const getCookie = (cname: string) => {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const eraseCookie = (cname: string) => {
  return document.cookie = cname+'=; Max-Age=-99999999;';  
};

export const generateKey = (length: number) => {
    var result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
