import React, { useState } from 'react';
import ReactDOM from 'react-dom';

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
  return React.createElement("svg", {
    fill: props.fill || '#253342',
    className: "icon icon-" + size
  }, React.createElement("use", {
    xlinkHref: "" + spritePath + props.name
  }));
}

function ChatBoxHeader(props) {
  var _a = useState(false),
      menuState = _a[0],
      setMenuState = _a[1];

  return React.createElement("div", {
    className: "chatbox__header white-bg"
  }, React.createElement(Icon, {
    name: 'icon-bug',
    klass: 'small'
  }), React.createElement("div", null, React.createElement("div", null, React.createElement("span", {
    className: "chatbox__header__title"
  }, "Tbot"), React.createElement("span", {
    className: "chatbox__header__status"
  }, "Online ", React.createElement("div", {
    className: "online"
  }))), React.createElement("div", {
    className: "chatbox__header__icons"
  }, React.createElement("span", null, React.createElement(Icon, {
    name: 'icon-refresh',
    klass: 'small'
  })), React.createElement("span", {
    onClick: function onClick() {
      return setMenuState(!menuState);
    }
  }, React.createElement(Icon, {
    name: 'icon-menu',
    klass: 'small'
  })), React.createElement("span", {
    onClick: function onClick() {
      return props.onClose;
    }
  }, React.createElement(Icon, {
    name: 'icon-download',
    klass: 'small'
  })))), menuState === true ? React.createElement("div", {
    className: "chatbox__header__menu"
  }, React.createElement("div", {
    onClick: function onClick() {
      props.openDebugger();
      setMenuState(false);
    }
  }, React.createElement(Icon, {
    name: 'icon-bug',
    klass: 'small'
  }), React.createElement("span", null, "Debug Mod")), React.createElement("div", null, React.createElement(Icon, {
    name: 'icon-settings',
    klass: 'small'
  }), React.createElement("span", null, "Ayarlar")), React.createElement("div", null, React.createElement(Icon, {
    name: 'icon-download',
    klass: 'small'
  }), React.createElement("span", null, "\u0130ndir"))) : null);
}

function IncomingMessageBalloon(props) {
  return React.createElement("div", {
    className: "chatbox__messagebox__incomingmessage"
  }, React.createElement("span", null, props.text));
}

function OutgoingMessageBalloon(props) {
  return React.createElement("div", {
    className: "chatbox__messagebox__outgoingmessage"
  }, React.createElement("span", null, props.text));
}

function TypingAnimation(props) {
  return React.createElement("div", {
    className: "chat-bubble"
  }, React.createElement("div", {
    className: "typing"
  }, React.createElement("div", {
    className: "dot"
  }), React.createElement("div", {
    className: "dot"
  }), React.createElement("div", {
    className: "dot"
  })));
}

function ChatBoxMessageBox(props) {
  return React.createElement("div", {
    className: "chatbox__messagebox"
  }, React.createElement(IncomingMessageBalloon, {
    text: "Merhaba \uD83D\uDC4B  size nas\u0131l yard\u0131mc\u0131 olabilirim?"
  }), React.createElement(OutgoingMessageBalloon, {
    text: "Merhaba, sipari\u015F durumumu sorgulamak istiyorum."
  }), props.typing ? React.createElement(TypingAnimation, null) : null);
}

function ChatBoxMessageInput(props) {
  var send = function send() {};

  return React.createElement("div", {
    className: "chatbox__messageinput"
  }, React.createElement("input", {
    placeholder: "Mesaj\u0131n\u0131z\u0131 yaz\u0131n\u0131z..."
  }), React.createElement("span", {
    className: 'message-input-send-icon',
    onClick: send
  }, React.createElement(Icon, {
    name: 'icon-send',
    size: 'small'
  })));
}

