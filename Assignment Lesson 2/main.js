"use strict";

const HydrateFn = setInterval (() => document.write("Hello!"), 2000);

setTimeout(StopFn, 1 * 60 * 1000)

function StopFn() {
    clearInterval(HydrateFn);
};