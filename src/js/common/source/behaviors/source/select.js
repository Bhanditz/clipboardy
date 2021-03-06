var inherit = require('inherit'),
  Base = require('../base'),
  win = window,
  doc = window.document;

module.exports = inherit(Base, {

  select: function() {
    var sourceElement = this.getSource(),
      range,
      selection;
    if (!sourceElement) {
      return false;
    }
    if (doc.body.createTextRange) {
      range = doc.body.createTextRange();
      range.moveToElementText(sourceElement);
      range.select();
    } else if (win.getSelection) {
      selection = win.getSelection();
      range = doc.createRange();
      range.selectNodeContents(sourceElement);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    return true;
  }

}, {
  instances: {}
});