'use strict';

/**
 * @version 1
 * @update 2024-01-15
 */
//*
const param = 'name=orig'
if (!location.search.includes(param)) {
  location.search = location.search.replace(/name=.[^&]*/g, 'name=orig');
}
//*/
