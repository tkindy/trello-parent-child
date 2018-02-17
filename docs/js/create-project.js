const t = window.TrelloPowerUp.iframe();
const projectsKey = 'projects';

window.createProject.addEventListener('submit', (event) => {
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  const projectName = window.projectName.value;

  return t.get('board', 'shared', projectsKey)
    .then(projects => t.set('board', 'shared', projectsKey, projects.concat([projectName])))
    .then(() => {
      t.set('card', 'shared', 'project', window.projectName.value);
    })
    .then(() => {
      t.closePopup();
    });
});

t.render(() => {
  return t.card('all')
    .then((card) => {
      window.projectName.value = card.name;
    })
    .then(() => {
      t.sizeTo('#createProject').done();
    });
});
