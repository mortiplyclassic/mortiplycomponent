$(document).ready(function(){
    $('[css-margin-top]').each(function(){
        $(this).css('margin-top', $(this).attr('css-margin-top')); 
     });
     $('[css-background-color]').each(function(){
        $(this).css('background-color', $(this).attr('css-background-color')); 
     });
     $('[css-color]').each(function(){
        $(this).css('color', $(this).attr('css-color')); 
     });
     $('[css-font-size]').each(function(){
        $(this).css('font-size', $(this).attr('css-font-size')); 
     });
     $('[css-width]').each(function(){
        $(this).css('width', $(this).attr('css-width')); 
     });
     $('[css-height]').each(function(){
        $(this).css('height', $(this).attr('css-height')); 
     });
     $('[css-border]').each(function(){
        $(this).css('border', $(this).attr('css-border')); 
     });
     $('[css-text-align]').each(function(){
        $(this).css('text-align', $(this).attr('css-text-align')); 
     });

     $(document).on('change', 'input[set-role=tbl-checkbox-header]', function(){
        $('input[set-role=tbl-checkbox-body]').prop('checked', $(this).prop('checked'));
     });

     $(document).on('dblclick', '.table-body > tr', function(){
        $(this).find('input[set-role=tbl-checkbox-body]').trigger('click');
        var target = undefined;
        var event = undefined;
        if($(this).attr('set-target') != undefined){
            target = $(this).attr('set-target');
            if($(this).attr('set-target-event') != undefined){
                event = $(this).attr('set-target-event')
            }
        }

        if(target != undefined && event != undefined){
            $(target).trigger(event);
        }
     });

     $(document).on('click', '.popup-form button[popup-close]', function(){
        $parent = $(this).parents('.popup-form');
        $parent.find('input, select, textarea').val("");
        $parent.fadeOut(130);
     });

     $(document).on('click', 'button[popup-open]', function(){
        $parent = $('#'+$(this).attr('popup-open'));
        $parent.fadeIn(150);
        $parent.find('popup-container').addClass('popup-entry');
     });
});