;(function (){
  'use strict'

//http://gsgd.co.uk/sandbox/jquery/easing/


  ////CREARE 2 bottoni affiancati,
  //che all'hover abbiano lo sfondo che si colora come l'esempio fatto in classe
  //e che al click, prima di cambiare pagina facciano uscire il background lateralmente
  $.fn.doButton = function(options = {}) {

      var settings = $.extend({
                init: {scaleX:0, x:'0%'},
                start: {scaleX:1,x:'0%',  ease:Expo.easeInOut},
                end: {scaleX:0, x:'100%',  ease:Expo.easeInOut},
                time: 0.75,
                urlDelay: 1,
                callBack: function(e){},
                callBackDelay: function(e){
                  window.location = $(e.currentTarget).attr('href');
                },
            }, options );

      return this.each(function(){

        this.bg  = $(this).find('.bg');
        this.tl = new TimelineMax({ paused: true });
        this.tl.set(this.bg, settings.init);
        this.tl.to(this.bg, settings.time, settings.start);
        this.tl.to(this.bg, settings.time, settings.end);

        $(this).on({
          mouseenter: function(){
            this.tl.play();
          },
          mouseleave: function(){
            this.tl.reverse();
          },
          click: function(e){
            e.preventDefault();
            $(window).trigger('urlChange');
            clearTimeout(this.timeout)
            settings.callBack(e);
            this.timeout = setTimeout(function(){ settings.callBackDelay(e); }, settings.urlDelay * 1000);
          }
        });

      });
  };
  $('.stdBtn').doButton({
    callBack: function(){
      creaLivello();
    }
  });

  //1 leggiamo insieme la definizione del plugin e capiamone il funzionamento

  //2 focalizziamoci sul parametro callback
function creaLivello(){
  var $target = $('body');
  var $livello = $('<div id="livello"></div>');
  $livello.css({
    position:'fixed',
    left:0,
    top:0,
    zIndex:9999,
    width:'100%',
    height:'100%',
    background:'red',
    display:'none'
  });
  $target.append($livello);
  TweenLite.set($('#livello'), {scaleX:0, display:'block'})
  TweenLite.to($('#livello'), 1, {scaleX:1, ease:Expo.easeInOut});
}


$(document).ready(function(){

  TweenLite.to($('#livello'), 1, {scaleX:0, ease:Expo.easeInOut, onComplete: function(){
    $('#livello').remove();
  }});
})


  //3 riassumiamo cosa abbiamo studiato per oggi, in particolare il metodo load
  //http://api.jquery.com/load/

  //4 come possiamo usare AJAX per caricare un contenuto esterno?

  //5 come temporizzare un'animazione sugli eventi AJAX

}())
