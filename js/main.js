;(function (){
  'use strict'

//http://gsgd.co.uk/sandbox/jquery/easing/

  var tl = new TimelineMax();
  TweenMax.set('#testbox',{width:600});

  $('#testbox').on({
    mouseenter: function(){
      var current  = $(this)
      TweenMax.to(current, 1.75, {width:'100%', backgroundColor:'#000', ease:Expo.easeInOut});
    },
    mouseleave: function(){
      var current  = $(this)
      TweenMax.to(current, 0.75, {width:200, ease:Expo.easeInOut},2.275);
    }
  });

  ////CREARE 2 bottoni affiancati,
  //che all'hover abbiano lo sfondo che si colora come l'esempio fatto in classe
  //e che al click, prima di cambiare pagina facciano uscire il background lateralmente
}())
