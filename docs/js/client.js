/* global TrelloPowerUp */

const ROOT = 'https://tkindy.github.io/trello-parent-child';
const HTML = `${ROOT}/html/`;
const IMG = `${ROOT}/images/`;

const html = (name) => `${HTML}${name}.html`;
const img = (name) => `${IMG}${name}.png`;

const HIERARCHY_ICON = img('hierarchy');

TrelloPowerUp.initialize({
  'card-buttons': () => {
    return [{
      icon: HIERARCHY_ICON,
      text: 'Create Project',
      callback: (t) => {
        return t.popup({
          title: 'Create Project',
          url: html('create-project')
        });
      }
    }];
  }
});
