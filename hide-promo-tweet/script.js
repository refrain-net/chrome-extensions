'use strict';

/**
 * @version 3
 * @update 2023-07-16 requestAnimationFrameの返り値を代入しない
 */
//*
requestAnimationFrame(function hide () {
  [...document.querySelectorAll('[data-testid="placementTracking"]')]
      .filter(element => element.querySelector('svg'))
      .map(element => element.remove());
  requestAnimationFrame(hide);
});
//*/

/**
 * @version 2
 * @update 2023-07-05 ○○からのプロモーションに対応するため、SVGを検索して削除する
 */
/*
let id = requestAnimationFrame(function hide () {
  [...document.querySelectorAll('[data-testid="placementTracking"]')]
      .filter(element => element.querySelector('svg'))
      .map(element => element.remove());
  id = requestAnimationFrame(hide);
});
//*/

/**
 * @version 1
 * @update 2023-06-21 プロモーションと記載されたツイートを削除する
 */
/*
let id = requestAnimationFrame(function hide () {
  [...document.querySelectorAll('[data-testid="placementTracking"]')]
      .filter(element => [...element.querySelectorAll('span')].find(span => span.textContent === 'プロモーション'))
      .map(element => element.remove());
  requestAnimationFrame(hide);
});
//*/
