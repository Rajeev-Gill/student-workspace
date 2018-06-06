introJs().start();

var app = { //General methods and DOM element reference
  classChatSection: document.getElementById('classChat'),
  activityPortalSection: document.getElementById('activityPortal'),
  notesSection: document.getElementById('notes-area'),
  buttons: {
    openChat: document.getElementById('classChatButton'),
    openActivities: document.getElementById('activityPortalButton'),
    openNotes: document.getElementById('notes-button'),
    sharedWorkSpace: document.getElementById('shared-workspace'),
    privateWorkSpace: document.getElementById('private-workspace')
  },
  toggleClassOn: function(element, className) {
    element.classList.toggle(className);
  }
}

var handlers = { //Event Listeners

}

var view = { //DOM update methods
  openChatSection: function(){
      app.toggleClassOn(app.classChatSection, 'open');
  }
}


//app.addClassTo(classChatSection, 'open')

/*app.buttons.openChat.addEventListener('click', function(){
  view.openChatSection();
});

app.buttons.openActivities.addEventListener('click', function(){
  app.toggleClassOn(app.activityPortalSection, 'open');
});*/

// app.buttons.openNotes.addEventListener('click', function(){
//   app.toggleClassOn(app.notesSection, 'expanded');
// });
app.buttons.sharedWorkSpace.addEventListener('click', function(){
  app.toggleClassOn(app.notesSection, 'expanded');
});

app.buttons.privateWorkSpace.addEventListener('click', function(){
  app.toggleClassOn(app.notesSection, 'expanded');
});

/* Side Bar Toggle Actions */

 $('#sidebarCollapse').on('click', function () {
     $('#sidebar').addClass('active');
     $("#showSidebar").show();
 });

 $('#showSidebar').on('click', function () {
     $('#sidebar').removeClass('active');
     $("#showSidebar").hide();
 });

/* Video buttons on hover */

 $('#private-workspace').on('click', function () {
     $('#notes-area').show();
 });

/* Video hover actions */

 $('#video').mouseenter(function(){
    $('#ov').show();
  });
  $('#video').mouseleave(function(){
    $('#ov').hide();
  });

/* Toggle Shared Workspaces buttons */

$(function(){
   $("#shared-workspace").click(function () {
      $(this).text(function(i, text){
          return text === "Open shared workspace" ? "Close shared workspace" : "Open shared workspace";
      })
   });
})

$(function(){
   $("#private-workspace").click(function () {
      $(this).text(function(i, text){
          return text === "Open private workspace" ? "Close private workspace" : "Open private workspace";
      })
   });
})

/* iframe plays when the 'play' icon is clicked */


  /*$('#youtube-play').on('click', function(ev) {

    $("#my-video")[0].src += "&autoplay=1";
    ev.preventDefault();

  });*/
