/**
 * Created by iyad jamal on 4/17/2016.
 */
var descriptionarray=['kkdl'
    ,'fkdsaljdf',
    'kflsdfj',
    'kfdlajfd',
    'fdklfsjd',
    'kfdsljfsd',
    'fksdfj',
    'kfdsjkfjsdl',
    'kdjfskljf'];
$(document).ready(
  function()
  {
      var string="";
      var i;
      for(i=0;i<3;i++)
      {
          string+='<div class="row">';
          for(j=0;j<3;j++)
          {
              string+='<div class="col-sm-3 hov">' +
                  '<span>' +
                  '<img src="../pmg/02.jpg" width="250 px">' +
                  '<p align="center">' +
                  'hi' +
                  '</p>' +
                  '</span>' +
                  ' </div>';

          }
          string+='</div>';
      }
      $('.fill').append(string);
      $('.hov').hover(function()
      {
          $(this).css({opacity:0.5});
      });
      $('.hov').mouseleave(function()
      {
          $(this).css({opacity:1});
      });
      $('.hov').click(function(){
       var  xx= $(this).parent().parent().children().index($(this).parent());
          xx*=3;
      xx=  $(this).parent().children().index($(this))+xx;
          $('.description').html(descriptionarray[xx]);
      });
  }
);