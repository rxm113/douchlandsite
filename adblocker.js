(function(){
   var tapiID1 = document.getElementById("hidebannerlocation").getAttribute("intid1");
   var tapiID2 = document.getElementById("hidebannerlocation").getAttribute("intid2");
   var fwID1 = document.getElementById("hidebannerlocation").getAttribute("intid3");
   var fwID2 = document.getElementById("hidebannerlocation").getAttribute("intid4");

   // #cto_banner_content   Works for Criteo HTML and TextLink, but not Redirect (Ad tags, custom HTML...)
   // body > div[id^=main]:first-child   Works for Criteo HTML and Redirect, but not (all) TextLink
   var selectors = ["#cto_banner_content","body > div[id^=main]:first-child"];

   function loadTAPI(id1, id2){
      loadScript(id1, id2, 'fw.adsafeprotected.com/jsapi');
   }

   function loadFirewall(id1, id2){
      loadScript(id1, id2, 'pixel.adsafeprotected.com/rjss/st');
   }

   function loadScript(id1, id2, uri){
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = '//' + uri + '/' + id1 + '/' + id2 + '/skeleton.js?'
      var anchor = document.getElementsByTagName('script')[0];
      anchor.parentNode.insertBefore(script, anchor);
   }

   function hideBanners(selectors){
      selectors.forEach(function(selector){
         hideBanner(selector);
      });
   }

   function hideBanner(selector){
      var b = document.querySelectorAll(selector);
      b.forEach(function(banner,i){
         banner.style.visibility = 'hidden';
         banner.parentNode.style.visibility = 'hidden';
         banner.innerHTML = '';
         banner.parentNode.innerHTML = '';
      });
   }

   function setTAPIListener(){
      window.__IntegralASConfig = {
         onAPIResult: function(r){
            if (r.action !== "passed") {
                hideBanners(selectors);
            }else{
               if (fwID1 && fwID2){
                  loadFirewall(fwID1,fwID2);
               }
            }
         }
      };
   }

   function setIEPolyfill(){
      if ( typeof NodeList.prototype.forEach === "function" ) return false;
      NodeList.prototype.forEach = Array.prototype.forEach;
   }

   setIEPolyfill();
   setTAPIListener();
   loadTAPI(tapiID1,tapiID2);
})();
