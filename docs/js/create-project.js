const t = window.TrelloPowerUp.iframe();

window.createProject.addEventListener('submit', (event) => {
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t.set('card', 'shared', 'project', window.projectName.value)
    .then(() => {
      t.closePopup();
    });
});

t.render(() => {
  return t.card('all')
    .then((card) => {
      console.log(JSON.stringify(card, null, 2));
    })
    .then(() => {
      t.sizeTo('#createProject').done();
    });
});
