
/*
* Embed Media Dialog based on http://www.fluidbyte.net/embed-youtube-vimeo-etc-into-ckeditor
*
* Plugin name:      FlickrEmbed
* Menu button name: FlickrEmbed
*
*
*/

alert("I'm being called!");
( function() {
    CKEDITOR.plugins.add( 'FlickrEmbed',
    {
        init: function( editor )
        {
           var me = this;
//           CKEDITOR.dialog.add( 'FlickrEmbedDialog', function (editor)
           CKEDITOR.dialog.add( 'FlickrEmbedDialog', function (instance)
           {
              return {
                 title : 'Embed Flickr Album',
                 minWidth : 550,
                 minHeight : 200,
                 contents :
                       [
                          {
                             id : 'iframe',
                             expand : true,
                             elements :[{
                                id : 'embedArea',
                                type : 'textarea',
                                label : 'Paste Embed Code Here',
                                'autofocus':'autofocus',
                                setup: function(element){
                                },
                                commit: function(element){
                                }
                              }]
                          }
                       ],
                  onOk: function() {
                        for (var i = 0; i < window.frames.length; i++) {
                            if (window.frames[i].name == 'iframeFlickrEmbed') {
                                var content = window.frames[i].document.getElementById("embed").value;
                            }
                        }
                        // console.log(this.getContentElement( 'iframe', 'embedArea' ).getValue());
                        var embed_container = instance.document.createElement('p');
                        embed_container.setHtml(this.getContentElement('iframe', 'embedArea').getValue());
                        instance.insertElement(embed_container);
                  }
              };
           } );

            editor.addCommand( 'FlickrEmbed', new CKEDITOR.dialogCommand( 'FlickrEmbedDialog' ) );

            editor.ui.addButton( 'FlickrEmbed',
            {
                label: 'Flickr Embed',
                command: 'FlickrEmbed',
                icon: this.path + 'images/icon.png',
                toolbar: 'FlickrEmbed'
            } );
        }
    } );
} )();
