"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderGuide = void 0;
var BOARDME_NOT_INSTALLED_ERROR = "boardme not found! The script is not installed, or you're trying to use it before importing it. Please visit the docs section on https://boardme.io and follow the installation instructions.";
function renderGuide(identifier, targetElement) {
    if (!isBoardmeInstalled()) {
        console.error(BOARDME_NOT_INSTALLED_ERROR);
        return null;
    }
    return getBoardme().renderGuide(identifier, targetElement);
}
exports.renderGuide = renderGuide;
function isBoardmeInstalled() {
    return !!window.boardme;
}
function getBoardme() {
    return window.boardme;
}
