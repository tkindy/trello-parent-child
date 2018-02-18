/* global TrelloPowerUp */

const ROOT = 'https://tkindy.github.io/trello-parent-child';
const HTML = `${ROOT}/html/`;
const IMG = `${ROOT}/images/`;

const html = (name) => `${HTML}${name}.html`;
const img = (name) => `${IMG}${name}.png`;

const buildButton = (title, icon, page) => {
  return {
    icon,
    text: title,
    callback: t => {
      return t.popup({
        title,
        url: html(page)
      });
    }
  };
};

const HIERARCHY_ICON = img('hierarchy');

TrelloPowerUp.initialize({
  'card-badges': t => {
    return t.get('card', 'shared', 'project')
      .then(project => project ? [{
        icon: HIERARCHY_ICON,
        text: project
      }] : []);
  },
  'card-detail-badges': t => {
    return t.get('card', 'shared', 'project')
      .then(project => project ? [{
        title: 'Project',
        text: project
      }] : []);
  },
  'card-buttons': () => {
    return [
      buildButton('Create Project', HIERARCHY_ICON, 'create-project'),
      buildButton('Add to Project', HIERARCHY_ICON, 'add-to-project')
    ];
  }
});
