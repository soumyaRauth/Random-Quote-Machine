

$(document).ready(function(){
  var x;
  $('#clickquote').click(function(){
    $('.thequote').text(generator());
  //--s-----
      
  //generator function goes below
    
    function generator(){
 
      
      
      //-------
     var quotes=["The best way to find yourself is to lose yourself in the service of others---Mahatma Gandhi","The best way to find out if you can trust somebody is to trust them---Earnest Hemingway", "The best way to cheer yourself up is to try to cheer somebody else up---Mark Twain"," Practice makes a man perfect---proverb","Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment---Buddha","Design is not just what it looks like and feels like. Design is how it works---Steve Jobs","Innovation distinguishes between a leader and a follower---Steve Jobs"];
     var length=quotes.length;
      finalQuote=quotes[Math.floor(Math.random()*length)];
     x=finalQuote; 
     return finalQuote;
    }
//-------    
   $('a').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURI(x));      

  //------
  });
  //twiter post twit goes below 

});