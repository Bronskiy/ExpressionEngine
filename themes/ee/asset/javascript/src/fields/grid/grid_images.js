'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

var GridImages = function (_React$Component) {
  _inherits(GridImages, _React$Component);

  function GridImages(props) {
    _classCallCheck(this, GridImages);

    return _possibleConstructorReturn(this, (GridImages.__proto__ || Object.getPrototypeOf(GridImages)).call(this, props));
  }

  _createClass(GridImages, [{
    key: 'render',
    value: function render() {
      var lang = this.props.lang;
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'field-file-upload mt' },
          React.createElement(
            'div',
            { className: 'field-file-upload__content' },
            lang.grid_images_drop_files,
            React.createElement(
              'em',
              null,
              lang.grid_images_uploading_to
            )
          )
        ),
        React.createElement(
          'a',
          { href: '#', className: 'btn action', rel: 'modal-file-chooser' },
          lang.grid_images_choose_existing
        ),
        '\xA0',
        React.createElement(
          'a',
          { href: '#', className: 'btn action', rel: 'modal-file-uploader' },
          lang.grid_images_upload_new
        )
      );
    }
  }], [{
    key: 'renderFields',
    value: function renderFields(context) {
      $('div[data-grid-images-react]', context).each(function () {
        var props = JSON.parse(window.atob($(this).data('gridImagesReact')));
        ReactDOM.render(React.createElement(GridImages, props, null), this);
      });
    }
  }]);

  return GridImages;
}(React.Component);

$(document).ready(function () {
  GridImages.renderFields();
});

FluidField.on('grid_images', 'add', function (field) {
  GridImages.renderFields(field);
});