function ChatBoxDebugger(props) {
  var _items = ["mainflow", "loremipsum", "useramed"];

  var _a = useState(0),
      tabState = _a[0],
      setTabState = _a[1];

  var _b = useState(null),
      activeIndex = _b[0],
      setActiveIndex = _b[1];

  var _c = useState(_items),
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

  return React.createElement("div", {
    className: "chatbox__debugger"
  }, React.createElement("div", {
    className: "chatbox__debugger__header"
  }, React.createElement("span", null, "Debugger"), React.createElement("span", {
    onClick: function onClick() {
      return props.closeDebugger();
    }
  }, React.createElement(Icon, {
    name: 'icon-close',
    klass: 'small'
  }))), React.createElement("div", {
    className: "chatbox__debugger__main"
  }, React.createElement("div", {
    className: "chatbox__debugger__main__submenu"
  }, React.createElement("span", {
    className: tabState === 0 ? "active" : "",
    onClick: tabChanger,
    "data-value": "0"
  }, "\xD6zet"), React.createElement("span", {
    className: tabState === 1 ? "active" : "",
    onClick: tabChanger,
    "data-value": "1"
  }, "Raw Json")), tabState === 0 ? React.createElement("div", {
    className: "chatbox__debugger__main__content"
  }, React.createElement("span", {
    className: "chatbox__debugger__main__content__title"
  }, "Diyalog Y\xF6netimi"), React.createElement("span", {
    className: "chatbox__debugger__main__content__subtitle"
  }, "Ak\u0131\u015F Bloklar\u0131"), React.createElement("ol", {
    className: "chatbox__debugger__main__content__list"
  }, items.map(function (item, index) {
    return React.createElement("li", {
      key: index,
      onClick: function onClick() {
        return addActiveClass(index);
      },
      className: index === activeIndex ? "active" : ""
    }, item);
  })), React.createElement("span", {
    className: "chatbox__debugger__main__content__title"
  }, "Language Understanding"), React.createElement("span", {
    className: "chatbox__debugger__main__content__text"
  }, "Detected Language: n/a"), React.createElement("br", null), React.createElement("span", {
    className: "chatbox__debugger__main__content__text"
  }, "Used Language: n/a")) : null));
}

function ChatBox(props) {
  var openIcon = props.openIcon ? React.createElement("img", {
    src: props.openIcon
  }) : React.createElement(Icon, {
    name: 'icon-show',
    fill: '#fff',
    size: 'large'
  });
  var closeIcon = props.closeIcon ? React.createElement("img", {
    src: props.closeIcon
  }) : React.createElement(Icon, {
    name: 'icon-hide',
    fill: '#fff',
    size: 'large'
  });
  var openText = props.openText ? props.openText : 'Test Et!';
  var closeText = props.closeText ? props.closeText : 'Testi Kapat 🤖';

  var _a = useState(false),
      debuggerState = _a[0],
      setDebuggerState = _a[1];

  var _b = useState(false),
      chatBoxState = _b[0],
      setChatBoxState = _b[1];

  var _c = useState(true),
      typing = _c[0],
      setTyping = _c[1];

  var icon = React.useRef(chatBoxState ? openIcon : closeIcon);
  var label = React.useRef(chatBoxState ? openText : closeText);

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

  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "chatbox_controller"
  }, chatBoxState ? React.createElement("div", {
    className: "chatbox white-bg"
  }, React.createElement(ChatBoxHeader, {
    onClose: chatboxClose,
    openDebugger: function openDebugger() {
      return _openDebugger();
    }
  }), React.createElement(ChatBoxMessageBox, {
    typing: typing
  }), React.createElement(ChatBoxMessageInput, null), debuggerState === true ? React.createElement(ChatBoxDebugger, {
    closeDebugger: closeDebugger
  }) : null) : null, React.createElement("div", {
    className: "chatbox_controller__button-container"
  }, React.createElement("div", {
    className: "chatbox_controller__label",
    onClick: toggle
  }, React.createElement("div", {
    className: "chatbox_controller__inner"
  }, React.createElement("span", null, label.current))), React.createElement("div", {
    className: "chatbox_controller__icon-holder",
    onClick: toggle
  }, icon.current))));
}

function ChatboxNativeJs(props) {
  var options = props.options || {};
  ReactDOM.render(React.createElement(ChatBox, __assign({}, options)), props.element);
} // module.exports = ChatboxNativeJs;

function ChatboxLib(props) {
  return React.createElement("div", null, React.createElement("h1", null, "Welcome to chatbox-lib!"));
}

export { ChatBox, ChatboxLib, ChatboxNativeJs, Icon };
