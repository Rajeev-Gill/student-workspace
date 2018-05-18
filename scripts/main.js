var app = { //General methods and DOM element reference
  classChatSection: document.getElementById('classChat'),
  activityPortalSection: document.getElementById('activityPortal'),
  notesSection: document.querySelector('.notes-area'),
  buttons: {
    openChat: document.getElementById('classChatButton'),
    openActivities: document.getElementById('activityPortalButton'),
    openNotes: document.getElementById('notes-button')
  },
  toggleClassOn: function(element, className) {
    element.classList.toggle(className);
  }
}

var handlers = { //Event Listeners

}

var view = { //DOM update methods

}


//app.addClassTo(classChatSection, 'open')

app.buttons.openChat.addEventListener('click', function(){
  app.toggleClassOn(app.classChatSection, 'open');
});

app.buttons.openActivities.addEventListener('click', function(){
  app.toggleClassOn(app.activityPortalSection, 'open');
});

app.buttons.openNotes.addEventListener('click', function(){
  app.toggleClassOn(app.notesSection, 'expanded');
});
