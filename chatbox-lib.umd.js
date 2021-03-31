(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
    (global = global || self, factory(global.ChatboxLib = {}, global.React, global.ReactDOM));
}(this, (function (exports, React, ReactDOM) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;
    ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function Icon(props) {
      var spritePath = "assets/sprite.svg#";
      var size = props.size || 'normal';
      return React__default.createElement("svg", {
        fill: props.fill || '#253342',
        className: "icon icon-" + size
      }, React__default.createElement("use", {
        xlinkHref: "" + spritePath + props.name
      }));
    }

    function ChatBoxHeader(props) {
      var _a = React.useState(false),
          menuState = _a[0],
          setMenuState = _a[1];

      return React__default.createElement("div", {
        className: "chatbox__header white-bg"
      }, React__default.createElement(Icon, {
        name: 'icon-bug',
        klass: 'small'
      }), React__default.createElement("div", null, React__default.createElement("div", null, React__default.createElement("span", {
        className: "chatbox__header__title"
      }, "Tbot"), React__default.createElement("span", {
        className: "chatbox__header__status"
      }, "Online ", React__default.createElement("div", {
        className: "online"
      }))), React__default.createElement("div", {
        className: "chatbox__header__icons"
      }, React__default.createElement("span", null, React__default.createElement(Icon, {
        name: 'icon-refresh',
        klass: 'small'
      })), React__default.createElement("span", {
        onClick: function onClick() {
          return setMenuState(!menuState);
        }
      }, React__default.createElement(Icon, {
        name: 'icon-menu',
        klass: 'small'
      })), React__default.createElement("span", {
        onClick: function onClick() {
          return props.onClose;
        }
      }, React__default.createElement(Icon, {
        name: 'icon-download',
        klass: 'small'
      })))), menuState === true ? React__default.createElement("div", {
        className: "chatbox__header__menu"
      }, React__default.createElement("div", {
        onClick: function onClick() {
          props.openDebugger();
          setMenuState(false);
        }
      }, React__default.createElement(Icon, {
        name: 'icon-bug',
        klass: 'small'
      }), React__default.createElement("span", null, "Debug Mod")), React__default.createElement("div", null, React__default.createElement(Icon, {
        name: 'icon-settings',
        klass: 'small'
      }), React__default.createElement("span", null, "Ayarlar")), React__default.createElement("div", null, React__default.createElement(Icon, {
        name: 'icon-download',
        klass: 'small'
      }), React__default.createElement("span", null, "\u0130ndir"))) : null);
    }

    function IncomingMessageBalloon(props) {
      return React__default.createElement("div", {
        className: "chatbox__messagebox__incomingmessage"
      }, React__default.createElement("span", null, props.text));
    }

    function OutgoingMessageBalloon(props) {
      return React__default.createElement("div", {
        className: "chatbox__messagebox__outgoingmessage"
      }, React__default.createElement("span", null, props.text));
    }

    function TypingAnimation(props) {
      return React__default.createElement("div", {
        className: "chat-bubble"
      }, React__default.createElement("div", {
        className: "typing"
      }, React__default.createElement("div", {
        className: "dot"
      }), React__default.createElement("div", {
        className: "dot"
      }), React__default.createElement("div", {
        className: "dot"
      })));
    }

    function ChatBoxMessageBox(props) {
      return React__default.createElement("div", {
        className: "chatbox__messagebox"
      }, React__default.createElement(IncomingMessageBalloon, {
        text: "Merhaba \uD83D\uDC4B  size nas\u0131l yard\u0131mc\u0131 olabilirim?"
      }), React__default.createElement(OutgoingMessageBalloon, {
        text: "Merhaba, sipari\u015F durumumu sorgulamak istiyorum."
      }), props.typing ? React__default.createElement(TypingAnimation, null) : null);
    }

    function ChatBoxMessageInput(props) {
      var send = function send() {};

      return React__default.createElement("div", {
        className: "chatbox__messageinput"
      }, React__default.createElement("input", {
        placeholder: "Mesaj\u0131n\u0131z\u0131 yaz\u0131n\u0131z..."
      }), React__default.createElement("span", {
        className: 'message-input-send-icon',
        onClick: send
      }, React__default.createElement(Icon, {
        name: 'icon-send',
        size: 'small'
      })));
    }

    function ChatBoxDebugger(props) {
      var _items = ["mainflow", "loremipsum", "useramed"];

      var _a = React.useState(0),
          tabState = _a[0],
          setTabState = _a[1];

      var _b = React.useState(null),
          activeIndex = _b[0],
          setActiveIndex = _b[1];

      var _c = React.useState(_items),
          items = _c[0],
          setItems = _c[1];

      var tabChanger = function tabChanger(e) {
        var tab = e.target.getAttribute('data-value');

        if (tab === "1") {
          setTabState(1);
        } else {
          setTabState(0);
        }
      };

      var addActiveClass = function addActiveClass(index) {
        setActiveIndex(index);
      };

      return React__default.createElement("div", {
        className: "chatbox__debugger"
      }, React__default.createElement("div", {
        className: "chatbox__debugger__header"
      }, React__default.createElement("span", null, "Debugger"), React__default.createElement("span", {
        onClick: function onClick() {
          return props.closeDebugger();
        }
      }, React__default.createElement(Icon, {
        name: 'icon-close',
        klass: 'small'
      }))), React__default.createElement("div", {
        className: "chatbox__debugger__main"
      }, React__default.createElement("div", {
        className: "chatbox__debugger__main__submenu"
      }, React__default.createElement("span", {
        className: tabState === 0 ? "active" : "",
        onClick: tabChanger,
        "data-value": "0"
      }, "\xD6zet"), React__default.createElement("span", {
        className: tabState === 1 ? "active" : "",
        onClick: tabChanger,
        "data-value": "1"
      }, "Raw Json")), tabState === 0 ? React__default.createElement("div", {
        className: "chatbox__debugger__main__content"
      }, React__default.createElement("span", {
        className: "chatbox__debugger__main__content__title"
      }, "Diyalog Y\xF6netimi"), React__default.createElement("span", {
        className: "chatbox__debugger__main__content__subtitle"
      }, "Ak\u0131\u015F Bloklar\u0131"), React__default.createElement("ol", {
        className: "chatbox__debugger__main__content__list"
      }, items.map(function (item, index) {
        return React__default.createElement("li", {
          key: index,
          onClick: function onClick() {
            return addActiveClass(index);
          },
          className: index === activeIndex ? "active" : ""
        }, item);
      })), React__default.createElement("span", {
        className: "chatbox__debugger__main__content__title"
      }, "Language Understanding"), React__default.createElement("span", {
        className: "chatbox__debugger__main__content__text"
      }, "Detected Language: n/a"), React__default.createElement("br", null), React__default.createElement("span", {
        className: "chatbox__debugger__main__content__text"
      }, "Used Language: n/a")) : null));
    }

    function ChatBox(props) {
      var openIcon = props.openIcon ? React__default.createElement("img", {
        src: props.openIcon
      }) : React__default.createElement(Icon, {
        name: 'icon-show',
        fill: '#fff',
        size: 'large'
      });
      var closeIcon = props.closeIcon ? React__default.createElement("img", {
        src: props.closeIcon
      }) : React__default.createElement(Icon, {
        name: 'icon-hide',
        fill: '#fff',
        size: 'large'
      });
      var openText = props.openText ? props.openText : 'Test Et!';
      var closeText = props.closeText ? props.closeText : 'Testi Kapat 🤖';

      var _a = React.useState(false),
          debuggerState = _a[0],
          setDebuggerState = _a[1];

      var _b = React.useState(false),
          chatBoxState = _b[0],
          setChatBoxState = _b[1];

      var _c = React.useState(true),
          typing = _c[0],
          setTyping = _c[1];

      var icon = React__default.useRef(chatBoxState ? openIcon : closeIcon);
      var label = React__default.useRef(chatBoxState ? openText : closeText);

      var _openDebugger = function openDebugger() {
        setDebuggerState(true);
      };

      var closeDebugger = function closeDebugger() {
        setDebuggerState(false);
      };

      var chatboxClose = function chatboxClose() {};

      var toggle = function toggle() {
        var _chatBoxState = !chatBoxState;

        setChatBoxState(_chatBoxState);

        var _icon = _chatBoxState ? openIcon : closeIcon;

        icon.current = _icon;

        var _label = _chatBoxState ? openText : closeText;

        label.current = _label;
      };

      return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
        className: "chatbox_controller"
      }, chatBoxState ? React__default.createElement("div", {
        className: "chatbox white-bg"
      }, React__default.createElement(ChatBoxHeader, {
        onClose: chatboxClose,
        openDebugger: function openDebugger() {
          return _openDebugger();
        }
      }), React__default.createElement(ChatBoxMessageBox, {
        typing: typing
      }), React__default.createElement(ChatBoxMessageInput, null), debuggerState === true ? React__default.createElement(ChatBoxDebugger, {
        closeDebugger: closeDebugger
      }) : null) : null, React__default.createElement("div", {
        className: "chatbox_controller__button-container"
      }, React__default.createElement("div", {
        className: "chatbox_controller__label",
        onClick: toggle
      }, React__default.createElement("div", {
        className: "chatbox_controller__inner"
      }, React__default.createElement("span", null, label.current))), React__default.createElement("div", {
        className: "chatbox_controller__icon-holder",
        onClick: toggle
      }, icon.current))));
    }

    function ChatboxNativeJs(props) {
      var options = props.options || {};
      ReactDOM.render(React__default.createElement(ChatBox, __assign({}, options)), props.element);
    } // module.exports = ChatboxNativeJs;

    function ChatboxLib(props) {
      return React__default.createElement("div", null, React__default.createElement("h1", null, "Welcome to chatbox-lib!"));
    }

    exports.ChatBox = ChatBox;
    exports.ChatboxLib = ChatboxLib;
    exports.ChatboxNativeJs = ChatboxNativeJs;
    exports.Icon = Icon;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
