"use strict";

const callMe = (firstName, callback) => {
  setTimeout(() => {
    if (!firstName) return callback(new Error('no first name passed in!'));

    const fullName = `${firstName} Smith`;

    return callback(fullName);
  }, 1000);
};
callMe('irdan', console.log);
callMe(null, console.log);

const c2promise = firstName => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) reject(new Error('no firstname passed in!'))
        const fullName = `${firstName} Smith`
        resolve(fullName)
      }, 1000)
  })
}

c2promise('diana').then(console.log)
c2promise().catch(console.log)