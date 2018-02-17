/* global TrelloPowerUp */

const HTML = '../html/';
const IMG = '../images/';

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
