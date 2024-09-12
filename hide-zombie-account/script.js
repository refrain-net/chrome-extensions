'use strict';

/**
 * @version 2
 * @update 2024-09-11 ツイートしたアカウントは対象外にする
 */
//*
requestAnimationFrame(function hide () {
  const {href} = location;
  if (!/https:\/\/x\.com\/.+\/status\/.+/.test(href)) return;
  const [domain, userid, status, postid] = location.href.split('://')[1].split('/');
  const elements = [...document.querySelectorAll('[data-testid="cellInnerDiv"]')];
  const usernames = elements.map(element => [...element.querySelectorAll('a')].filter(anchor => (anchor.href.startsWith('https://twitter.com/') || anchor.href.startsWith('https://x.com/')) && anchor.textContent.startsWith('@'))[0]?.textContent);
console.log(usernames);
  const count = usernames.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  let username;
  elements.forEach((element, index) => {
    username = usernames[index];
    if (username === `@${userid}`) return;
    if (count[username] < 3) return;
    element.style.display = 'none';
  });
  requestAnimationFrame(hide);
});
//*/

/**
 * @version 1
 * @update 2024-09-09 リプライ数が3個以上のアカウントを非表示にする
 */
/*
requestAnimationFrame(function hide () {
  if (!/https:\/\/x\.com\/.+\/status\/.+/.test(location.href)) return;
  const elements = [...document.querySelectorAll('[data-testid="cellInnerDiv"]')];
  const usernames = elements.map(element => [...element.querySelectorAll('a')].filter(anchor => (anchor.href.startsWith('https://twitter.com/') || anchor.href.startsWith('https://x.com/')) && anchor.textContent.startsWith('@'))[0]?.textContent);
  const count = usernames.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  let username;
  elements.forEach((element, index) => {
    username = usernames[index];
    if (count[username] < 3) return;
    element.style.display = 'none';
  });
  requestAnimationFrame(hide);
});
//*/