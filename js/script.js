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
     $('[css-resize]').each(function(){
      $(this).css('resize', $(this).attr('css-resize')); 
   });

     resize_group();

     $(window).resize(function(){
         resize_group();
     });

     function resize_group(){
         $('.input-group-inline').each(function(){
            $total = $(this);
            $label = $(this).find('label');
            $input = $(this).find('input[type=text], input[type=email], input[type=password], input[type=number], select');
            $total_width = $total.css('width').split('px')[0];
            $label_width = $label.css('width').split('px')[0];
            $input.css('width', (new Number($total_width) - new Number($label_width))+"px")
         });
     }


     $(document).on('change', 'input[set-role=tbl-checkbox-header]', function(){
        $('input[set-role=tbl-checkbox-body]').prop('checked', $(this).prop('checked'));
     });

     $(document).on('dblclick', '.table-body > tr', function(){
        $('input[set-role=tbl-checkbox-body]').prop('checked', false);
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

   $(document).on('keyup', 'textarea', function(){
      textareaAdjust(this);
   });

   $(document).on('click', '.image-upload.multiple button', function(){
      $(this).siblings('input').trigger('click');
   });
   var old_input;
   $(document).on('change', '.image-upload.multiple input', function() {
      if($(this).val() != ""){
         old_input = $(this);
      }else{
         $(this) = old_input;
      }
      var parent = $(this).parent('.image-upload.multiple');
      imagesPreview(this, parent.find('div.img-preview'));
   });

      function textareaAdjust(tArea){
         if(tArea.value == ""){
            tArea.style.height = "1px";
            tArea.style.height = (tArea.scrollHeight)+"px";
         }else{
            tArea.style.height = "1px";
            tArea.style.height = (5+tArea.scrollHeight)+"px";
         }
      }

      $('.richtext-area').richText({
         // text formatting
         bold: true,
         italic: true,
         underline: true,
       
         // text alignment
         leftAlign: true,
         centerAlign: true,
         rightAlign: true,
         justify: true,
       
         // lists
         ol: true,
         ul: true,
       
         // title
         heading: true,
       
         // fonts
         fonts: true,
         fontList: ["Arial",
           "Arial Black",
           "Comic Sans MS",
           "Courier New",
           "Geneva",
           "Georgia",
           "Helvetica",
           "Impact",
           "Lucida Console",
           "Tahoma",
           "Times New Roman",
           "Verdana"
         ],
         fontColor: false,
         fontSize: true,
       
         // uploads
         imageUpload: false,
         fileUpload: false,

         // link
         urls: true,
       
         // tables
         table: false,
       
         // code
         removeStyles: false,
         code: false,
       
         // colors
         colors: [],
       
         // dropdowns
         fileHTML: '',
         imageHTML: '',
       
         // translations
         translations: {
           'title': 'Title',
           'white': 'White',
           'black': 'Black',
           'brown': 'Brown',
           'beige': 'Beige',
           'darkBlue': 'Dark Blue',
           'blue': 'Blue',
           'lightBlue': 'Light Blue',
           'darkRed': 'Dark Red',
           'red': 'Red',
           'darkGreen': 'Dark Green',
           'green': 'Green',
           'purple': 'Purple',
           'darkTurquois': 'Dark Turquois',
           'turquois': 'Turquois',
           'darkOrange': 'Dark Orange',
           'orange': 'Orange',
           'yellow': 'Yellow',
           'imageURL': 'Image URL',
           'fileURL': 'File URL',
           'linkText': 'Link text',
           'url': 'URL',
           'size': 'Size',
           'responsive': '<a href="https://www.jqueryscript.net/tags.php?/Responsive/">Responsive</a>',
           'text': 'Text',
           'openIn': 'Open in',
           'sameTab': 'Same tab',
           'newTab': 'New tab',
           'align': 'Align',
           'left': 'Left',
           'justify': 'Justify',
           'center': 'Center',
           'right': 'Right',
           'rows': 'Rows',
           'columns': 'Columns',
           'add': 'Add',
           'pleaseEnterURL': 'Please enter an URL',
           'videoURLnotSupported': 'Video URL not supported',
           'pleaseSelectImage': 'Please select an image',
           'pleaseSelectFile': 'Please select a file',
           'bold': 'Bold',
           'italic': 'Italic',
           'underline': 'Underline',
           'alignLeft': 'Align left',
           'alignCenter': 'Align centered',
           'alignRight': 'Align right',
           'addOrderedList': 'Add ordered list',
           'addUnorderedList': 'Add unordered list',
           'addHeading': 'Add Heading/title',
           'addFont': 'Add font',
           'addFontColor': 'Add font color',
           'addFontSize': 'Add font size',
           'addImage': 'Add image',
           'addVideo': 'Add video',
           'addFile': 'Add file',
           'addURL': 'Add URL',
           'addTable': 'Add table',
           'removeStyles': 'Remove styles',
           'code': 'Show HTML code',
           'undo': 'Undo',
           'redo': 'Redo',
           'close': 'Close'
         },
       
         // privacy
         youtubeCookies: false,
       
         // dev settings
         useSingleQuotes: false,
         height: 0,
         heightPercentage: 0,
         id: "",
         class: "",
         useParagraph: false,
         maxlength: 0,
       
         // callback function after init
         callback: undefined
       });
         

       var imagesPreview = function(input, preview_destination) {
         preview_destination.html("");
         if (input.files) {
             var filesAmount = input.files.length;
 
             for (i = 0; i < filesAmount; i++) {
                 var reader = new FileReader();
 
                 reader.onload = function(event) {
                     $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(preview_destination);
                 }
 
                 reader.readAsDataURL(input.files[i]);
             }
         }
     };
});