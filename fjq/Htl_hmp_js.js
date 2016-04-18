/**
 * Created by iyad jamal on 4/16/2016.
 */
 var iyad=new Array("ali ll","hi","itsme");
$(document).ready(function(){
    $('.one ').on('click', function(){
        var index=$(this).parent().children().index($(this));
        $('.descrip').html(iyad[index]);
    });
});