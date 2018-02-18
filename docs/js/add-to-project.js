const t = window.TrelloPowerUp.iframe();

window.project.addEventListener('submit', (event) => {
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  const project = window.projectName.value;
  const promise = project === '' ?
    t.remove('card', 'shared', 'project') :
    t.set('card', 'shared', 'project', project);

  return promise
    .then(() => {
      t.closePopup();
    });
});

t.render(() => {
  const select = window.projectName;

  return t.get('board', 'shared', 'projects')
    .then(projects => {
      for (let project of projects) {
        const option = document.createElement('option');
        option.text = project;

        select.add(option);
      }
    })
    .then(() => t.get('card', 'shared', 'project'))
    .then(project => select.value = project)
    .then(() => {
      t.sizeTo('#project').done();
    });
});
