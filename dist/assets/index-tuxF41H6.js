(function () {
  const _ = document.createElement("link").relList;
  if (_ && _.supports && _.supports("modulepreload")) return;
  for (const N of document.querySelectorAll('link[rel="modulepreload"]')) E(N);
  new MutationObserver((N) => {
    for (const T of N)
      if (T.type === "childList")
        for (const H of T.addedNodes)
          H.tagName === "LINK" && H.rel === "modulepreload" && E(H);
  }).observe(document, { childList: !0, subtree: !0 });
  function p(N) {
    const T = {};
    return (
      N.integrity && (T.integrity = N.integrity),
      N.referrerPolicy && (T.referrerPolicy = N.referrerPolicy),
      N.crossOrigin === "use-credentials"
        ? (T.credentials = "include")
        : N.crossOrigin === "anonymous"
          ? (T.credentials = "omit")
          : (T.credentials = "same-origin"),
      T
    );
  }
  function E(N) {
    if (N.ep) return;
    N.ep = !0;
    const T = p(N);
    fetch(N.href, T);
  }
})();
function Oa(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default")
    ? v.default
    : v;
}
var Co = { exports: {} },
  wr = {},
  _o = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _a;
function Df() {
  if (_a) return V;
  _a = 1;
  var v = Symbol.for("react.element"),
    _ = Symbol.for("react.portal"),
    p = Symbol.for("react.fragment"),
    E = Symbol.for("react.strict_mode"),
    N = Symbol.for("react.profiler"),
    T = Symbol.for("react.provider"),
    H = Symbol.for("react.context"),
    M = Symbol.for("react.forward_ref"),
    F = Symbol.for("react.suspense"),
    ee = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    X = Symbol.iterator;
  function B(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (X && c[X]) || c["@@iterator"]),
        typeof c == "function" ? c : null);
  }
  var se = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Pe = Object.assign,
    te = {};
  function G(c, y, U) {
    ((this.props = c),
      (this.context = y),
      (this.refs = te),
      (this.updater = U || se));
  }
  ((G.prototype.isReactComponent = {}),
    (G.prototype.setState = function (c, y) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, c, y, "setState");
    }),
    (G.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    }));
  function yt() {}
  yt.prototype = G.prototype;
  function ct(c, y, U) {
    ((this.props = c),
      (this.context = y),
      (this.refs = te),
      (this.updater = U || se));
  }
  var et = (ct.prototype = new yt());
  ((et.constructor = ct), Pe(et, G.prototype), (et.isPureReactComponent = !0));
  var Ee = Array.isArray,
    tt = Object.prototype.hasOwnProperty,
    Le = { current: null },
    Re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ke(c, y, U) {
    var $,
      Q = {},
      K = null,
      ne = null;
    if (y != null)
      for ($ in (y.ref !== void 0 && (ne = y.ref),
      y.key !== void 0 && (K = "" + y.key),
      y))
        tt.call(y, $) && !Re.hasOwnProperty($) && (Q[$] = y[$]);
    var Z = arguments.length - 2;
    if (Z === 1) Q.children = U;
    else if (1 < Z) {
      for (var oe = Array(Z), He = 0; He < Z; He++) oe[He] = arguments[He + 2];
      Q.children = oe;
    }
    if (c && c.defaultProps)
      for ($ in ((Z = c.defaultProps), Z)) Q[$] === void 0 && (Q[$] = Z[$]);
    return {
      $$typeof: v,
      type: c,
      key: K,
      ref: ne,
      props: Q,
      _owner: Le.current,
    };
  }
  function Pt(c, y) {
    return {
      $$typeof: v,
      type: c.type,
      key: y,
      ref: c.ref,
      props: c.props,
      _owner: c._owner,
    };
  }
  function wt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === v;
  }
  function Xt(c) {
    var y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (U) {
        return y[U];
      })
    );
  }
  var ft = /\/+/g;
  function Ve(c, y) {
    return typeof c == "object" && c !== null && c.key != null
      ? Xt("" + c.key)
      : y.toString(36);
  }
  function nt(c, y, U, $, Q) {
    var K = typeof c;
    (K === "undefined" || K === "boolean") && (c = null);
    var ne = !1;
    if (c === null) ne = !0;
    else
      switch (K) {
        case "string":
        case "number":
          ne = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case v:
            case _:
              ne = !0;
          }
      }
    if (ne)
      return (
        (ne = c),
        (Q = Q(ne)),
        (c = $ === "" ? "." + Ve(ne, 0) : $),
        Ee(Q)
          ? ((U = ""),
            c != null && (U = c.replace(ft, "$&/") + "/"),
            nt(Q, y, U, "", function (He) {
              return He;
            }))
          : Q != null &&
            (wt(Q) &&
              (Q = Pt(
                Q,
                U +
                  (!Q.key || (ne && ne.key === Q.key)
                    ? ""
                    : ("" + Q.key).replace(ft, "$&/") + "/") +
                  c,
              )),
            y.push(Q)),
        1
      );
    if (((ne = 0), ($ = $ === "" ? "." : $ + ":"), Ee(c)))
      for (var Z = 0; Z < c.length; Z++) {
        K = c[Z];
        var oe = $ + Ve(K, Z);
        ne += nt(K, y, U, oe, Q);
      }
    else if (((oe = B(c)), typeof oe == "function"))
      for (c = oe.call(c), Z = 0; !(K = c.next()).done; )
        ((K = K.value), (oe = $ + Ve(K, Z++)), (ne += nt(K, y, U, oe, Q)));
    else if (K === "object")
      throw (
        (y = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (y === "[object Object]"
              ? "object with keys {" + Object.keys(c).join(", ") + "}"
              : y) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return ne;
  }
  function dt(c, y, U) {
    if (c == null) return c;
    var $ = [],
      Q = 0;
    return (
      nt(c, $, "", "", function (K) {
        return y.call(U, K, Q++);
      }),
      $
    );
  }
  function Me(c) {
    if (c._status === -1) {
      var y = c._result;
      ((y = y()),
        y.then(
          function (U) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 1), (c._result = U));
          },
          function (U) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 2), (c._result = U));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = y)));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var fe = { current: null },
    x = { transition: null },
    O = {
      ReactCurrentDispatcher: fe,
      ReactCurrentBatchConfig: x,
      ReactCurrentOwner: Le,
    };
  function P() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (V.Children = {
      map: dt,
      forEach: function (c, y, U) {
        dt(
          c,
          function () {
            y.apply(this, arguments);
          },
          U,
        );
      },
      count: function (c) {
        var y = 0;
        return (
          dt(c, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (c) {
        return (
          dt(c, function (y) {
            return y;
          }) || []
        );
      },
      only: function (c) {
        if (!wt(c))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return c;
      },
    }),
    (V.Component = G),
    (V.Fragment = p),
    (V.Profiler = N),
    (V.PureComponent = ct),
    (V.StrictMode = E),
    (V.Suspense = F),
    (V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
    (V.act = P),
    (V.cloneElement = function (c, y, U) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var $ = Pe({}, c.props),
        Q = c.key,
        K = c.ref,
        ne = c._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((K = y.ref), (ne = Le.current)),
          y.key !== void 0 && (Q = "" + y.key),
          c.type && c.type.defaultProps)
        )
          var Z = c.type.defaultProps;
        for (oe in y)
          tt.call(y, oe) &&
            !Re.hasOwnProperty(oe) &&
            ($[oe] = y[oe] === void 0 && Z !== void 0 ? Z[oe] : y[oe]);
      }
      var oe = arguments.length - 2;
      if (oe === 1) $.children = U;
      else if (1 < oe) {
        Z = Array(oe);
        for (var He = 0; He < oe; He++) Z[He] = arguments[He + 2];
        $.children = Z;
      }
      return {
        $$typeof: v,
        type: c.type,
        key: Q,
        ref: K,
        props: $,
        _owner: ne,
      };
    }),
    (V.createContext = function (c) {
      return (
        (c = {
          $$typeof: H,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: T, _context: c }),
        (c.Consumer = c)
      );
    }),
    (V.createElement = Ke),
    (V.createFactory = function (c) {
      var y = Ke.bind(null, c);
      return ((y.type = c), y);
    }),
    (V.createRef = function () {
      return { current: null };
    }),
    (V.forwardRef = function (c) {
      return { $$typeof: M, render: c };
    }),
    (V.isValidElement = wt),
    (V.lazy = function (c) {
      return { $$typeof: b, _payload: { _status: -1, _result: c }, _init: Me };
    }),
    (V.memo = function (c, y) {
      return { $$typeof: ee, type: c, compare: y === void 0 ? null : y };
    }),
    (V.startTransition = function (c) {
      var y = x.transition;
      x.transition = {};
      try {
        c();
      } finally {
        x.transition = y;
      }
    }),
    (V.unstable_act = P),
    (V.useCallback = function (c, y) {
      return fe.current.useCallback(c, y);
    }),
    (V.useContext = function (c) {
      return fe.current.useContext(c);
    }),
    (V.useDebugValue = function () {}),
    (V.useDeferredValue = function (c) {
      return fe.current.useDeferredValue(c);
    }),
    (V.useEffect = function (c, y) {
      return fe.current.useEffect(c, y);
    }),
    (V.useId = function () {
      return fe.current.useId();
    }),
    (V.useImperativeHandle = function (c, y, U) {
      return fe.current.useImperativeHandle(c, y, U);
    }),
    (V.useInsertionEffect = function (c, y) {
      return fe.current.useInsertionEffect(c, y);
    }),
    (V.useLayoutEffect = function (c, y) {
      return fe.current.useLayoutEffect(c, y);
    }),
    (V.useMemo = function (c, y) {
      return fe.current.useMemo(c, y);
    }),
    (V.useReducer = function (c, y, U) {
      return fe.current.useReducer(c, y, U);
    }),
    (V.useRef = function (c) {
      return fe.current.useRef(c);
    }),
    (V.useState = function (c) {
      return fe.current.useState(c);
    }),
    (V.useSyncExternalStore = function (c, y, U) {
      return fe.current.useSyncExternalStore(c, y, U);
    }),
    (V.useTransition = function () {
      return fe.current.useTransition();
    }),
    (V.version = "18.3.1"),
    V
  );
}
var ja;
function To() {
  return (ja || ((ja = 1), (_o.exports = Df())), _o.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa;
function If() {
  if (Pa) return wr;
  Pa = 1;
  var v = To(),
    _ = Symbol.for("react.element"),
    p = Symbol.for("react.fragment"),
    E = Object.prototype.hasOwnProperty,
    N = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(M, F, ee) {
    var b,
      X = {},
      B = null,
      se = null;
    (ee !== void 0 && (B = "" + ee),
      F.key !== void 0 && (B = "" + F.key),
      F.ref !== void 0 && (se = F.ref));
    for (b in F) E.call(F, b) && !T.hasOwnProperty(b) && (X[b] = F[b]);
    if (M && M.defaultProps)
      for (b in ((F = M.defaultProps), F)) X[b] === void 0 && (X[b] = F[b]);
    return {
      $$typeof: _,
      type: M,
      key: B,
      ref: se,
      props: X,
      _owner: N.current,
    };
  }
  return ((wr.Fragment = p), (wr.jsx = H), (wr.jsxs = H), wr);
}
var La;
function Of() {
  return (La || ((La = 1), (Co.exports = If())), Co.exports);
}
var d = Of(),
  q = To();
const Ff = Oa(q);
var Tl = {},
  jo = { exports: {} },
  Ue = {},
  Po = { exports: {} },
  Lo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta;
function Af() {
  return (
    Ta ||
      ((Ta = 1),
      (function (v) {
        function _(x, O) {
          var P = x.length;
          x.push(O);
          e: for (; 0 < P; ) {
            var c = (P - 1) >>> 1,
              y = x[c];
            if (0 < N(y, O)) ((x[c] = O), (x[P] = y), (P = c));
            else break e;
          }
        }
        function p(x) {
          return x.length === 0 ? null : x[0];
        }
        function E(x) {
          if (x.length === 0) return null;
          var O = x[0],
            P = x.pop();
          if (P !== O) {
            x[0] = P;
            e: for (var c = 0, y = x.length, U = y >>> 1; c < U; ) {
              var $ = 2 * (c + 1) - 1,
                Q = x[$],
                K = $ + 1,
                ne = x[K];
              if (0 > N(Q, P))
                K < y && 0 > N(ne, Q)
                  ? ((x[c] = ne), (x[K] = P), (c = K))
                  : ((x[c] = Q), (x[$] = P), (c = $));
              else if (K < y && 0 > N(ne, P))
                ((x[c] = ne), (x[K] = P), (c = K));
              else break e;
            }
          }
          return O;
        }
        function N(x, O) {
          var P = x.sortIndex - O.sortIndex;
          return P !== 0 ? P : x.id - O.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var T = performance;
          v.unstable_now = function () {
            return T.now();
          };
        } else {
          var H = Date,
            M = H.now();
          v.unstable_now = function () {
            return H.now() - M;
          };
        }
        var F = [],
          ee = [],
          b = 1,
          X = null,
          B = 3,
          se = !1,
          Pe = !1,
          te = !1,
          G = typeof setTimeout == "function" ? setTimeout : null,
          yt = typeof clearTimeout == "function" ? clearTimeout : null,
          ct = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function et(x) {
          for (var O = p(ee); O !== null; ) {
            if (O.callback === null) E(ee);
            else if (O.startTime <= x)
              (E(ee), (O.sortIndex = O.expirationTime), _(F, O));
            else break;
            O = p(ee);
          }
        }
        function Ee(x) {
          if (((te = !1), et(x), !Pe))
            if (p(F) !== null) ((Pe = !0), Me(tt));
            else {
              var O = p(ee);
              O !== null && fe(Ee, O.startTime - x);
            }
        }
        function tt(x, O) {
          ((Pe = !1), te && ((te = !1), yt(Ke), (Ke = -1)), (se = !0));
          var P = B;
          try {
            for (
              et(O), X = p(F);
              X !== null && (!(X.expirationTime > O) || (x && !Xt()));
            ) {
              var c = X.callback;
              if (typeof c == "function") {
                ((X.callback = null), (B = X.priorityLevel));
                var y = c(X.expirationTime <= O);
                ((O = v.unstable_now()),
                  typeof y == "function"
                    ? (X.callback = y)
                    : X === p(F) && E(F),
                  et(O));
              } else E(F);
              X = p(F);
            }
            if (X !== null) var U = !0;
            else {
              var $ = p(ee);
              ($ !== null && fe(Ee, $.startTime - O), (U = !1));
            }
            return U;
          } finally {
            ((X = null), (B = P), (se = !1));
          }
        }
        var Le = !1,
          Re = null,
          Ke = -1,
          Pt = 5,
          wt = -1;
        function Xt() {
          return !(v.unstable_now() - wt < Pt);
        }
        function ft() {
          if (Re !== null) {
            var x = v.unstable_now();
            wt = x;
            var O = !0;
            try {
              O = Re(!0, x);
            } finally {
              O ? Ve() : ((Le = !1), (Re = null));
            }
          } else Le = !1;
        }
        var Ve;
        if (typeof ct == "function")
          Ve = function () {
            ct(ft);
          };
        else if (typeof MessageChannel < "u") {
          var nt = new MessageChannel(),
            dt = nt.port2;
          ((nt.port1.onmessage = ft),
            (Ve = function () {
              dt.postMessage(null);
            }));
        } else
          Ve = function () {
            G(ft, 0);
          };
        function Me(x) {
          ((Re = x), Le || ((Le = !0), Ve()));
        }
        function fe(x, O) {
          Ke = G(function () {
            x(v.unstable_now());
          }, O);
        }
        ((v.unstable_IdlePriority = 5),
          (v.unstable_ImmediatePriority = 1),
          (v.unstable_LowPriority = 4),
          (v.unstable_NormalPriority = 3),
          (v.unstable_Profiling = null),
          (v.unstable_UserBlockingPriority = 2),
          (v.unstable_cancelCallback = function (x) {
            x.callback = null;
          }),
          (v.unstable_continueExecution = function () {
            Pe || se || ((Pe = !0), Me(tt));
          }),
          (v.unstable_forceFrameRate = function (x) {
            0 > x || 125 < x
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Pt = 0 < x ? Math.floor(1e3 / x) : 5);
          }),
          (v.unstable_getCurrentPriorityLevel = function () {
            return B;
          }),
          (v.unstable_getFirstCallbackNode = function () {
            return p(F);
          }),
          (v.unstable_next = function (x) {
            switch (B) {
              case 1:
              case 2:
              case 3:
                var O = 3;
                break;
              default:
                O = B;
            }
            var P = B;
            B = O;
            try {
              return x();
            } finally {
              B = P;
            }
          }),
          (v.unstable_pauseExecution = function () {}),
          (v.unstable_requestPaint = function () {}),
          (v.unstable_runWithPriority = function (x, O) {
            switch (x) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                x = 3;
            }
            var P = B;
            B = x;
            try {
              return O();
            } finally {
              B = P;
            }
          }),
          (v.unstable_scheduleCallback = function (x, O, P) {
            var c = v.unstable_now();
            switch (
              (typeof P == "object" && P !== null
                ? ((P = P.delay),
                  (P = typeof P == "number" && 0 < P ? c + P : c))
                : (P = c),
              x)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = P + y),
              (x = {
                id: b++,
                callback: O,
                priorityLevel: x,
                startTime: P,
                expirationTime: y,
                sortIndex: -1,
              }),
              P > c
                ? ((x.sortIndex = P),
                  _(ee, x),
                  p(F) === null &&
                    x === p(ee) &&
                    (te ? (yt(Ke), (Ke = -1)) : (te = !0), fe(Ee, P - c)))
                : ((x.sortIndex = y), _(F, x), Pe || se || ((Pe = !0), Me(tt))),
              x
            );
          }),
          (v.unstable_shouldYield = Xt),
          (v.unstable_wrapCallback = function (x) {
            var O = B;
            return function () {
              var P = B;
              B = O;
              try {
                return x.apply(this, arguments);
              } finally {
                B = P;
              }
            };
          }));
      })(Lo)),
    Lo
  );
}
var za;
function Uf() {
  return (za || ((za = 1), (Po.exports = Af())), Po.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ra;
function Vf() {
  if (Ra) return Ue;
  Ra = 1;
  var v = To(),
    _ = Uf();
  function p(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var E = new Set(),
    N = {};
  function T(e, t) {
    (H(e, t), H(e + "Capture", t));
  }
  function H(e, t) {
    for (N[e] = t, e = 0; e < t.length; e++) E.add(t[e]);
  }
  var M = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    F = Object.prototype.hasOwnProperty,
    ee =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    b = {},
    X = {};
  function B(e) {
    return F.call(X, e)
      ? !0
      : F.call(b, e)
        ? !1
        : ee.test(e)
          ? (X[e] = !0)
          : ((b[e] = !0), !1);
  }
  function se(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Pe(e, t, n, r) {
    if (t === null || typeof t > "u" || se(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function te(e, t, n, r, l, i, o) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o));
  }
  var G = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      G[e] = new te(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      G[t] = new te(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        G[e] = new te(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      G[e] = new te(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        G[e] = new te(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      G[e] = new te(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      G[e] = new te(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      G[e] = new te(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      G[e] = new te(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var yt = /[\-:]([a-z])/g;
  function ct(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(yt, ct);
      G[t] = new te(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(yt, ct);
        G[t] = new te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(yt, ct);
      G[t] = new te(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1,
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      G[e] = new te(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (G.xlinkHref = new te(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      G[e] = new te(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function et(e, t, n, r) {
    var l = G.hasOwnProperty(t) ? G[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Pe(t, n, l, r) && (n = null),
      r || l === null
        ? B(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Ee = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    tt = Symbol.for("react.element"),
    Le = Symbol.for("react.portal"),
    Re = Symbol.for("react.fragment"),
    Ke = Symbol.for("react.strict_mode"),
    Pt = Symbol.for("react.profiler"),
    wt = Symbol.for("react.provider"),
    Xt = Symbol.for("react.context"),
    ft = Symbol.for("react.forward_ref"),
    Ve = Symbol.for("react.suspense"),
    nt = Symbol.for("react.suspense_list"),
    dt = Symbol.for("react.memo"),
    Me = Symbol.for("react.lazy"),
    fe = Symbol.for("react.offscreen"),
    x = Symbol.iterator;
  function O(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (x && e[x]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var P = Object.assign,
    c;
  function y(e) {
    if (c === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        c = (t && t[1]) || "";
      }
    return (
      `
` +
      c +
      e
    );
  }
  var U = !1;
  function $(e, t) {
    if (!e || U) return "";
    U = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (h) {
            var r = h;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (h) {
            r = h;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (h) {
          r = h;
        }
        e();
      }
    } catch (h) {
      if (h && r && typeof h.stack == "string") {
        for (
          var l = h.stack.split(`
`),
            i = r.stack.split(`
`),
            o = l.length - 1,
            u = i.length - 1;
          1 <= o && 0 <= u && l[o] !== i[u];
        )
          u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (l[o] !== i[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || l[o] !== i[u])) {
                  var s =
                    `
` + l[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      ((U = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function Q(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = $(e.type, !1)), e);
      case 11:
        return ((e = $(e.type.render, !1)), e);
      case 1:
        return ((e = $(e.type, !0)), e);
      default:
        return "";
    }
  }
  function K(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Re:
        return "Fragment";
      case Le:
        return "Portal";
      case Pt:
        return "Profiler";
      case Ke:
        return "StrictMode";
      case Ve:
        return "Suspense";
      case nt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Xt:
          return (e.displayName || "Context") + ".Consumer";
        case wt:
          return (e._context.displayName || "Context") + ".Provider";
        case ft:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case dt:
          return (
            (t = e.displayName || null),
            t !== null ? t : K(e.type) || "Memo"
          );
        case Me:
          ((t = e._payload), (e = e._init));
          try {
            return K(e(t));
          } catch {}
      }
    return null;
  }
  function ne(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return K(t);
      case 8:
        return t === Ke ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Z(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function oe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function He(e) {
    var t = oe(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (o) {
            ((r = "" + o), i.call(this, o));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Sr(e) {
    e._valueTracker || (e._valueTracker = He(e));
  }
  function Ro(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = oe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function kr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function zl(e, t) {
    var n = t.checked;
    return P({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Mo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = Z(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function Do(e, t) {
    ((t = t.checked), t != null && et(e, "checked", t, !1));
  }
  function Rl(e, t) {
    Do(e, t);
    var n = Z(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Ml(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ml(e, t.type, Z(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function Io(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function Ml(e, t, n) {
    (t !== "number" || kr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Dn = Array.isArray;
  function an(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Z(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Dl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(p(91));
    return P({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Oo(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(p(92));
        if (Dn(n)) {
          if (1 < n.length) throw Error(p(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: Z(n) };
  }
  function Fo(e, t) {
    var n = Z(t.value),
      r = Z(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Ao(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Uo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Il(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Uo(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var xr,
    Vo = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          xr = xr || document.createElement("div"),
            xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = xr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function In(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var On = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Fa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(On).forEach(function (e) {
    Fa.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (On[t] = On[e]));
    });
  });
  function Ho(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (On.hasOwnProperty(e) && On[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function $o(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Ho(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Aa = P(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Ol(e, t) {
    if (t) {
      if (Aa[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(p(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(p(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(p(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(p(62));
    }
  }
  function Fl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Al = null;
  function Ul(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Vl = null,
    cn = null,
    fn = null;
  function Bo(e) {
    if ((e = lr(e))) {
      if (typeof Vl != "function") throw Error(p(280));
      var t = e.stateNode;
      t && ((t = Qr(t)), Vl(e.stateNode, e.type, t));
    }
  }
  function Wo(e) {
    cn ? (fn ? fn.push(e) : (fn = [e])) : (cn = e);
  }
  function Qo() {
    if (cn) {
      var e = cn,
        t = fn;
      if (((fn = cn = null), Bo(e), t)) for (e = 0; e < t.length; e++) Bo(t[e]);
    }
  }
  function Ko(e, t) {
    return e(t);
  }
  function Yo() {}
  var Hl = !1;
  function Xo(e, t, n) {
    if (Hl) return e(t, n);
    Hl = !0;
    try {
      return Ko(e, t, n);
    } finally {
      ((Hl = !1), (cn !== null || fn !== null) && (Yo(), Qo()));
    }
  }
  function Fn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Qr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(p(231, t, typeof n));
    return n;
  }
  var $l = !1;
  if (M)
    try {
      var An = {};
      (Object.defineProperty(An, "passive", {
        get: function () {
          $l = !0;
        },
      }),
        window.addEventListener("test", An, An),
        window.removeEventListener("test", An, An));
    } catch {
      $l = !1;
    }
  function Ua(e, t, n, r, l, i, o, u, s) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (w) {
      this.onError(w);
    }
  }
  var Un = !1,
    Er = null,
    Nr = !1,
    Bl = null,
    Va = {
      onError: function (e) {
        ((Un = !0), (Er = e));
      },
    };
  function Ha(e, t, n, r, l, i, o, u, s) {
    ((Un = !1), (Er = null), Ua.apply(Va, arguments));
  }
  function $a(e, t, n, r, l, i, o, u, s) {
    if ((Ha.apply(this, arguments), Un)) {
      if (Un) {
        var h = Er;
        ((Un = !1), (Er = null));
      } else throw Error(p(198));
      Nr || ((Nr = !0), (Bl = h));
    }
  }
  function Gt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Go(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Zo(e) {
    if (Gt(e) !== e) throw Error(p(188));
  }
  function Ba(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Gt(e)), t === null)) throw Error(p(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return (Zo(l), e);
          if (i === r) return (Zo(l), t);
          i = i.sibling;
        }
        throw Error(p(188));
      }
      if (n.return !== r.return) ((n = l), (r = i));
      else {
        for (var o = !1, u = l.child; u; ) {
          if (u === n) {
            ((o = !0), (n = l), (r = i));
            break;
          }
          if (u === r) {
            ((o = !0), (r = l), (n = i));
            break;
          }
          u = u.sibling;
        }
        if (!o) {
          for (u = i.child; u; ) {
            if (u === n) {
              ((o = !0), (n = i), (r = l));
              break;
            }
            if (u === r) {
              ((o = !0), (r = i), (n = l));
              break;
            }
            u = u.sibling;
          }
          if (!o) throw Error(p(189));
        }
      }
      if (n.alternate !== r) throw Error(p(190));
    }
    if (n.tag !== 3) throw Error(p(188));
    return n.stateNode.current === n ? e : t;
  }
  function Jo(e) {
    return ((e = Ba(e)), e !== null ? qo(e) : null);
  }
  function qo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = qo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var bo = _.unstable_scheduleCallback,
    eu = _.unstable_cancelCallback,
    Wa = _.unstable_shouldYield,
    Qa = _.unstable_requestPaint,
    pe = _.unstable_now,
    Ka = _.unstable_getCurrentPriorityLevel,
    Wl = _.unstable_ImmediatePriority,
    tu = _.unstable_UserBlockingPriority,
    Cr = _.unstable_NormalPriority,
    Ya = _.unstable_LowPriority,
    nu = _.unstable_IdlePriority,
    _r = null,
    pt = null;
  function Xa(e) {
    if (pt && typeof pt.onCommitFiberRoot == "function")
      try {
        pt.onCommitFiberRoot(_r, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var rt = Math.clz32 ? Math.clz32 : Ja,
    Ga = Math.log,
    Za = Math.LN2;
  function Ja(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ga(e) / Za) | 0)) | 0);
  }
  var jr = 64,
    Pr = 4194304;
  function Vn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Lr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var u = o & ~l;
      u !== 0 ? (r = Vn(u)) : ((i &= o), i !== 0 && (r = Vn(i)));
    } else ((o = n & ~l), o !== 0 ? (r = Vn(o)) : i !== 0 && (r = Vn(i)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - rt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function qa(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ba(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;
    ) {
      var o = 31 - rt(i),
        u = 1 << o,
        s = l[o];
      (s === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[o] = qa(u, t))
        : s <= t && (e.expiredLanes |= u),
        (i &= ~u));
    }
  }
  function Ql(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ru() {
    var e = jr;
    return ((jr <<= 1), (jr & 4194240) === 0 && (jr = 64), e);
  }
  function Kl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Hn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - rt(t)),
      (e[t] = n));
  }
  function ec(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - rt(n),
        i = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
    }
  }
  function Yl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - rt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var J = 0;
  function lu(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var iu,
    Xl,
    ou,
    uu,
    su,
    Gl = !1,
    Tr = [],
    Lt = null,
    Tt = null,
    zt = null,
    $n = new Map(),
    Bn = new Map(),
    Rt = [],
    tc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function au(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Lt = null;
        break;
      case "dragenter":
      case "dragleave":
        Tt = null;
        break;
      case "mouseover":
      case "mouseout":
        zt = null;
        break;
      case "pointerover":
      case "pointerout":
        $n.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bn.delete(t.pointerId);
    }
  }
  function Wn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = lr(t)), t !== null && Xl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function nc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((Lt = Wn(Lt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Tt = Wn(Tt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((zt = Wn(zt, e, t, n, r, l)), !0);
      case "pointerover":
        var i = l.pointerId;
        return ($n.set(i, Wn($n.get(i) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return (
          (i = l.pointerId),
          Bn.set(i, Wn(Bn.get(i) || null, e, t, n, r, l)),
          !0
        );
    }
    return !1;
  }
  function cu(e) {
    var t = Zt(e.target);
    if (t !== null) {
      var n = Gt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Go(n)), t !== null)) {
            ((e.blockedOn = t),
              su(e.priority, function () {
                ou(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function zr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Al = r), n.target.dispatchEvent(r), (Al = null));
      } else return ((t = lr(n)), t !== null && Xl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function fu(e, t, n) {
    zr(e) && n.delete(t);
  }
  function rc() {
    ((Gl = !1),
      Lt !== null && zr(Lt) && (Lt = null),
      Tt !== null && zr(Tt) && (Tt = null),
      zt !== null && zr(zt) && (zt = null),
      $n.forEach(fu),
      Bn.forEach(fu));
  }
  function Qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Gl ||
        ((Gl = !0),
        _.unstable_scheduleCallback(_.unstable_NormalPriority, rc)));
  }
  function Kn(e) {
    function t(l) {
      return Qn(l, e);
    }
    if (0 < Tr.length) {
      Qn(Tr[0], e);
      for (var n = 1; n < Tr.length; n++) {
        var r = Tr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Lt !== null && Qn(Lt, e),
        Tt !== null && Qn(Tt, e),
        zt !== null && Qn(zt, e),
        $n.forEach(t),
        Bn.forEach(t),
        n = 0;
      n < Rt.length;
      n++
    )
      ((r = Rt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Rt.length && ((n = Rt[0]), n.blockedOn === null); )
      (cu(n), n.blockedOn === null && Rt.shift());
  }
  var dn = Ee.ReactCurrentBatchConfig,
    Rr = !0;
  function lc(e, t, n, r) {
    var l = J,
      i = dn.transition;
    dn.transition = null;
    try {
      ((J = 1), Zl(e, t, n, r));
    } finally {
      ((J = l), (dn.transition = i));
    }
  }
  function ic(e, t, n, r) {
    var l = J,
      i = dn.transition;
    dn.transition = null;
    try {
      ((J = 4), Zl(e, t, n, r));
    } finally {
      ((J = l), (dn.transition = i));
    }
  }
  function Zl(e, t, n, r) {
    if (Rr) {
      var l = Jl(e, t, n, r);
      if (l === null) (mi(e, t, r, Mr, n), au(e, r));
      else if (nc(l, e, t, n, r)) r.stopPropagation();
      else if ((au(e, r), t & 4 && -1 < tc.indexOf(e))) {
        for (; l !== null; ) {
          var i = lr(l);
          if (
            (i !== null && iu(i),
            (i = Jl(e, t, n, r)),
            i === null && mi(e, t, r, Mr, n),
            i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else mi(e, t, r, null, n);
    }
  }
  var Mr = null;
  function Jl(e, t, n, r) {
    if (((Mr = null), (e = Ul(r)), (e = Zt(e)), e !== null))
      if (((t = Gt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Go(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Mr = e), null);
  }
  function du(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ka()) {
          case Wl:
            return 1;
          case tu:
            return 4;
          case Cr:
          case Ya:
            return 16;
          case nu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mt = null,
    ql = null,
    Dr = null;
  function pu() {
    if (Dr) return Dr;
    var e,
      t = ql,
      n = t.length,
      r,
      l = "value" in Mt ? Mt.value : Mt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (Dr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ir(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Or() {
    return !0;
  }
  function mu() {
    return !1;
  }
  function $e(e) {
    function t(n, r, l, i, o) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null));
      for (var u in e)
        e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Or
          : mu),
        (this.isPropagationStopped = mu),
        this
      );
    }
    return (
      P(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Or));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Or));
        },
        persist: function () {},
        isPersistent: Or,
      }),
      t
    );
  }
  var pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    bl = $e(pn),
    Yn = P({}, pn, { view: 0, detail: 0 }),
    oc = $e(Yn),
    ei,
    ti,
    Xn,
    Fr = P({}, Yn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ri,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Xn &&
              (Xn && e.type === "mousemove"
                ? ((ei = e.screenX - Xn.screenX), (ti = e.screenY - Xn.screenY))
                : (ti = ei = 0),
              (Xn = e)),
            ei);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ti;
      },
    }),
    hu = $e(Fr),
    uc = P({}, Fr, { dataTransfer: 0 }),
    sc = $e(uc),
    ac = P({}, Yn, { relatedTarget: 0 }),
    ni = $e(ac),
    cc = P({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    fc = $e(cc),
    dc = P({}, pn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    pc = $e(dc),
    mc = P({}, pn, { data: 0 }),
    vu = $e(mc),
    hc = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    vc = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    gc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function yc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = gc[e])
        ? !!t[e]
        : !1;
  }
  function ri() {
    return yc;
  }
  var wc = P({}, Yn, {
      key: function (e) {
        if (e.key) {
          var t = hc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? vc[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ri,
      charCode: function (e) {
        return e.type === "keypress" ? Ir(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ir(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Sc = $e(wc),
    kc = P({}, Fr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    gu = $e(kc),
    xc = P({}, Yn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ri,
    }),
    Ec = $e(xc),
    Nc = P({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Cc = $e(Nc),
    _c = P({}, Fr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    jc = $e(_c),
    Pc = [9, 13, 27, 32],
    li = M && "CompositionEvent" in window,
    Gn = null;
  M && "documentMode" in document && (Gn = document.documentMode);
  var Lc = M && "TextEvent" in window && !Gn,
    yu = M && (!li || (Gn && 8 < Gn && 11 >= Gn)),
    wu = " ",
    Su = !1;
  function ku(e, t) {
    switch (e) {
      case "keyup":
        return Pc.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function xu(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var mn = !1;
  function Tc(e, t) {
    switch (e) {
      case "compositionend":
        return xu(t);
      case "keypress":
        return t.which !== 32 ? null : ((Su = !0), wu);
      case "textInput":
        return ((e = t.data), e === wu && Su ? null : e);
      default:
        return null;
    }
  }
  function zc(e, t) {
    if (mn)
      return e === "compositionend" || (!li && ku(e, t))
        ? ((e = pu()), (Dr = ql = Mt = null), (mn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return yu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Rc = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Eu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Rc[e.type] : t === "textarea";
  }
  function Nu(e, t, n, r) {
    (Wo(r),
      (t = $r(t, "onChange")),
      0 < t.length &&
        ((n = new bl("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var Zn = null,
    Jn = null;
  function Mc(e) {
    $u(e, 0);
  }
  function Ar(e) {
    var t = wn(e);
    if (Ro(t)) return e;
  }
  function Dc(e, t) {
    if (e === "change") return t;
  }
  var Cu = !1;
  if (M) {
    var ii;
    if (M) {
      var oi = "oninput" in document;
      if (!oi) {
        var _u = document.createElement("div");
        (_u.setAttribute("oninput", "return;"),
          (oi = typeof _u.oninput == "function"));
      }
      ii = oi;
    } else ii = !1;
    Cu = ii && (!document.documentMode || 9 < document.documentMode);
  }
  function ju() {
    Zn && (Zn.detachEvent("onpropertychange", Pu), (Jn = Zn = null));
  }
  function Pu(e) {
    if (e.propertyName === "value" && Ar(Jn)) {
      var t = [];
      (Nu(t, Jn, e, Ul(e)), Xo(Mc, t));
    }
  }
  function Ic(e, t, n) {
    e === "focusin"
      ? (ju(), (Zn = t), (Jn = n), Zn.attachEvent("onpropertychange", Pu))
      : e === "focusout" && ju();
  }
  function Oc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ar(Jn);
  }
  function Fc(e, t) {
    if (e === "click") return Ar(t);
  }
  function Ac(e, t) {
    if (e === "input" || e === "change") return Ar(t);
  }
  function Uc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var lt = typeof Object.is == "function" ? Object.is : Uc;
  function qn(e, t) {
    if (lt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!F.call(t, l) || !lt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Lu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Tu(e, t) {
    var n = Lu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Lu(n);
    }
  }
  function zu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? zu(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ru() {
    for (var e = window, t = kr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = kr(e.document);
    }
    return t;
  }
  function ui(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Vc(e) {
    var t = Ru(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      zu(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && ui(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          ((r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = Tu(n, i)));
          var o = Tu(n, r);
          l &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var Hc = M && "documentMode" in document && 11 >= document.documentMode,
    hn = null,
    si = null,
    bn = null,
    ai = !1;
  function Mu(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ai ||
      hn == null ||
      hn !== kr(r) ||
      ((r = hn),
      "selectionStart" in r && ui(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (bn && qn(bn, r)) ||
        ((bn = r),
        (r = $r(si, "onSelect")),
        0 < r.length &&
          ((t = new bl("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = hn))));
  }
  function Ur(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var vn = {
      animationend: Ur("Animation", "AnimationEnd"),
      animationiteration: Ur("Animation", "AnimationIteration"),
      animationstart: Ur("Animation", "AnimationStart"),
      transitionend: Ur("Transition", "TransitionEnd"),
    },
    ci = {},
    Du = {};
  M &&
    ((Du = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete vn.animationend.animation,
      delete vn.animationiteration.animation,
      delete vn.animationstart.animation),
    "TransitionEvent" in window || delete vn.transitionend.transition);
  function Vr(e) {
    if (ci[e]) return ci[e];
    if (!vn[e]) return e;
    var t = vn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Du) return (ci[e] = t[n]);
    return e;
  }
  var Iu = Vr("animationend"),
    Ou = Vr("animationiteration"),
    Fu = Vr("animationstart"),
    Au = Vr("transitionend"),
    Uu = new Map(),
    Vu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Dt(e, t) {
    (Uu.set(e, t), T(t, [e]));
  }
  for (var fi = 0; fi < Vu.length; fi++) {
    var di = Vu[fi],
      $c = di.toLowerCase(),
      Bc = di[0].toUpperCase() + di.slice(1);
    Dt($c, "on" + Bc);
  }
  (Dt(Iu, "onAnimationEnd"),
    Dt(Ou, "onAnimationIteration"),
    Dt(Fu, "onAnimationStart"),
    Dt("dblclick", "onDoubleClick"),
    Dt("focusin", "onFocus"),
    Dt("focusout", "onBlur"),
    Dt(Au, "onTransitionEnd"),
    H("onMouseEnter", ["mouseout", "mouseover"]),
    H("onMouseLeave", ["mouseout", "mouseover"]),
    H("onPointerEnter", ["pointerout", "pointerover"]),
    H("onPointerLeave", ["pointerout", "pointerover"]),
    T(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    T(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    T("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    T(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    T(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    T(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var er =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Wc = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(er),
    );
  function Hu(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), $a(r, t, void 0, e), (e.currentTarget = null));
  }
  function $u(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var u = r[o],
              s = u.instance,
              h = u.currentTarget;
            if (((u = u.listener), s !== i && l.isPropagationStopped()))
              break e;
            (Hu(l, u, h), (i = s));
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((u = r[o]),
              (s = u.instance),
              (h = u.currentTarget),
              (u = u.listener),
              s !== i && l.isPropagationStopped())
            )
              break e;
            (Hu(l, u, h), (i = s));
          }
      }
    }
    if (Nr) throw ((e = Bl), (Nr = !1), (Bl = null), e);
  }
  function le(e, t) {
    var n = t[Si];
    n === void 0 && (n = t[Si] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Bu(t, e, 2, !1), n.add(r));
  }
  function pi(e, t, n) {
    var r = 0;
    (t && (r |= 4), Bu(n, e, r, t));
  }
  var Hr = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[Hr]) {
      ((e[Hr] = !0),
        E.forEach(function (n) {
          n !== "selectionchange" && (Wc.has(n) || pi(n, !1, e), pi(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Hr] || ((t[Hr] = !0), pi("selectionchange", !1, t));
    }
  }
  function Bu(e, t, n, r) {
    switch (du(t)) {
      case 1:
        var l = lc;
        break;
      case 4:
        l = ic;
        break;
      default:
        l = Zl;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !$l ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function mi(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var s = o.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = o.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              o = o.return;
            }
          for (; u !== null; ) {
            if (((o = Zt(u)), o === null)) return;
            if (((s = o.tag), s === 5 || s === 6)) {
              r = i = o;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    Xo(function () {
      var h = i,
        w = Ul(n),
        S = [];
      e: {
        var g = Uu.get(e);
        if (g !== void 0) {
          var C = bl,
            L = e;
          switch (e) {
            case "keypress":
              if (Ir(n) === 0) break e;
            case "keydown":
            case "keyup":
              C = Sc;
              break;
            case "focusin":
              ((L = "focus"), (C = ni));
              break;
            case "focusout":
              ((L = "blur"), (C = ni));
              break;
            case "beforeblur":
            case "afterblur":
              C = ni;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              C = hu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = sc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = Ec;
              break;
            case Iu:
            case Ou:
            case Fu:
              C = fc;
              break;
            case Au:
              C = Cc;
              break;
            case "scroll":
              C = oc;
              break;
            case "wheel":
              C = jc;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = pc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = gu;
          }
          var z = (t & 4) !== 0,
            me = !z && e === "scroll",
            f = z ? (g !== null ? g + "Capture" : null) : g;
          z = [];
          for (var a = h, m; a !== null; ) {
            m = a;
            var k = m.stateNode;
            if (
              (m.tag === 5 &&
                k !== null &&
                ((m = k),
                f !== null &&
                  ((k = Fn(a, f)), k != null && z.push(nr(a, k, m)))),
              me)
            )
              break;
            a = a.return;
          }
          0 < z.length &&
            ((g = new C(g, L, null, n, w)), S.push({ event: g, listeners: z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((g = e === "mouseover" || e === "pointerover"),
            (C = e === "mouseout" || e === "pointerout"),
            g &&
              n !== Al &&
              (L = n.relatedTarget || n.fromElement) &&
              (Zt(L) || L[St]))
          )
            break e;
          if (
            (C || g) &&
            ((g =
              w.window === w
                ? w
                : (g = w.ownerDocument)
                  ? g.defaultView || g.parentWindow
                  : window),
            C
              ? ((L = n.relatedTarget || n.toElement),
                (C = h),
                (L = L ? Zt(L) : null),
                L !== null &&
                  ((me = Gt(L)), L !== me || (L.tag !== 5 && L.tag !== 6)) &&
                  (L = null))
              : ((C = null), (L = h)),
            C !== L)
          ) {
            if (
              ((z = hu),
              (k = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((z = gu),
                (k = "onPointerLeave"),
                (f = "onPointerEnter"),
                (a = "pointer")),
              (me = C == null ? g : wn(C)),
              (m = L == null ? g : wn(L)),
              (g = new z(k, a + "leave", C, n, w)),
              (g.target = me),
              (g.relatedTarget = m),
              (k = null),
              Zt(w) === h &&
                ((z = new z(f, a + "enter", L, n, w)),
                (z.target = m),
                (z.relatedTarget = me),
                (k = z)),
              (me = k),
              C && L)
            )
              t: {
                for (z = C, f = L, a = 0, m = z; m; m = gn(m)) a++;
                for (m = 0, k = f; k; k = gn(k)) m++;
                for (; 0 < a - m; ) ((z = gn(z)), a--);
                for (; 0 < m - a; ) ((f = gn(f)), m--);
                for (; a--; ) {
                  if (z === f || (f !== null && z === f.alternate)) break t;
                  ((z = gn(z)), (f = gn(f)));
                }
                z = null;
              }
            else z = null;
            (C !== null && Wu(S, g, C, z, !1),
              L !== null && me !== null && Wu(S, me, L, z, !0));
          }
        }
        e: {
          if (
            ((g = h ? wn(h) : window),
            (C = g.nodeName && g.nodeName.toLowerCase()),
            C === "select" || (C === "input" && g.type === "file"))
          )
            var R = Dc;
          else if (Eu(g))
            if (Cu) R = Ac;
            else {
              R = Oc;
              var D = Ic;
            }
          else
            (C = g.nodeName) &&
              C.toLowerCase() === "input" &&
              (g.type === "checkbox" || g.type === "radio") &&
              (R = Fc);
          if (R && (R = R(e, h))) {
            Nu(S, R, n, w);
            break e;
          }
          (D && D(e, g, h),
            e === "focusout" &&
              (D = g._wrapperState) &&
              D.controlled &&
              g.type === "number" &&
              Ml(g, "number", g.value));
        }
        switch (((D = h ? wn(h) : window), e)) {
          case "focusin":
            (Eu(D) || D.contentEditable === "true") &&
              ((hn = D), (si = h), (bn = null));
            break;
          case "focusout":
            bn = si = hn = null;
            break;
          case "mousedown":
            ai = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((ai = !1), Mu(S, n, w));
            break;
          case "selectionchange":
            if (Hc) break;
          case "keydown":
          case "keyup":
            Mu(S, n, w);
        }
        var I;
        if (li)
          e: {
            switch (e) {
              case "compositionstart":
                var A = "onCompositionStart";
                break e;
              case "compositionend":
                A = "onCompositionEnd";
                break e;
              case "compositionupdate":
                A = "onCompositionUpdate";
                break e;
            }
            A = void 0;
          }
        else
          mn
            ? ku(e, n) && (A = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (A = "onCompositionStart");
        (A &&
          (yu &&
            n.locale !== "ko" &&
            (mn || A !== "onCompositionStart"
              ? A === "onCompositionEnd" && mn && (I = pu())
              : ((Mt = w),
                (ql = "value" in Mt ? Mt.value : Mt.textContent),
                (mn = !0))),
          (D = $r(h, A)),
          0 < D.length &&
            ((A = new vu(A, e, null, n, w)),
            S.push({ event: A, listeners: D }),
            I ? (A.data = I) : ((I = xu(n)), I !== null && (A.data = I)))),
          (I = Lc ? Tc(e, n) : zc(e, n)) &&
            ((h = $r(h, "onBeforeInput")),
            0 < h.length &&
              ((w = new vu("onBeforeInput", "beforeinput", null, n, w)),
              S.push({ event: w, listeners: h }),
              (w.data = I))));
      }
      $u(S, t);
    });
  }
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function $r(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      (l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Fn(e, n)),
        i != null && r.unshift(nr(e, i, l)),
        (i = Fn(e, t)),
        i != null && r.push(nr(e, i, l))),
        (e = e.return));
    }
    return r;
  }
  function gn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Wu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var u = n,
        s = u.alternate,
        h = u.stateNode;
      if (s !== null && s === r) break;
      (u.tag === 5 &&
        h !== null &&
        ((u = h),
        l
          ? ((s = Fn(n, i)), s != null && o.unshift(nr(n, s, u)))
          : l || ((s = Fn(n, i)), s != null && o.push(nr(n, s, u)))),
        (n = n.return));
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Qc = /\r\n?/g,
    Kc = /\u0000|\uFFFD/g;
  function Qu(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Qc,
        `
`,
      )
      .replace(Kc, "");
  }
  function Br(e, t, n) {
    if (((t = Qu(t)), Qu(e) !== t && n)) throw Error(p(425));
  }
  function Wr() {}
  var hi = null,
    vi = null;
  function gi(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yi = typeof setTimeout == "function" ? setTimeout : void 0,
    Yc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ku = typeof Promise == "function" ? Promise : void 0,
    Xc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ku < "u"
          ? function (e) {
              return Ku.resolve(null).then(e).catch(Gc);
            }
          : yi;
  function Gc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function wi(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), Kn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Kn(t);
  }
  function It(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Yu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var yn = Math.random().toString(36).slice(2),
    mt = "__reactFiber$" + yn,
    rr = "__reactProps$" + yn,
    St = "__reactContainer$" + yn,
    Si = "__reactEvents$" + yn,
    Zc = "__reactListeners$" + yn,
    Jc = "__reactHandles$" + yn;
  function Zt(e) {
    var t = e[mt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[St] || n[mt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Yu(e); e !== null; ) {
            if ((n = e[mt])) return n;
            e = Yu(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function lr(e) {
    return (
      (e = e[mt] || e[St]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(p(33));
  }
  function Qr(e) {
    return e[rr] || null;
  }
  var ki = [],
    Sn = -1;
  function Ot(e) {
    return { current: e };
  }
  function ie(e) {
    0 > Sn || ((e.current = ki[Sn]), (ki[Sn] = null), Sn--);
  }
  function re(e, t) {
    (Sn++, (ki[Sn] = e.current), (e.current = t));
  }
  var Ft = {},
    Ne = Ot(Ft),
    De = Ot(!1),
    Jt = Ft;
  function kn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ie(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Kr() {
    (ie(De), ie(Ne));
  }
  function Xu(e, t, n) {
    if (Ne.current !== Ft) throw Error(p(168));
    (re(Ne, t), re(De, n));
  }
  function Gu(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(p(108, ne(e) || "Unknown", l));
    return P({}, n, r);
  }
  function Yr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ft),
      (Jt = Ne.current),
      re(Ne, e),
      re(De, De.current),
      !0
    );
  }
  function Zu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(p(169));
    (n
      ? ((e = Gu(e, t, Jt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ie(De),
        ie(Ne),
        re(Ne, e))
      : ie(De),
      re(De, n));
  }
  var kt = null,
    Xr = !1,
    xi = !1;
  function Ju(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  function qc(e) {
    ((Xr = !0), Ju(e));
  }
  function At() {
    if (!xi && kt !== null) {
      xi = !0;
      var e = 0,
        t = J;
      try {
        var n = kt;
        for (J = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((kt = null), (Xr = !1));
      } catch (l) {
        throw (kt !== null && (kt = kt.slice(e + 1)), bo(Wl, At), l);
      } finally {
        ((J = t), (xi = !1));
      }
    }
    return null;
  }
  var xn = [],
    En = 0,
    Gr = null,
    Zr = 0,
    Ye = [],
    Xe = 0,
    qt = null,
    xt = 1,
    Et = "";
  function bt(e, t) {
    ((xn[En++] = Zr), (xn[En++] = Gr), (Gr = e), (Zr = t));
  }
  function qu(e, t, n) {
    ((Ye[Xe++] = xt), (Ye[Xe++] = Et), (Ye[Xe++] = qt), (qt = e));
    var r = xt;
    e = Et;
    var l = 32 - rt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var i = 32 - rt(t) + l;
    if (30 < i) {
      var o = l - (l % 5);
      ((i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (xt = (1 << (32 - rt(t) + l)) | (n << l) | r),
        (Et = i + e));
    } else ((xt = (1 << i) | (n << l) | r), (Et = e));
  }
  function Ei(e) {
    e.return !== null && (bt(e, 1), qu(e, 1, 0));
  }
  function Ni(e) {
    for (; e === Gr; )
      ((Gr = xn[--En]), (xn[En] = null), (Zr = xn[--En]), (xn[En] = null));
    for (; e === qt; )
      ((qt = Ye[--Xe]),
        (Ye[Xe] = null),
        (Et = Ye[--Xe]),
        (Ye[Xe] = null),
        (xt = Ye[--Xe]),
        (Ye[Xe] = null));
  }
  var Be = null,
    We = null,
    ue = !1,
    it = null;
  function bu(e, t) {
    var n = qe(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function es(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Be = e), (We = It(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Be = e), (We = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = qt !== null ? { id: xt, overflow: Et } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = qe(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Be = e),
              (We = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ci(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function _i(e) {
    if (ue) {
      var t = We;
      if (t) {
        var n = t;
        if (!es(e, t)) {
          if (Ci(e)) throw Error(p(418));
          t = It(n.nextSibling);
          var r = Be;
          t && es(e, t)
            ? bu(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (Be = e));
        }
      } else {
        if (Ci(e)) throw Error(p(418));
        ((e.flags = (e.flags & -4097) | 2), (ue = !1), (Be = e));
      }
    }
  }
  function ts(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    Be = e;
  }
  function Jr(e) {
    if (e !== Be) return !1;
    if (!ue) return (ts(e), (ue = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !gi(e.type, e.memoizedProps))),
      t && (t = We))
    ) {
      if (Ci(e)) throw (ns(), Error(p(418)));
      for (; t; ) (bu(e, t), (t = It(t.nextSibling)));
    }
    if ((ts(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(p(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                We = It(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        We = null;
      }
    } else We = Be ? It(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ns() {
    for (var e = We; e; ) e = It(e.nextSibling);
  }
  function Nn() {
    ((We = Be = null), (ue = !1));
  }
  function ji(e) {
    it === null ? (it = [e]) : it.push(e);
  }
  var bc = Ee.ReactCurrentBatchConfig;
  function ir(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(p(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(p(147, e));
        var l = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (o) {
              var u = l.refs;
              o === null ? delete u[i] : (u[i] = o);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(p(284));
      if (!n._owner) throw Error(p(290, e));
    }
    return e;
  }
  function qr(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        p(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function rs(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ls(e) {
    function t(f, a) {
      if (e) {
        var m = f.deletions;
        m === null ? ((f.deletions = [a]), (f.flags |= 16)) : m.push(a);
      }
    }
    function n(f, a) {
      if (!e) return null;
      for (; a !== null; ) (t(f, a), (a = a.sibling));
      return null;
    }
    function r(f, a) {
      for (f = new Map(); a !== null; )
        (a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling));
      return f;
    }
    function l(f, a) {
      return ((f = Kt(f, a)), (f.index = 0), (f.sibling = null), f);
    }
    function i(f, a, m) {
      return (
        (f.index = m),
        e
          ? ((m = f.alternate),
            m !== null
              ? ((m = m.index), m < a ? ((f.flags |= 2), a) : m)
              : ((f.flags |= 2), a))
          : ((f.flags |= 1048576), a)
      );
    }
    function o(f) {
      return (e && f.alternate === null && (f.flags |= 2), f);
    }
    function u(f, a, m, k) {
      return a === null || a.tag !== 6
        ? ((a = wo(m, f.mode, k)), (a.return = f), a)
        : ((a = l(a, m)), (a.return = f), a);
    }
    function s(f, a, m, k) {
      var R = m.type;
      return R === Re
        ? w(f, a, m.props.children, k, m.key)
        : a !== null &&
            (a.elementType === R ||
              (typeof R == "object" &&
                R !== null &&
                R.$$typeof === Me &&
                rs(R) === a.type))
          ? ((k = l(a, m.props)), (k.ref = ir(f, a, m)), (k.return = f), k)
          : ((k = xl(m.type, m.key, m.props, null, f.mode, k)),
            (k.ref = ir(f, a, m)),
            (k.return = f),
            k);
    }
    function h(f, a, m, k) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== m.containerInfo ||
        a.stateNode.implementation !== m.implementation
        ? ((a = So(m, f.mode, k)), (a.return = f), a)
        : ((a = l(a, m.children || [])), (a.return = f), a);
    }
    function w(f, a, m, k, R) {
      return a === null || a.tag !== 7
        ? ((a = sn(m, f.mode, k, R)), (a.return = f), a)
        : ((a = l(a, m)), (a.return = f), a);
    }
    function S(f, a, m) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = wo("" + a, f.mode, m)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case tt:
            return (
              (m = xl(a.type, a.key, a.props, null, f.mode, m)),
              (m.ref = ir(f, null, a)),
              (m.return = f),
              m
            );
          case Le:
            return ((a = So(a, f.mode, m)), (a.return = f), a);
          case Me:
            var k = a._init;
            return S(f, k(a._payload), m);
        }
        if (Dn(a) || O(a))
          return ((a = sn(a, f.mode, m, null)), (a.return = f), a);
        qr(f, a);
      }
      return null;
    }
    function g(f, a, m, k) {
      var R = a !== null ? a.key : null;
      if ((typeof m == "string" && m !== "") || typeof m == "number")
        return R !== null ? null : u(f, a, "" + m, k);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case tt:
            return m.key === R ? s(f, a, m, k) : null;
          case Le:
            return m.key === R ? h(f, a, m, k) : null;
          case Me:
            return ((R = m._init), g(f, a, R(m._payload), k));
        }
        if (Dn(m) || O(m)) return R !== null ? null : w(f, a, m, k, null);
        qr(f, m);
      }
      return null;
    }
    function C(f, a, m, k, R) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((f = f.get(m) || null), u(a, f, "" + k, R));
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case tt:
            return (
              (f = f.get(k.key === null ? m : k.key) || null),
              s(a, f, k, R)
            );
          case Le:
            return (
              (f = f.get(k.key === null ? m : k.key) || null),
              h(a, f, k, R)
            );
          case Me:
            var D = k._init;
            return C(f, a, m, D(k._payload), R);
        }
        if (Dn(k) || O(k)) return ((f = f.get(m) || null), w(a, f, k, R, null));
        qr(a, k);
      }
      return null;
    }
    function L(f, a, m, k) {
      for (
        var R = null, D = null, I = a, A = (a = 0), Se = null;
        I !== null && A < m.length;
        A++
      ) {
        I.index > A ? ((Se = I), (I = null)) : (Se = I.sibling);
        var Y = g(f, I, m[A], k);
        if (Y === null) {
          I === null && (I = Se);
          break;
        }
        (e && I && Y.alternate === null && t(f, I),
          (a = i(Y, a, A)),
          D === null ? (R = Y) : (D.sibling = Y),
          (D = Y),
          (I = Se));
      }
      if (A === m.length) return (n(f, I), ue && bt(f, A), R);
      if (I === null) {
        for (; A < m.length; A++)
          ((I = S(f, m[A], k)),
            I !== null &&
              ((a = i(I, a, A)),
              D === null ? (R = I) : (D.sibling = I),
              (D = I)));
        return (ue && bt(f, A), R);
      }
      for (I = r(f, I); A < m.length; A++)
        ((Se = C(I, f, A, m[A], k)),
          Se !== null &&
            (e &&
              Se.alternate !== null &&
              I.delete(Se.key === null ? A : Se.key),
            (a = i(Se, a, A)),
            D === null ? (R = Se) : (D.sibling = Se),
            (D = Se)));
      return (
        e &&
          I.forEach(function (Yt) {
            return t(f, Yt);
          }),
        ue && bt(f, A),
        R
      );
    }
    function z(f, a, m, k) {
      var R = O(m);
      if (typeof R != "function") throw Error(p(150));
      if (((m = R.call(m)), m == null)) throw Error(p(151));
      for (
        var D = (R = null), I = a, A = (a = 0), Se = null, Y = m.next();
        I !== null && !Y.done;
        A++, Y = m.next()
      ) {
        I.index > A ? ((Se = I), (I = null)) : (Se = I.sibling);
        var Yt = g(f, I, Y.value, k);
        if (Yt === null) {
          I === null && (I = Se);
          break;
        }
        (e && I && Yt.alternate === null && t(f, I),
          (a = i(Yt, a, A)),
          D === null ? (R = Yt) : (D.sibling = Yt),
          (D = Yt),
          (I = Se));
      }
      if (Y.done) return (n(f, I), ue && bt(f, A), R);
      if (I === null) {
        for (; !Y.done; A++, Y = m.next())
          ((Y = S(f, Y.value, k)),
            Y !== null &&
              ((a = i(Y, a, A)),
              D === null ? (R = Y) : (D.sibling = Y),
              (D = Y)));
        return (ue && bt(f, A), R);
      }
      for (I = r(f, I); !Y.done; A++, Y = m.next())
        ((Y = C(I, f, A, Y.value, k)),
          Y !== null &&
            (e && Y.alternate !== null && I.delete(Y.key === null ? A : Y.key),
            (a = i(Y, a, A)),
            D === null ? (R = Y) : (D.sibling = Y),
            (D = Y)));
      return (
        e &&
          I.forEach(function (Mf) {
            return t(f, Mf);
          }),
        ue && bt(f, A),
        R
      );
    }
    function me(f, a, m, k) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === Re &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case tt:
            e: {
              for (var R = m.key, D = a; D !== null; ) {
                if (D.key === R) {
                  if (((R = m.type), R === Re)) {
                    if (D.tag === 7) {
                      (n(f, D.sibling),
                        (a = l(D, m.props.children)),
                        (a.return = f),
                        (f = a));
                      break e;
                    }
                  } else if (
                    D.elementType === R ||
                    (typeof R == "object" &&
                      R !== null &&
                      R.$$typeof === Me &&
                      rs(R) === D.type)
                  ) {
                    (n(f, D.sibling),
                      (a = l(D, m.props)),
                      (a.ref = ir(f, D, m)),
                      (a.return = f),
                      (f = a));
                    break e;
                  }
                  n(f, D);
                  break;
                } else t(f, D);
                D = D.sibling;
              }
              m.type === Re
                ? ((a = sn(m.props.children, f.mode, k, m.key)),
                  (a.return = f),
                  (f = a))
                : ((k = xl(m.type, m.key, m.props, null, f.mode, k)),
                  (k.ref = ir(f, a, m)),
                  (k.return = f),
                  (f = k));
            }
            return o(f);
          case Le:
            e: {
              for (D = m.key; a !== null; ) {
                if (a.key === D)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === m.containerInfo &&
                    a.stateNode.implementation === m.implementation
                  ) {
                    (n(f, a.sibling),
                      (a = l(a, m.children || [])),
                      (a.return = f),
                      (f = a));
                    break e;
                  } else {
                    n(f, a);
                    break;
                  }
                else t(f, a);
                a = a.sibling;
              }
              ((a = So(m, f.mode, k)), (a.return = f), (f = a));
            }
            return o(f);
          case Me:
            return ((D = m._init), me(f, a, D(m._payload), k));
        }
        if (Dn(m)) return L(f, a, m, k);
        if (O(m)) return z(f, a, m, k);
        qr(f, m);
      }
      return (typeof m == "string" && m !== "") || typeof m == "number"
        ? ((m = "" + m),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, m)), (a.return = f), (f = a))
            : (n(f, a), (a = wo(m, f.mode, k)), (a.return = f), (f = a)),
          o(f))
        : n(f, a);
    }
    return me;
  }
  var Cn = ls(!0),
    is = ls(!1),
    br = Ot(null),
    el = null,
    _n = null,
    Pi = null;
  function Li() {
    Pi = _n = el = null;
  }
  function Ti(e) {
    var t = br.current;
    (ie(br), (e._currentValue = t));
  }
  function zi(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function jn(e, t) {
    ((el = e),
      (Pi = _n = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Oe = !0), (e.firstContext = null)));
  }
  function Ge(e) {
    var t = e._currentValue;
    if (Pi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), _n === null)) {
        if (el === null) throw Error(p(308));
        ((_n = e), (el.dependencies = { lanes: 0, firstContext: e }));
      } else _n = _n.next = e;
    return t;
  }
  var en = null;
  function Ri(e) {
    en === null ? (en = [e]) : en.push(e);
  }
  function os(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Ri(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Nt(e, r)
    );
  }
  function Nt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ut = !1;
  function Mi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function us(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Ct(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Vt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (W & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Nt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Ri(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Nt(e, n)
    );
  }
  function tl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Yl(e, n));
    }
  }
  function ss(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (i === null ? (l = i = o) : (i = i.next = o), (n = n.next));
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function nl(e, t, n, r) {
    var l = e.updateQueue;
    Ut = !1;
    var i = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u,
        h = s.next;
      ((s.next = null), o === null ? (i = h) : (o.next = h), (o = s));
      var w = e.alternate;
      w !== null &&
        ((w = w.updateQueue),
        (u = w.lastBaseUpdate),
        u !== o &&
          (u === null ? (w.firstBaseUpdate = h) : (u.next = h),
          (w.lastBaseUpdate = s)));
    }
    if (i !== null) {
      var S = l.baseState;
      ((o = 0), (w = h = s = null), (u = i));
      do {
        var g = u.lane,
          C = u.eventTime;
        if ((r & g) === g) {
          w !== null &&
            (w = w.next =
              {
                eventTime: C,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var L = e,
              z = u;
            switch (((g = t), (C = n), z.tag)) {
              case 1:
                if (((L = z.payload), typeof L == "function")) {
                  S = L.call(C, S, g);
                  break e;
                }
                S = L;
                break e;
              case 3:
                L.flags = (L.flags & -65537) | 128;
              case 0:
                if (
                  ((L = z.payload),
                  (g = typeof L == "function" ? L.call(C, S, g) : L),
                  g == null)
                )
                  break e;
                S = P({}, S, g);
                break e;
              case 2:
                Ut = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64),
            (g = l.effects),
            g === null ? (l.effects = [u]) : g.push(u));
        } else
          ((C = {
            eventTime: C,
            lane: g,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            w === null ? ((h = w = C), (s = S)) : (w = w.next = C),
            (o |= g));
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          ((g = u),
            (u = g.next),
            (g.next = null),
            (l.lastBaseUpdate = g),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (w === null && (s = S),
        (l.baseState = s),
        (l.firstBaseUpdate = h),
        (l.lastBaseUpdate = w),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((o |= l.lane), (l = l.next));
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      ((rn |= o), (e.lanes = o), (e.memoizedState = S));
    }
  }
  function as(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(p(191, l));
          l.call(r);
        }
      }
  }
  var or = {},
    ht = Ot(or),
    ur = Ot(or),
    sr = Ot(or);
  function tn(e) {
    if (e === or) throw Error(p(174));
    return e;
  }
  function Di(e, t) {
    switch ((re(sr, t), re(ur, e), re(ht, or), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Il(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Il(t, e)));
    }
    (ie(ht), re(ht, t));
  }
  function Pn() {
    (ie(ht), ie(ur), ie(sr));
  }
  function cs(e) {
    tn(sr.current);
    var t = tn(ht.current),
      n = Il(t, e.type);
    t !== n && (re(ur, e), re(ht, n));
  }
  function Ii(e) {
    ur.current === e && (ie(ht), ie(ur));
  }
  var ae = Ot(0);
  function rl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Oi = [];
  function Fi() {
    for (var e = 0; e < Oi.length; e++)
      Oi[e]._workInProgressVersionPrimary = null;
    Oi.length = 0;
  }
  var ll = Ee.ReactCurrentDispatcher,
    Ai = Ee.ReactCurrentBatchConfig,
    nn = 0,
    ce = null,
    ve = null,
    ye = null,
    il = !1,
    ar = !1,
    cr = 0,
    ef = 0;
  function Ce() {
    throw Error(p(321));
  }
  function Ui(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!lt(e[n], t[n])) return !1;
    return !0;
  }
  function Vi(e, t, n, r, l, i) {
    if (
      ((nn = i),
      (ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ll.current = e === null || e.memoizedState === null ? lf : of),
      (e = n(r, l)),
      ar)
    ) {
      i = 0;
      do {
        if (((ar = !1), (cr = 0), 25 <= i)) throw Error(p(301));
        ((i += 1),
          (ye = ve = null),
          (t.updateQueue = null),
          (ll.current = uf),
          (e = n(r, l)));
      } while (ar);
    }
    if (
      ((ll.current = sl),
      (t = ve !== null && ve.next !== null),
      (nn = 0),
      (ye = ve = ce = null),
      (il = !1),
      t)
    )
      throw Error(p(300));
    return e;
  }
  function Hi() {
    var e = cr !== 0;
    return ((cr = 0), e);
  }
  function vt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (ye === null ? (ce.memoizedState = ye = e) : (ye = ye.next = e), ye);
  }
  function Ze() {
    if (ve === null) {
      var e = ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ve.next;
    var t = ye === null ? ce.memoizedState : ye.next;
    if (t !== null) ((ye = t), (ve = e));
    else {
      if (e === null) throw Error(p(310));
      ((ve = e),
        (e = {
          memoizedState: ve.memoizedState,
          baseState: ve.baseState,
          baseQueue: ve.baseQueue,
          queue: ve.queue,
          next: null,
        }),
        ye === null ? (ce.memoizedState = ye = e) : (ye = ye.next = e));
    }
    return ye;
  }
  function fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function $i(e) {
    var t = Ze(),
      n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = ve,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        ((l.next = i.next), (i.next = o));
      }
      ((r.baseQueue = l = i), (n.pending = null));
    }
    if (l !== null) {
      ((i = l.next), (r = r.baseState));
      var u = (o = null),
        s = null,
        h = i;
      do {
        var w = h.lane;
        if ((nn & w) === w)
          (s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: h.action,
                hasEagerState: h.hasEagerState,
                eagerState: h.eagerState,
                next: null,
              }),
            (r = h.hasEagerState ? h.eagerState : e(r, h.action)));
        else {
          var S = {
            lane: w,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          };
          (s === null ? ((u = s = S), (o = r)) : (s = s.next = S),
            (ce.lanes |= w),
            (rn |= w));
        }
        h = h.next;
      } while (h !== null && h !== i);
      (s === null ? (o = r) : (s.next = u),
        lt(r, t.memoizedState) || (Oe = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((i = l.lane), (ce.lanes |= i), (rn |= i), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Bi(e) {
    var t = Ze(),
      n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = (l = l.next);
      do ((i = e(i, o.action)), (o = o.next));
      while (o !== l);
      (lt(i, t.memoizedState) || (Oe = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function fs() {}
  function ds(e, t) {
    var n = ce,
      r = Ze(),
      l = t(),
      i = !lt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Oe = !0)),
      (r = r.queue),
      Wi(hs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (ye !== null && ye.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        dr(9, ms.bind(null, n, r, l, t), void 0, null),
        we === null)
      )
        throw Error(p(349));
      (nn & 30) !== 0 || ps(n, t, l);
    }
    return l;
  }
  function ps(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ce.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ms(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), vs(t) && gs(e));
  }
  function hs(e, t, n) {
    return n(function () {
      vs(t) && gs(e);
    });
  }
  function vs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !lt(e, n);
    } catch {
      return !0;
    }
  }
  function gs(e) {
    var t = Nt(e, 1);
    t !== null && at(t, e, 1, -1);
  }
  function ys(e) {
    var t = vt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = rf.bind(null, ce, e)),
      [t.memoizedState, e]
    );
  }
  function dr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ce.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ws() {
    return Ze().memoizedState;
  }
  function ol(e, t, n, r) {
    var l = vt();
    ((ce.flags |= e),
      (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function ul(e, t, n, r) {
    var l = Ze();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ve !== null) {
      var o = ve.memoizedState;
      if (((i = o.destroy), r !== null && Ui(r, o.deps))) {
        l.memoizedState = dr(t, n, i, r);
        return;
      }
    }
    ((ce.flags |= e), (l.memoizedState = dr(1 | t, n, i, r)));
  }
  function Ss(e, t) {
    return ol(8390656, 8, e, t);
  }
  function Wi(e, t) {
    return ul(2048, 8, e, t);
  }
  function ks(e, t) {
    return ul(4, 2, e, t);
  }
  function xs(e, t) {
    return ul(4, 4, e, t);
  }
  function Es(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ns(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      ul(4, 4, Es.bind(null, t, e), n)
    );
  }
  function Qi() {}
  function Cs(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ui(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function _s(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ui(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function js(e, t, n) {
    return (nn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n))
      : (lt(n, t) ||
          ((n = ru()), (ce.lanes |= n), (rn |= n), (e.baseState = !0)),
        t);
  }
  function tf(e, t) {
    var n = J;
    ((J = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Ai.transition;
    Ai.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((J = n), (Ai.transition = r));
    }
  }
  function Ps() {
    return Ze().memoizedState;
  }
  function nf(e, t, n) {
    var r = Wt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ls(e))
    )
      Ts(t, n);
    else if (((n = os(e, t, n, r)), n !== null)) {
      var l = ze();
      (at(n, e, r, l), zs(n, t, r));
    }
  }
  function rf(e, t, n) {
    var r = Wt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Ls(e)) Ts(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var o = t.lastRenderedState,
            u = i(o, n);
          if (((l.hasEagerState = !0), (l.eagerState = u), lt(u, o))) {
            var s = t.interleaved;
            (s === null
              ? ((l.next = l), Ri(t))
              : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = os(e, t, l, r)),
        n !== null && ((l = ze()), at(n, e, r, l), zs(n, t, r)));
    }
  }
  function Ls(e) {
    var t = e.alternate;
    return e === ce || (t !== null && t === ce);
  }
  function Ts(e, t) {
    ar = il = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function zs(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Yl(e, n));
    }
  }
  var sl = {
      readContext: Ge,
      useCallback: Ce,
      useContext: Ce,
      useEffect: Ce,
      useImperativeHandle: Ce,
      useInsertionEffect: Ce,
      useLayoutEffect: Ce,
      useMemo: Ce,
      useReducer: Ce,
      useRef: Ce,
      useState: Ce,
      useDebugValue: Ce,
      useDeferredValue: Ce,
      useTransition: Ce,
      useMutableSource: Ce,
      useSyncExternalStore: Ce,
      useId: Ce,
      unstable_isNewReconciler: !1,
    },
    lf = {
      readContext: Ge,
      useCallback: function (e, t) {
        return ((vt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ge,
      useEffect: Ss,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          ol(4194308, 4, Es.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return ol(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ol(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = vt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = vt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = nf.bind(null, ce, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = vt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ys,
      useDebugValue: Qi,
      useDeferredValue: function (e) {
        return (vt().memoizedState = e);
      },
      useTransition: function () {
        var e = ys(!1),
          t = e[0];
        return ((e = tf.bind(null, e[1])), (vt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ce,
          l = vt();
        if (ue) {
          if (n === void 0) throw Error(p(407));
          n = n();
        } else {
          if (((n = t()), we === null)) throw Error(p(349));
          (nn & 30) !== 0 || ps(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          Ss(hs.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          dr(9, ms.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = vt(),
          t = we.identifierPrefix;
        if (ue) {
          var n = Et,
            r = xt;
          ((n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = cr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = ef++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    of = {
      readContext: Ge,
      useCallback: Cs,
      useContext: Ge,
      useEffect: Wi,
      useImperativeHandle: Ns,
      useInsertionEffect: ks,
      useLayoutEffect: xs,
      useMemo: _s,
      useReducer: $i,
      useRef: ws,
      useState: function () {
        return $i(fr);
      },
      useDebugValue: Qi,
      useDeferredValue: function (e) {
        var t = Ze();
        return js(t, ve.memoizedState, e);
      },
      useTransition: function () {
        var e = $i(fr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: fs,
      useSyncExternalStore: ds,
      useId: Ps,
      unstable_isNewReconciler: !1,
    },
    uf = {
      readContext: Ge,
      useCallback: Cs,
      useContext: Ge,
      useEffect: Wi,
      useImperativeHandle: Ns,
      useInsertionEffect: ks,
      useLayoutEffect: xs,
      useMemo: _s,
      useReducer: Bi,
      useRef: ws,
      useState: function () {
        return Bi(fr);
      },
      useDebugValue: Qi,
      useDeferredValue: function (e) {
        var t = Ze();
        return ve === null ? (t.memoizedState = e) : js(t, ve.memoizedState, e);
      },
      useTransition: function () {
        var e = Bi(fr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: fs,
      useSyncExternalStore: ds,
      useId: Ps,
      unstable_isNewReconciler: !1,
    };
  function ot(e, t) {
    if (e && e.defaultProps) {
      ((t = P({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ki(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : P({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var al = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Gt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = ze(),
        l = Wt(e),
        i = Ct(r, l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = Vt(e, i, l)),
        t !== null && (at(t, e, l, r), tl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = ze(),
        l = Wt(e),
        i = Ct(r, l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Vt(e, i, l)),
        t !== null && (at(t, e, l, r), tl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ze(),
        r = Wt(e),
        l = Ct(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Vt(e, l, r)),
        t !== null && (at(t, e, r, n), tl(t, e, r)));
    },
  };
  function Rs(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
          ? !qn(n, r) || !qn(l, i)
          : !0
    );
  }
  function Ms(e, t, n) {
    var r = !1,
      l = Ft,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Ge(i))
        : ((l = Ie(t) ? Jt : Ne.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? kn(e, l) : Ft)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = al),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Ds(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && al.enqueueReplaceState(t, t.state, null));
  }
  function Yi(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Mi(e));
    var i = t.contextType;
    (typeof i == "object" && i !== null
      ? (l.context = Ge(i))
      : ((i = Ie(t) ? Jt : Ne.current), (l.context = kn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Ki(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && al.enqueueReplaceState(l, l.state, null),
        nl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Ln(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += Q(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Xi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Gi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var sf = typeof WeakMap == "function" ? WeakMap : Map;
  function Is(e, t, n) {
    ((n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (vl || ((vl = !0), (co = r)), Gi(e, t));
      }),
      n
    );
  }
  function Os(e, t, n) {
    ((n = Ct(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Gi(e, t);
        }));
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          (Gi(e, t),
            typeof r != "function" &&
              ($t === null ? ($t = new Set([this])) : $t.add(this)));
          var o = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : "",
          });
        }),
      n
    );
  }
  function Fs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new sf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = xf.bind(null, e, t, n)), t.then(e, e));
  }
  function As(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Us(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Ct(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var af = Ee.ReactCurrentOwner,
    Oe = !1;
  function Te(e, t, n, r) {
    t.child = e === null ? is(t, null, n, r) : Cn(t, e.child, n, r);
  }
  function Vs(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      jn(t, l),
      (r = Vi(e, t, n, r, i, l)),
      (n = Hi()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          _t(e, t, l))
        : (ue && n && Ei(t), (t.flags |= 1), Te(e, t, r, l), t.child)
    );
  }
  function Hs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !yo(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), $s(e, t, i, r, l))
        : ((e = xl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var o = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : qn), n(o, r) && e.ref === t.ref)
      )
        return _t(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Kt(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function $s(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (qn(i, r) && e.ref === t.ref)
        if (((Oe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Oe = !0);
        else return ((t.lanes = e.lanes), _t(e, t, l));
    }
    return Zi(e, t, n, r, l);
  }
  function Bs(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          re(zn, Qe),
          (Qe |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            re(zn, Qe),
            (Qe |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          re(zn, Qe),
          (Qe |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        re(zn, Qe),
        (Qe |= r));
    return (Te(e, t, l, n), t.child);
  }
  function Ws(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Zi(e, t, n, r, l) {
    var i = Ie(n) ? Jt : Ne.current;
    return (
      (i = kn(t, i)),
      jn(t, l),
      (n = Vi(e, t, n, r, i, l)),
      (r = Hi()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          _t(e, t, l))
        : (ue && r && Ei(t), (t.flags |= 1), Te(e, t, n, l), t.child)
    );
  }
  function Qs(e, t, n, r, l) {
    if (Ie(n)) {
      var i = !0;
      Yr(t);
    } else i = !1;
    if ((jn(t, l), t.stateNode === null))
      (fl(e, t), Ms(t, n, r), Yi(t, n, r, l), (r = !0));
    else if (e === null) {
      var o = t.stateNode,
        u = t.memoizedProps;
      o.props = u;
      var s = o.context,
        h = n.contextType;
      typeof h == "object" && h !== null
        ? (h = Ge(h))
        : ((h = Ie(n) ? Jt : Ne.current), (h = kn(t, h)));
      var w = n.getDerivedStateFromProps,
        S =
          typeof w == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      (S ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== r || s !== h) && Ds(t, o, r, h)),
        (Ut = !1));
      var g = t.memoizedState;
      ((o.state = g),
        nl(t, r, o, l),
        (s = t.memoizedState),
        u !== r || g !== s || De.current || Ut
          ? (typeof w == "function" && (Ki(t, n, w, r), (s = t.memoizedState)),
            (u = Ut || Rs(t, n, u, r, g, s, h))
              ? (S ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (o.props = r),
            (o.state = s),
            (o.context = h),
            (r = u))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((o = t.stateNode),
        us(e, t),
        (u = t.memoizedProps),
        (h = t.type === t.elementType ? u : ot(t.type, u)),
        (o.props = h),
        (S = t.pendingProps),
        (g = o.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Ge(s))
          : ((s = Ie(n) ? Jt : Ne.current), (s = kn(t, s))));
      var C = n.getDerivedStateFromProps;
      ((w =
        typeof C == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== S || g !== s) && Ds(t, o, r, s)),
        (Ut = !1),
        (g = t.memoizedState),
        (o.state = g),
        nl(t, r, o, l));
      var L = t.memoizedState;
      u !== S || g !== L || De.current || Ut
        ? (typeof C == "function" && (Ki(t, n, C, r), (L = t.memoizedState)),
          (h = Ut || Rs(t, n, h, r, g, L, s) || !1)
            ? (w ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, L, s),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, L, s)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (u === e.memoizedProps && g === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && g === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = L)),
          (o.props = r),
          (o.state = L),
          (o.context = s),
          (r = h))
        : (typeof o.componentDidUpdate != "function" ||
            (u === e.memoizedProps && g === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && g === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Ji(e, t, n, r, i, l);
  }
  function Ji(e, t, n, r, l, i) {
    Ws(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return (l && Zu(t, n, !1), _t(e, t, i));
    ((r = t.stateNode), (af.current = t));
    var u =
      o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = Cn(t, e.child, null, i)), (t.child = Cn(t, null, u, i)))
        : Te(e, t, u, i),
      (t.memoizedState = r.state),
      l && Zu(t, n, !0),
      t.child
    );
  }
  function Ks(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Xu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Xu(e, t.context, !1),
      Di(e, t.containerInfo));
  }
  function Ys(e, t, n, r, l) {
    return (Nn(), ji(l), (t.flags |= 256), Te(e, t, n, r), t.child);
  }
  var qi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Xs(e, t, n) {
    var r = t.pendingProps,
      l = ae.current,
      i = !1,
      o = (t.flags & 128) !== 0,
      u;
    if (
      ((u = o) ||
        (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      re(ae, l & 1),
      e === null)
    )
      return (
        _i(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((o = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (o = { mode: "hidden", children: o }),
                (r & 1) === 0 && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = o))
                  : (i = El(o, r, 0, null)),
                (e = sn(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = bi(n)),
                (t.memoizedState = qi),
                e)
              : eo(t, o))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return cf(e, t, o, r, u, l, n);
    if (i) {
      ((i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling));
      var s = { mode: "hidden", children: r.children };
      return (
        (o & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (t.deletions = null))
          : ((r = Kt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (i = Kt(u, i)) : ((i = sn(i, o, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? bi(n)
            : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions,
              }),
        (i.memoizedState = o),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = qi),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Kt(i, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function eo(e, t) {
    return (
      (t = El({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function cl(e, t, n, r) {
    return (
      r !== null && ji(r),
      Cn(t, e.child, null, n),
      (e = eo(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function cf(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Xi(Error(p(422)))), cl(e, t, o, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = El({ mode: "visible", children: r.children }, l, 0, null)),
            (i = sn(i, l, o, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && Cn(t, e.child, null, o),
            (t.child.memoizedState = bi(o)),
            (t.memoizedState = qi),
            i);
    if ((t.mode & 1) === 0) return cl(e, t, o, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return (
        (r = u),
        (i = Error(p(419))),
        (r = Xi(i, r, void 0)),
        cl(e, t, o, r)
      );
    }
    if (((u = (o & e.childLanes) !== 0), Oe || u)) {
      if (((r = we), r !== null)) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), Nt(e, l), at(r, e, l, -1)));
      }
      return (go(), (r = Xi(Error(p(421)))), cl(e, t, o, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Ef.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (We = It(l.nextSibling)),
        (Be = t),
        (ue = !0),
        (it = null),
        e !== null &&
          ((Ye[Xe++] = xt),
          (Ye[Xe++] = Et),
          (Ye[Xe++] = qt),
          (xt = e.id),
          (Et = e.overflow),
          (qt = t)),
        (t = eo(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Gs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), zi(e.return, t, n));
  }
  function to(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function Zs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Te(e, t, r.children, n), (r = ae.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Gs(e, n, t);
          else if (e.tag === 19) Gs(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((re(ae, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && rl(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            to(t, !1, l, n, i));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && rl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          to(t, !0, n, null, i);
          break;
        case "together":
          to(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function fl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function _t(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (rn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(p(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = Kt(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function ff(e, t, n) {
    switch (t.tag) {
      case 3:
        (Ks(t), Nn());
        break;
      case 5:
        cs(t);
        break;
      case 1:
        Ie(t.type) && Yr(t);
        break;
      case 4:
        Di(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (re(br, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (re(ae, ae.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Xs(e, t, n)
              : (re(ae, ae.current & 1),
                (e = _t(e, t, n)),
                e !== null ? e.sibling : null);
        re(ae, ae.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Zs(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          re(ae, ae.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Bs(e, t, n));
    }
    return _t(e, t, n);
  }
  var Js, no, qs, bs;
  ((Js = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (no = function () {}),
    (qs = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), tn(ht.current));
        var i = null;
        switch (n) {
          case "input":
            ((l = zl(e, l)), (r = zl(e, r)), (i = []));
            break;
          case "select":
            ((l = P({}, l, { value: void 0 })),
              (r = P({}, r, { value: void 0 })),
              (i = []));
            break;
          case "textarea":
            ((l = Dl(e, l)), (r = Dl(e, r)), (i = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Wr);
        }
        Ol(n, r);
        var o;
        n = null;
        for (h in l)
          if (!r.hasOwnProperty(h) && l.hasOwnProperty(h) && l[h] != null)
            if (h === "style") {
              var u = l[h];
              for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              h !== "dangerouslySetInnerHTML" &&
                h !== "children" &&
                h !== "suppressContentEditableWarning" &&
                h !== "suppressHydrationWarning" &&
                h !== "autoFocus" &&
                (N.hasOwnProperty(h)
                  ? i || (i = [])
                  : (i = i || []).push(h, null));
        for (h in r) {
          var s = r[h];
          if (
            ((u = l != null ? l[h] : void 0),
            r.hasOwnProperty(h) && s !== u && (s != null || u != null))
          )
            if (h === "style")
              if (u) {
                for (o in u)
                  !u.hasOwnProperty(o) ||
                    (s && s.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in s)
                  s.hasOwnProperty(o) &&
                    u[o] !== s[o] &&
                    (n || (n = {}), (n[o] = s[o]));
              } else (n || (i || (i = []), i.push(h, n)), (n = s));
            else
              h === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (u = u ? u.__html : void 0),
                  s != null && u !== s && (i = i || []).push(h, s))
                : h === "children"
                  ? (typeof s != "string" && typeof s != "number") ||
                    (i = i || []).push(h, "" + s)
                  : h !== "suppressContentEditableWarning" &&
                    h !== "suppressHydrationWarning" &&
                    (N.hasOwnProperty(h)
                      ? (s != null && h === "onScroll" && le("scroll", e),
                        i || u === s || (i = []))
                      : (i = i || []).push(h, s));
        }
        n && (i = i || []).push("style", n);
        var h = i;
        (t.updateQueue = h) && (t.flags |= 4);
      }
    }),
    (bs = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function pr(e, t) {
    if (!ue)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function _e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function df(e, t, n) {
    var r = t.pendingProps;
    switch ((Ni(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (_e(t), null);
      case 1:
        return (Ie(t.type) && Kr(), _e(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Pn(),
          ie(De),
          ie(Ne),
          Fi(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Jr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), it !== null && (mo(it), (it = null)))),
          no(e, t),
          _e(t),
          null
        );
      case 5:
        Ii(t);
        var l = tn(sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (qs(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(p(166));
            return (_e(t), null);
          }
          if (((e = tn(ht.current)), Jr(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[mt] = t), (r[rr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (le("cancel", r), le("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                le("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < er.length; l++) le(er[l], r);
                break;
              case "source":
                le("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (le("error", r), le("load", r));
                break;
              case "details":
                le("toggle", r);
                break;
              case "input":
                (Mo(r, i), le("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!i.multiple }),
                  le("invalid", r));
                break;
              case "textarea":
                (Oo(r, i), le("invalid", r));
            }
            (Ol(n, i), (l = null));
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var u = i[o];
                o === "children"
                  ? typeof u == "string"
                    ? r.textContent !== u &&
                      (i.suppressHydrationWarning !== !0 &&
                        Br(r.textContent, u, e),
                      (l = ["children", u]))
                    : typeof u == "number" &&
                      r.textContent !== "" + u &&
                      (i.suppressHydrationWarning !== !0 &&
                        Br(r.textContent, u, e),
                      (l = ["children", "" + u]))
                  : N.hasOwnProperty(o) &&
                    u != null &&
                    o === "onScroll" &&
                    le("scroll", r);
              }
            switch (n) {
              case "input":
                (Sr(r), Io(r, i, !0));
                break;
              case "textarea":
                (Sr(r), Ao(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Wr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((o = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Uo(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = o.createElement(n, { is: r.is }))
                    : ((e = o.createElement(n)),
                      n === "select" &&
                        ((o = e),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[mt] = t),
              (e[rr] = r),
              Js(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((o = Fl(n, r)), n)) {
                case "dialog":
                  (le("cancel", e), le("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (le("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < er.length; l++) le(er[l], e);
                  l = r;
                  break;
                case "source":
                  (le("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (le("error", e), le("load", e), (l = r));
                  break;
                case "details":
                  (le("toggle", e), (l = r));
                  break;
                case "input":
                  (Mo(e, r), (l = zl(e, r)), le("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = P({}, r, { value: void 0 })),
                    le("invalid", e));
                  break;
                case "textarea":
                  (Oo(e, r), (l = Dl(e, r)), le("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Ol(n, l), (u = l));
              for (i in u)
                if (u.hasOwnProperty(i)) {
                  var s = u[i];
                  i === "style"
                    ? $o(e, s)
                    : i === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Vo(e, s))
                      : i === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && In(e, s)
                          : typeof s == "number" && In(e, "" + s)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (N.hasOwnProperty(i)
                            ? s != null && i === "onScroll" && le("scroll", e)
                            : s != null && et(e, i, s, o));
                }
              switch (n) {
                case "input":
                  (Sr(e), Io(e, r, !1));
                  break;
                case "textarea":
                  (Sr(e), Ao(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Z(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? an(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        an(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Wr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (_e(t), null);
      case 6:
        if (e && t.stateNode != null) bs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(p(166));
          if (((n = tn(sr.current)), tn(ht.current), Jr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[mt] = t),
              (i = r.nodeValue !== n) && ((e = Be), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Br(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Br(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[mt] = t),
              (t.stateNode = r));
        }
        return (_e(t), null);
      case 13:
        if (
          (ie(ae),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ue && We !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (ns(), Nn(), (t.flags |= 98560), (i = !1));
          else if (((i = Jr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(p(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(p(317));
              i[mt] = t;
            } else
              (Nn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (_e(t), (i = !1));
          } else (it !== null && (mo(it), (it = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ae.current & 1) !== 0
                  ? ge === 0 && (ge = 3)
                  : go())),
            t.updateQueue !== null && (t.flags |= 4),
            _e(t),
            null);
      case 4:
        return (
          Pn(),
          no(e, t),
          e === null && tr(t.stateNode.containerInfo),
          _e(t),
          null
        );
      case 10:
        return (Ti(t.type._context), _e(t), null);
      case 17:
        return (Ie(t.type) && Kr(), _e(t), null);
      case 19:
        if ((ie(ae), (i = t.memoizedState), i === null)) return (_e(t), null);
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) pr(i, !1);
          else {
            if (ge !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = rl(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      pr(i, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (o = i.alternate),
                      o === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = o.childLanes),
                          (i.lanes = o.lanes),
                          (i.child = o.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = o.memoizedProps),
                          (i.memoizedState = o.memoizedState),
                          (i.updateQueue = o.updateQueue),
                          (i.type = o.type),
                          (e = o.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (re(ae, (ae.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              pe() > Rn &&
              ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = rl(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                pr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !o.alternate &&
                  !ue)
              )
                return (_e(t), null);
            } else
              2 * pe() - i.renderingStartTime > Rn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = i.last),
              n !== null ? (n.sibling = o) : (t.child = o),
              (i.last = o));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = pe()),
            (t.sibling = null),
            (n = ae.current),
            re(ae, r ? (n & 1) | 2 : n & 1),
            t)
          : (_e(t), null);
      case 22:
      case 23:
        return (
          vo(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Qe & 1073741824) !== 0 &&
              (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : _e(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, t.tag));
  }
  function pf(e, t) {
    switch ((Ni(t), t.tag)) {
      case 1:
        return (
          Ie(t.type) && Kr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Pn(),
          ie(De),
          ie(Ne),
          Fi(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (Ii(t), null);
      case 13:
        if (
          (ie(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(p(340));
          Nn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (ie(ae), null);
      case 4:
        return (Pn(), null);
      case 10:
        return (Ti(t.type._context), null);
      case 22:
      case 23:
        return (vo(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1,
    je = !1,
    mf = typeof WeakSet == "function" ? WeakSet : Set,
    j = null;
  function Tn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          de(e, t, r);
        }
      else n.current = null;
  }
  function ro(e, t, n) {
    try {
      n();
    } catch (r) {
      de(e, t, r);
    }
  }
  var ea = !1;
  function hf(e, t) {
    if (((hi = Rr), (e = Ru()), ui(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, i.nodeType);
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              u = -1,
              s = -1,
              h = 0,
              w = 0,
              S = e,
              g = null;
            t: for (;;) {
              for (
                var C;
                S !== n || (l !== 0 && S.nodeType !== 3) || (u = o + l),
                  S !== i || (r !== 0 && S.nodeType !== 3) || (s = o + r),
                  S.nodeType === 3 && (o += S.nodeValue.length),
                  (C = S.firstChild) !== null;
              )
                ((g = S), (S = C));
              for (;;) {
                if (S === e) break t;
                if (
                  (g === n && ++h === l && (u = o),
                  g === i && ++w === r && (s = o),
                  (C = S.nextSibling) !== null)
                )
                  break;
                ((S = g), (g = S.parentNode));
              }
              S = C;
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      vi = { focusedElem: e, selectionRange: n }, Rr = !1, j = t;
      j !== null;
    )
      if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (j = e));
      else
        for (; j !== null; ) {
          t = j;
          try {
            var L = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (L !== null) {
                    var z = L.memoizedProps,
                      me = L.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? z : ot(t.type, z),
                        me,
                      );
                    f.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var m = t.stateNode.containerInfo;
                  m.nodeType === 1
                    ? (m.textContent = "")
                    : m.nodeType === 9 &&
                      m.documentElement &&
                      m.removeChild(m.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(p(163));
              }
          } catch (k) {
            de(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (j = e));
            break;
          }
          j = t.return;
        }
    return ((L = ea), (ea = !1), L);
  }
  function mr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          ((l.destroy = void 0), i !== void 0 && ro(t, n, i));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function pl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function lo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function ta(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), ta(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[mt],
          delete t[rr],
          delete t[Si],
          delete t[Zc],
          delete t[Jc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function na(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ra(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || na(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function io(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Wr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (io(e, t, n), e = e.sibling; e !== null; )
        (io(e, t, n), (e = e.sibling));
  }
  function oo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (oo(e, t, n), e = e.sibling; e !== null; )
        (oo(e, t, n), (e = e.sibling));
  }
  var ke = null,
    ut = !1;
  function Ht(e, t, n) {
    for (n = n.child; n !== null; ) (la(e, t, n), (n = n.sibling));
  }
  function la(e, t, n) {
    if (pt && typeof pt.onCommitFiberUnmount == "function")
      try {
        pt.onCommitFiberUnmount(_r, n);
      } catch {}
    switch (n.tag) {
      case 5:
        je || Tn(n, t);
      case 6:
        var r = ke,
          l = ut;
        ((ke = null),
          Ht(e, t, n),
          (ke = r),
          (ut = l),
          ke !== null &&
            (ut
              ? ((e = ke),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ke.removeChild(n.stateNode)));
        break;
      case 18:
        ke !== null &&
          (ut
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8
                ? wi(e.parentNode, n)
                : e.nodeType === 1 && wi(e, n),
              Kn(e))
            : wi(ke, n.stateNode));
        break;
      case 4:
        ((r = ke),
          (l = ut),
          (ke = n.stateNode.containerInfo),
          (ut = !0),
          Ht(e, t, n),
          (ke = r),
          (ut = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !je &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var i = l,
              o = i.destroy;
            ((i = i.tag),
              o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && ro(n, t, o),
              (l = l.next));
          } while (l !== r);
        }
        Ht(e, t, n);
        break;
      case 1:
        if (
          !je &&
          (Tn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (u) {
            de(n, t, u);
          }
        Ht(e, t, n);
        break;
      case 21:
        Ht(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((je = (r = je) || n.memoizedState !== null), Ht(e, t, n), (je = r))
          : Ht(e, t, n);
        break;
      default:
        Ht(e, t, n);
    }
  }
  function ia(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new mf()),
        t.forEach(function (r) {
          var l = Nf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function st(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            o = t,
            u = o;
          e: for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                ((ke = u.stateNode), (ut = !1));
                break e;
              case 3:
                ((ke = u.stateNode.containerInfo), (ut = !0));
                break e;
              case 4:
                ((ke = u.stateNode.containerInfo), (ut = !0));
                break e;
            }
            u = u.return;
          }
          if (ke === null) throw Error(p(160));
          (la(i, o, l), (ke = null), (ut = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (h) {
          de(l, t, h);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (oa(t, e), (t = t.sibling));
  }
  function oa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((st(t, e), gt(e), r & 4)) {
          try {
            (mr(3, e, e.return), pl(3, e));
          } catch (z) {
            de(e, e.return, z);
          }
          try {
            mr(5, e, e.return);
          } catch (z) {
            de(e, e.return, z);
          }
        }
        break;
      case 1:
        (st(t, e), gt(e), r & 512 && n !== null && Tn(n, n.return));
        break;
      case 5:
        if (
          (st(t, e),
          gt(e),
          r & 512 && n !== null && Tn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            In(l, "");
          } catch (z) {
            de(e, e.return, z);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            u = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (u === "input" &&
                i.type === "radio" &&
                i.name != null &&
                Do(l, i),
                Fl(u, o));
              var h = Fl(u, i);
              for (o = 0; o < s.length; o += 2) {
                var w = s[o],
                  S = s[o + 1];
                w === "style"
                  ? $o(l, S)
                  : w === "dangerouslySetInnerHTML"
                    ? Vo(l, S)
                    : w === "children"
                      ? In(l, S)
                      : et(l, w, S, h);
              }
              switch (u) {
                case "input":
                  Rl(l, i);
                  break;
                case "textarea":
                  Fo(l, i);
                  break;
                case "select":
                  var g = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var C = i.value;
                  C != null
                    ? an(l, !!i.multiple, C, !1)
                    : g !== !!i.multiple &&
                      (i.defaultValue != null
                        ? an(l, !!i.multiple, i.defaultValue, !0)
                        : an(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[rr] = i;
            } catch (z) {
              de(e, e.return, z);
            }
        }
        break;
      case 6:
        if ((st(t, e), gt(e), r & 4)) {
          if (e.stateNode === null) throw Error(p(162));
          ((l = e.stateNode), (i = e.memoizedProps));
          try {
            l.nodeValue = i;
          } catch (z) {
            de(e, e.return, z);
          }
        }
        break;
      case 3:
        if (
          (st(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Kn(t.containerInfo);
          } catch (z) {
            de(e, e.return, z);
          }
        break;
      case 4:
        (st(t, e), gt(e));
        break;
      case 13:
        (st(t, e),
          gt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (ao = pe())),
          r & 4 && ia(e));
        break;
      case 22:
        if (
          ((w = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((je = (h = je) || w), st(t, e), (je = h)) : st(t, e),
          gt(e),
          r & 8192)
        ) {
          if (
            ((h = e.memoizedState !== null),
            (e.stateNode.isHidden = h) && !w && (e.mode & 1) !== 0)
          )
            for (j = e, w = e.child; w !== null; ) {
              for (S = j = w; j !== null; ) {
                switch (((g = j), (C = g.child), g.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mr(4, g, g.return);
                    break;
                  case 1:
                    Tn(g, g.return);
                    var L = g.stateNode;
                    if (typeof L.componentWillUnmount == "function") {
                      ((r = g), (n = g.return));
                      try {
                        ((t = r),
                          (L.props = t.memoizedProps),
                          (L.state = t.memoizedState),
                          L.componentWillUnmount());
                      } catch (z) {
                        de(r, n, z);
                      }
                    }
                    break;
                  case 5:
                    Tn(g, g.return);
                    break;
                  case 22:
                    if (g.memoizedState !== null) {
                      aa(S);
                      continue;
                    }
                }
                C !== null ? ((C.return = g), (j = C)) : aa(S);
              }
              w = w.sibling;
            }
          e: for (w = null, S = e; ; ) {
            if (S.tag === 5) {
              if (w === null) {
                w = S;
                try {
                  ((l = S.stateNode),
                    h
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((u = S.stateNode),
                        (s = S.memoizedProps.style),
                        (o =
                          s != null && s.hasOwnProperty("display")
                            ? s.display
                            : null),
                        (u.style.display = Ho("display", o))));
                } catch (z) {
                  de(e, e.return, z);
                }
              }
            } else if (S.tag === 6) {
              if (w === null)
                try {
                  S.stateNode.nodeValue = h ? "" : S.memoizedProps;
                } catch (z) {
                  de(e, e.return, z);
                }
            } else if (
              ((S.tag !== 22 && S.tag !== 23) ||
                S.memoizedState === null ||
                S === e) &&
              S.child !== null
            ) {
              ((S.child.return = S), (S = S.child));
              continue;
            }
            if (S === e) break e;
            for (; S.sibling === null; ) {
              if (S.return === null || S.return === e) break e;
              (w === S && (w = null), (S = S.return));
            }
            (w === S && (w = null),
              (S.sibling.return = S.return),
              (S = S.sibling));
          }
        }
        break;
      case 19:
        (st(t, e), gt(e), r & 4 && ia(e));
        break;
      case 21:
        break;
      default:
        (st(t, e), gt(e));
    }
  }
  function gt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (na(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(p(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (In(l, ""), (r.flags &= -33));
            var i = ra(e);
            oo(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              u = ra(e);
            io(e, u, o);
            break;
          default:
            throw Error(p(161));
        }
      } catch (s) {
        de(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function vf(e, t, n) {
    ((j = e), ua(e));
  }
  function ua(e, t, n) {
    for (var r = (e.mode & 1) !== 0; j !== null; ) {
      var l = j,
        i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || dl;
        if (!o) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || je;
          u = dl;
          var h = je;
          if (((dl = o), (je = s) && !h))
            for (j = l; j !== null; )
              ((o = j),
                (s = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? ca(l)
                  : s !== null
                    ? ((s.return = o), (j = s))
                    : ca(l));
          for (; i !== null; ) ((j = i), ua(i), (i = i.sibling));
          ((j = l), (dl = u), (je = h));
        }
        sa(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && i !== null
          ? ((i.return = l), (j = i))
          : sa(e);
    }
  }
  function sa(e) {
    for (; j !== null; ) {
      var t = j;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                je || pl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !je)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ot(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var i = t.updateQueue;
                i !== null && as(t, i, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  as(t, o, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
                  var s = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && n.focus();
                      break;
                    case "img":
                      s.src && (n.src = s.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var h = t.alternate;
                  if (h !== null) {
                    var w = h.memoizedState;
                    if (w !== null) {
                      var S = w.dehydrated;
                      S !== null && Kn(S);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p(163));
            }
          je || (t.flags & 512 && lo(t));
        } catch (g) {
          de(t, t.return, g);
        }
      }
      if (t === e) {
        j = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (j = n));
        break;
      }
      j = t.return;
    }
  }
  function aa(e) {
    for (; j !== null; ) {
      var t = j;
      if (t === e) {
        j = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (j = n));
        break;
      }
      j = t.return;
    }
  }
  function ca(e) {
    for (; j !== null; ) {
      var t = j;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              pl(4, t);
            } catch (s) {
              de(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                de(t, l, s);
              }
            }
            var i = t.return;
            try {
              lo(t);
            } catch (s) {
              de(t, i, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              lo(t);
            } catch (s) {
              de(t, o, s);
            }
        }
      } catch (s) {
        de(t, t.return, s);
      }
      if (t === e) {
        j = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        ((u.return = t.return), (j = u));
        break;
      }
      j = t.return;
    }
  }
  var gf = Math.ceil,
    ml = Ee.ReactCurrentDispatcher,
    uo = Ee.ReactCurrentOwner,
    Je = Ee.ReactCurrentBatchConfig,
    W = 0,
    we = null,
    he = null,
    xe = 0,
    Qe = 0,
    zn = Ot(0),
    ge = 0,
    hr = null,
    rn = 0,
    hl = 0,
    so = 0,
    vr = null,
    Fe = null,
    ao = 0,
    Rn = 1 / 0,
    jt = null,
    vl = !1,
    co = null,
    $t = null,
    gl = !1,
    Bt = null,
    yl = 0,
    gr = 0,
    fo = null,
    wl = -1,
    Sl = 0;
  function ze() {
    return (W & 6) !== 0 ? pe() : wl !== -1 ? wl : (wl = pe());
  }
  function Wt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (W & 2) !== 0 && xe !== 0
        ? xe & -xe
        : bc.transition !== null
          ? (Sl === 0 && (Sl = ru()), Sl)
          : ((e = J),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : du(e.type))),
            e);
  }
  function at(e, t, n, r) {
    if (50 < gr) throw ((gr = 0), (fo = null), Error(p(185)));
    (Hn(e, n, r),
      ((W & 2) === 0 || e !== we) &&
        (e === we && ((W & 2) === 0 && (hl |= n), ge === 4 && Qt(e, xe)),
        Ae(e, r),
        n === 1 &&
          W === 0 &&
          (t.mode & 1) === 0 &&
          ((Rn = pe() + 500), Xr && At())));
  }
  function Ae(e, t) {
    var n = e.callbackNode;
    ba(e, t);
    var r = Lr(e, e === we ? xe : 0);
    if (r === 0)
      (n !== null && eu(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && eu(n), t === 1))
        (e.tag === 0 ? qc(da.bind(null, e)) : Ju(da.bind(null, e)),
          Xc(function () {
            (W & 6) === 0 && At();
          }),
          (n = null));
      else {
        switch (lu(r)) {
          case 1:
            n = Wl;
            break;
          case 4:
            n = tu;
            break;
          case 16:
            n = Cr;
            break;
          case 536870912:
            n = nu;
            break;
          default:
            n = Cr;
        }
        n = Sa(n, fa.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function fa(e, t) {
    if (((wl = -1), (Sl = 0), (W & 6) !== 0)) throw Error(p(327));
    var n = e.callbackNode;
    if (Mn() && e.callbackNode !== n) return null;
    var r = Lr(e, e === we ? xe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = kl(e, r);
    else {
      t = r;
      var l = W;
      W |= 2;
      var i = ma();
      (we !== e || xe !== t) && ((jt = null), (Rn = pe() + 500), on(e, t));
      do
        try {
          Sf();
          break;
        } catch (u) {
          pa(e, u);
        }
      while (!0);
      (Li(),
        (ml.current = i),
        (W = l),
        he !== null ? (t = 0) : ((we = null), (xe = 0), (t = ge)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Ql(e)), l !== 0 && ((r = l), (t = po(e, l)))),
        t === 1)
      )
        throw ((n = hr), on(e, 0), Qt(e, r), Ae(e, pe()), n);
      if (t === 6) Qt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !yf(l) &&
            ((t = kl(e, r)),
            t === 2 && ((i = Ql(e)), i !== 0 && ((r = i), (t = po(e, i)))),
            t === 1))
        )
          throw ((n = hr), on(e, 0), Qt(e, r), Ae(e, pe()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            un(e, Fe, jt);
            break;
          case 3:
            if (
              (Qt(e, r),
              (r & 130023424) === r && ((t = ao + 500 - pe()), 10 < t))
            ) {
              if (Lr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (ze(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = yi(un.bind(null, e, Fe, jt), t);
              break;
            }
            un(e, Fe, jt);
            break;
          case 4:
            if ((Qt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - rt(r);
              ((i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i));
            }
            if (
              ((r = l),
              (r = pe() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * gf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = yi(un.bind(null, e, Fe, jt), r);
              break;
            }
            un(e, Fe, jt);
            break;
          case 5:
            un(e, Fe, jt);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return (Ae(e, pe()), e.callbackNode === n ? fa.bind(null, e) : null);
  }
  function po(e, t) {
    var n = vr;
    return (
      e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256),
      (e = kl(e, t)),
      e !== 2 && ((t = Fe), (Fe = n), t !== null && mo(t)),
      e
    );
  }
  function mo(e) {
    Fe === null ? (Fe = e) : Fe.push.apply(Fe, e);
  }
  function yf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!lt(i(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Qt(e, t) {
    for (
      t &= ~so,
        t &= ~hl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - rt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function da(e) {
    if ((W & 6) !== 0) throw Error(p(327));
    Mn();
    var t = Lr(e, 0);
    if ((t & 1) === 0) return (Ae(e, pe()), null);
    var n = kl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ql(e);
      r !== 0 && ((t = r), (n = po(e, r)));
    }
    if (n === 1) throw ((n = hr), on(e, 0), Qt(e, t), Ae(e, pe()), n);
    if (n === 6) throw Error(p(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      un(e, Fe, jt),
      Ae(e, pe()),
      null
    );
  }
  function ho(e, t) {
    var n = W;
    W |= 1;
    try {
      return e(t);
    } finally {
      ((W = n), W === 0 && ((Rn = pe() + 500), Xr && At()));
    }
  }
  function ln(e) {
    Bt !== null && Bt.tag === 0 && (W & 6) === 0 && Mn();
    var t = W;
    W |= 1;
    var n = Je.transition,
      r = J;
    try {
      if (((Je.transition = null), (J = 1), e)) return e();
    } finally {
      ((J = r), (Je.transition = n), (W = t), (W & 6) === 0 && At());
    }
  }
  function vo() {
    ((Qe = zn.current), ie(zn));
  }
  function on(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Yc(n)), he !== null))
      for (n = he.return; n !== null; ) {
        var r = n;
        switch ((Ni(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Kr());
            break;
          case 3:
            (Pn(), ie(De), ie(Ne), Fi());
            break;
          case 5:
            Ii(r);
            break;
          case 4:
            Pn();
            break;
          case 13:
            ie(ae);
            break;
          case 19:
            ie(ae);
            break;
          case 10:
            Ti(r.type._context);
            break;
          case 22:
          case 23:
            vo();
        }
        n = n.return;
      }
    if (
      ((we = e),
      (he = e = Kt(e.current, null)),
      (xe = Qe = t),
      (ge = 0),
      (hr = null),
      (so = hl = rn = 0),
      (Fe = vr = null),
      en !== null)
    ) {
      for (t = 0; t < en.length; t++)
        if (((n = en[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var o = i.next;
            ((i.next = l), (r.next = o));
          }
          n.pending = r;
        }
      en = null;
    }
    return e;
  }
  function pa(e, t) {
    do {
      var n = he;
      try {
        if ((Li(), (ll.current = sl), il)) {
          for (var r = ce.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          il = !1;
        }
        if (
          ((nn = 0),
          (ye = ve = ce = null),
          (ar = !1),
          (cr = 0),
          (uo.current = null),
          n === null || n.return === null)
        ) {
          ((ge = 1), (hr = t), (he = null));
          break;
        }
        e: {
          var i = e,
            o = n.return,
            u = n,
            s = t;
          if (
            ((t = xe),
            (u.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var h = s,
              w = u,
              S = w.tag;
            if ((w.mode & 1) === 0 && (S === 0 || S === 11 || S === 15)) {
              var g = w.alternate;
              g
                ? ((w.updateQueue = g.updateQueue),
                  (w.memoizedState = g.memoizedState),
                  (w.lanes = g.lanes))
                : ((w.updateQueue = null), (w.memoizedState = null));
            }
            var C = As(o);
            if (C !== null) {
              ((C.flags &= -257),
                Us(C, o, u, i, t),
                C.mode & 1 && Fs(i, h, t),
                (t = C),
                (s = h));
              var L = t.updateQueue;
              if (L === null) {
                var z = new Set();
                (z.add(s), (t.updateQueue = z));
              } else L.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Fs(i, h, t), go());
                break e;
              }
              s = Error(p(426));
            }
          } else if (ue && u.mode & 1) {
            var me = As(o);
            if (me !== null) {
              ((me.flags & 65536) === 0 && (me.flags |= 256),
                Us(me, o, u, i, t),
                ji(Ln(s, u)));
              break e;
            }
          }
          ((i = s = Ln(s, u)),
            ge !== 4 && (ge = 2),
            vr === null ? (vr = [i]) : vr.push(i),
            (i = o));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var f = Is(i, s, t);
                ss(i, f);
                break e;
              case 1:
                u = s;
                var a = i.type,
                  m = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (m !== null &&
                      typeof m.componentDidCatch == "function" &&
                      ($t === null || !$t.has(m))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var k = Os(i, u, t);
                  ss(i, k);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        va(n);
      } catch (R) {
        ((t = R), he === n && n !== null && (he = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ma() {
    var e = ml.current;
    return ((ml.current = sl), e === null ? sl : e);
  }
  function go() {
    ((ge === 0 || ge === 3 || ge === 2) && (ge = 4),
      we === null ||
        ((rn & 268435455) === 0 && (hl & 268435455) === 0) ||
        Qt(we, xe));
  }
  function kl(e, t) {
    var n = W;
    W |= 2;
    var r = ma();
    (we !== e || xe !== t) && ((jt = null), on(e, t));
    do
      try {
        wf();
        break;
      } catch (l) {
        pa(e, l);
      }
    while (!0);
    if ((Li(), (W = n), (ml.current = r), he !== null)) throw Error(p(261));
    return ((we = null), (xe = 0), ge);
  }
  function wf() {
    for (; he !== null; ) ha(he);
  }
  function Sf() {
    for (; he !== null && !Wa(); ) ha(he);
  }
  function ha(e) {
    var t = wa(e.alternate, e, Qe);
    ((e.memoizedProps = e.pendingProps),
      t === null ? va(e) : (he = t),
      (uo.current = null));
  }
  function va(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = df(n, t, Qe)), n !== null)) {
          he = n;
          return;
        }
      } else {
        if (((n = pf(n, t)), n !== null)) {
          ((n.flags &= 32767), (he = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((ge = 6), (he = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        he = t;
        return;
      }
      he = t = e;
    } while (t !== null);
    ge === 0 && (ge = 5);
  }
  function un(e, t, n) {
    var r = J,
      l = Je.transition;
    try {
      ((Je.transition = null), (J = 1), kf(e, t, n, r));
    } finally {
      ((Je.transition = l), (J = r));
    }
    return null;
  }
  function kf(e, t, n, r) {
    do Mn();
    while (Bt !== null);
    if ((W & 6) !== 0) throw Error(p(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(p(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (ec(e, i),
      e === we && ((he = we = null), (xe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        gl ||
        ((gl = !0),
        Sa(Cr, function () {
          return (Mn(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = Je.transition), (Je.transition = null));
      var o = J;
      J = 1;
      var u = W;
      ((W |= 4),
        (uo.current = null),
        hf(e, n),
        oa(n, e),
        Vc(vi),
        (Rr = !!hi),
        (vi = hi = null),
        (e.current = n),
        vf(n),
        Qa(),
        (W = u),
        (J = o),
        (Je.transition = i));
    } else e.current = n;
    if (
      (gl && ((gl = !1), (Bt = e), (yl = l)),
      (i = e.pendingLanes),
      i === 0 && ($t = null),
      Xa(n.stateNode),
      Ae(e, pe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (vl) throw ((vl = !1), (e = co), (co = null), e);
    return (
      (yl & 1) !== 0 && e.tag !== 0 && Mn(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === fo ? gr++ : ((gr = 0), (fo = e))) : (gr = 0),
      At(),
      null
    );
  }
  function Mn() {
    if (Bt !== null) {
      var e = lu(yl),
        t = Je.transition,
        n = J;
      try {
        if (((Je.transition = null), (J = 16 > e ? 16 : e), Bt === null))
          var r = !1;
        else {
          if (((e = Bt), (Bt = null), (yl = 0), (W & 6) !== 0))
            throw Error(p(331));
          var l = W;
          for (W |= 4, j = e.current; j !== null; ) {
            var i = j,
              o = i.child;
            if ((j.flags & 16) !== 0) {
              var u = i.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var h = u[s];
                  for (j = h; j !== null; ) {
                    var w = j;
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mr(8, w, i);
                    }
                    var S = w.child;
                    if (S !== null) ((S.return = w), (j = S));
                    else
                      for (; j !== null; ) {
                        w = j;
                        var g = w.sibling,
                          C = w.return;
                        if ((ta(w), w === h)) {
                          j = null;
                          break;
                        }
                        if (g !== null) {
                          ((g.return = C), (j = g));
                          break;
                        }
                        j = C;
                      }
                  }
                }
                var L = i.alternate;
                if (L !== null) {
                  var z = L.child;
                  if (z !== null) {
                    L.child = null;
                    do {
                      var me = z.sibling;
                      ((z.sibling = null), (z = me));
                    } while (z !== null);
                  }
                }
                j = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null)
              ((o.return = i), (j = o));
            else
              e: for (; j !== null; ) {
                if (((i = j), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mr(9, i, i.return);
                  }
                var f = i.sibling;
                if (f !== null) {
                  ((f.return = i.return), (j = f));
                  break e;
                }
                j = i.return;
              }
          }
          var a = e.current;
          for (j = a; j !== null; ) {
            o = j;
            var m = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && m !== null)
              ((m.return = o), (j = m));
            else
              e: for (o = a; j !== null; ) {
                if (((u = j), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pl(9, u);
                    }
                  } catch (R) {
                    de(u, u.return, R);
                  }
                if (u === o) {
                  j = null;
                  break e;
                }
                var k = u.sibling;
                if (k !== null) {
                  ((k.return = u.return), (j = k));
                  break e;
                }
                j = u.return;
              }
          }
          if (
            ((W = l), At(), pt && typeof pt.onPostCommitFiberRoot == "function")
          )
            try {
              pt.onPostCommitFiberRoot(_r, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((J = n), (Je.transition = t));
      }
    }
    return !1;
  }
  function ga(e, t, n) {
    ((t = Ln(n, t)),
      (t = Is(e, t, 1)),
      (e = Vt(e, t, 1)),
      (t = ze()),
      e !== null && (Hn(e, 1, t), Ae(e, t)));
  }
  function de(e, t, n) {
    if (e.tag === 3) ga(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ga(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              ($t === null || !$t.has(r)))
          ) {
            ((e = Ln(n, e)),
              (e = Os(t, e, 1)),
              (t = Vt(t, e, 1)),
              (e = ze()),
              t !== null && (Hn(t, 1, e), Ae(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function xf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = ze()),
      (e.pingedLanes |= e.suspendedLanes & n),
      we === e &&
        (xe & n) === n &&
        (ge === 4 || (ge === 3 && (xe & 130023424) === xe && 500 > pe() - ao)
          ? on(e, 0)
          : (so |= n)),
      Ae(e, t));
  }
  function ya(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Pr), (Pr <<= 1), (Pr & 130023424) === 0 && (Pr = 4194304)));
    var n = ze();
    ((e = Nt(e, t)), e !== null && (Hn(e, t, n), Ae(e, n)));
  }
  function Ef(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), ya(e, n));
  }
  function Nf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    (r !== null && r.delete(t), ya(e, n));
  }
  var wa;
  wa = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || De.current) Oe = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((Oe = !1), ff(e, t, n));
        Oe = (e.flags & 131072) !== 0;
      }
    else ((Oe = !1), ue && (t.flags & 1048576) !== 0 && qu(t, Zr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (fl(e, t), (e = t.pendingProps));
        var l = kn(t, Ne.current);
        (jn(t, n), (l = Vi(null, t, r, e, l, n)));
        var i = Hi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ie(r) ? ((i = !0), Yr(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Mi(t),
              (l.updater = al),
              (t.stateNode = l),
              (l._reactInternals = t),
              Yi(t, r, e, n),
              (t = Ji(null, t, r, !0, i, n)))
            : ((t.tag = 0), ue && i && Ei(t), Te(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (fl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = _f(r)),
            (e = ot(r, e)),
            l)
          ) {
            case 0:
              t = Zi(null, t, r, e, n);
              break e;
            case 1:
              t = Qs(null, t, r, e, n);
              break e;
            case 11:
              t = Vs(null, t, r, e, n);
              break e;
            case 14:
              t = Hs(null, t, r, ot(r.type, e), n);
              break e;
          }
          throw Error(p(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          Zi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          Qs(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Ks(t), e === null)) throw Error(p(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            us(e, t),
            nl(t, r, null, n));
          var o = t.memoizedState;
          if (((r = o.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              ((l = Ln(Error(p(423)), t)), (t = Ys(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Ln(Error(p(424)), t)), (t = Ys(e, t, r, n, l)));
              break e;
            } else
              for (
                We = It(t.stateNode.containerInfo.firstChild),
                  Be = t,
                  ue = !0,
                  it = null,
                  n = is(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Nn(), r === l)) {
              t = _t(e, t, n);
              break e;
            }
            Te(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          cs(t),
          e === null && _i(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          gi(r, l) ? (o = null) : i !== null && gi(r, i) && (t.flags |= 32),
          Ws(e, t),
          Te(e, t, o, n),
          t.child
        );
      case 6:
        return (e === null && _i(t), null);
      case 13:
        return Xs(e, t, n);
      case 4:
        return (
          Di(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Cn(t, null, r, n)) : Te(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          Vs(e, t, r, l, n)
        );
      case 7:
        return (Te(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Te(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Te(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (o = l.value),
            re(br, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (lt(i.value, o)) {
              if (i.children === l.children && !De.current) {
                t = _t(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var u = i.dependencies;
                if (u !== null) {
                  o = i.child;
                  for (var s = u.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (i.tag === 1) {
                        ((s = Ct(-1, n & -n)), (s.tag = 2));
                        var h = i.updateQueue;
                        if (h !== null) {
                          h = h.shared;
                          var w = h.pending;
                          (w === null
                            ? (s.next = s)
                            : ((s.next = w.next), (w.next = s)),
                            (h.pending = s));
                        }
                      }
                      ((i.lanes |= n),
                        (s = i.alternate),
                        s !== null && (s.lanes |= n),
                        zi(i.return, n, t),
                        (u.lanes |= n));
                      break;
                    }
                    s = s.next;
                  }
                } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((o = i.return), o === null)) throw Error(p(341));
                  ((o.lanes |= n),
                    (u = o.alternate),
                    u !== null && (u.lanes |= n),
                    zi(o, n, t),
                    (o = i.sibling));
                } else o = i.child;
                if (o !== null) o.return = i;
                else
                  for (o = i; o !== null; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (((i = o.sibling), i !== null)) {
                      ((i.return = o.return), (o = i));
                      break;
                    }
                    o = o.return;
                  }
                i = o;
              }
          (Te(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          jn(t, n),
          (l = Ge(l)),
          (r = r(l)),
          (t.flags |= 1),
          Te(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = ot(r, t.pendingProps)),
          (l = ot(r.type, l)),
          Hs(e, t, r, l, n)
        );
      case 15:
        return $s(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          fl(e, t),
          (t.tag = 1),
          Ie(r) ? ((e = !0), Yr(t)) : (e = !1),
          jn(t, n),
          Ms(t, r, l),
          Yi(t, r, l, n),
          Ji(null, t, r, !0, e, n)
        );
      case 19:
        return Zs(e, t, n);
      case 22:
        return Bs(e, t, n);
    }
    throw Error(p(156, t.tag));
  };
  function Sa(e, t) {
    return bo(e, t);
  }
  function Cf(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function qe(e, t, n, r) {
    return new Cf(e, t, n, r);
  }
  function yo(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function _f(e) {
    if (typeof e == "function") return yo(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ft)) return 11;
      if (e === dt) return 14;
    }
    return 2;
  }
  function Kt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = qe(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function xl(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) yo(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case Re:
          return sn(n.children, l, i, t);
        case Ke:
          ((o = 8), (l |= 8));
          break;
        case Pt:
          return (
            (e = qe(12, n, t, l | 2)),
            (e.elementType = Pt),
            (e.lanes = i),
            e
          );
        case Ve:
          return (
            (e = qe(13, n, t, l)),
            (e.elementType = Ve),
            (e.lanes = i),
            e
          );
        case nt:
          return (
            (e = qe(19, n, t, l)),
            (e.elementType = nt),
            (e.lanes = i),
            e
          );
        case fe:
          return El(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case wt:
                o = 10;
                break e;
              case Xt:
                o = 9;
                break e;
              case ft:
                o = 11;
                break e;
              case dt:
                o = 14;
                break e;
              case Me:
                ((o = 16), (r = null));
                break e;
            }
          throw Error(p(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = qe(o, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = i),
      t
    );
  }
  function sn(e, t, n, r) {
    return ((e = qe(7, e, r, t)), (e.lanes = n), e);
  }
  function El(e, t, n, r) {
    return (
      (e = qe(22, e, r, t)),
      (e.elementType = fe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function wo(e, t, n) {
    return ((e = qe(6, e, null, t)), (e.lanes = n), e);
  }
  function So(e, t, n) {
    return (
      (t = qe(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function jf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Kl(0)),
      (this.expirationTimes = Kl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Kl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function ko(e, t, n, r, l, i, o, u, s) {
    return (
      (e = new jf(e, t, n, u, s)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = qe(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Mi(i),
      e
    );
  }
  function Pf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Le,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function ka(e) {
    if (!e) return Ft;
    e = e._reactInternals;
    e: {
      if (Gt(e) !== e || e.tag !== 1) throw Error(p(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ie(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(p(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ie(n)) return Gu(e, n, t);
    }
    return t;
  }
  function xa(e, t, n, r, l, i, o, u, s) {
    return (
      (e = ko(n, r, !0, e, l, i, o, u, s)),
      (e.context = ka(null)),
      (n = e.current),
      (r = ze()),
      (l = Wt(n)),
      (i = Ct(r, l)),
      (i.callback = t ?? null),
      Vt(n, i, l),
      (e.current.lanes = l),
      Hn(e, l, r),
      Ae(e, r),
      e
    );
  }
  function Nl(e, t, n, r) {
    var l = t.current,
      i = ze(),
      o = Wt(l);
    return (
      (n = ka(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ct(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Vt(l, t, o)),
      e !== null && (at(e, l, o, i), tl(e, l, o)),
      o
    );
  }
  function Cl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ea(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function xo(e, t) {
    (Ea(e, t), (e = e.alternate) && Ea(e, t));
  }
  function Lf() {
    return null;
  }
  var Na =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Eo(e) {
    this._internalRoot = e;
  }
  ((_l.prototype.render = Eo.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(p(409));
      Nl(e, t, null, null);
    }),
    (_l.prototype.unmount = Eo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (ln(function () {
            Nl(null, e, null, null);
          }),
            (t[St] = null));
        }
      }));
  function _l(e) {
    this._internalRoot = e;
  }
  _l.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = uu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
      (Rt.splice(n, 0, e), n === 0 && cu(e));
    }
  };
  function No(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function jl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Ca() {}
  function Tf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var h = Cl(o);
          i.call(h);
        };
      }
      var o = xa(t, r, e, 0, null, !1, !1, "", Ca);
      return (
        (e._reactRootContainer = o),
        (e[St] = o.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        ln(),
        o
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var h = Cl(s);
        u.call(h);
      };
    }
    var s = ko(e, 0, !1, null, null, !1, !1, "", Ca);
    return (
      (e._reactRootContainer = s),
      (e[St] = s.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      ln(function () {
        Nl(t, s, n, r);
      }),
      s
    );
  }
  function Pl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var s = Cl(o);
          u.call(s);
        };
      }
      Nl(t, o, e, l);
    } else o = Tf(n, t, e, l, r);
    return Cl(o);
  }
  ((iu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Vn(t.pendingLanes);
          n !== 0 &&
            (Yl(t, n | 1),
            Ae(t, pe()),
            (W & 6) === 0 && ((Rn = pe() + 500), At()));
        }
        break;
      case 13:
        (ln(function () {
          var r = Nt(e, 1);
          if (r !== null) {
            var l = ze();
            at(r, e, 1, l);
          }
        }),
          xo(e, 1));
    }
  }),
    (Xl = function (e) {
      if (e.tag === 13) {
        var t = Nt(e, 134217728);
        if (t !== null) {
          var n = ze();
          at(t, e, 134217728, n);
        }
        xo(e, 134217728);
      }
    }),
    (ou = function (e) {
      if (e.tag === 13) {
        var t = Wt(e),
          n = Nt(e, t);
        if (n !== null) {
          var r = ze();
          at(n, e, t, r);
        }
        xo(e, t);
      }
    }),
    (uu = function () {
      return J;
    }),
    (su = function (e, t) {
      var n = J;
      try {
        return ((J = e), t());
      } finally {
        J = n;
      }
    }),
    (Vl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Rl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Qr(r);
                if (!l) throw Error(p(90));
                (Ro(r), Rl(r, l));
              }
            }
          }
          break;
        case "textarea":
          Fo(e, n);
          break;
        case "select":
          ((t = n.value), t != null && an(e, !!n.multiple, t, !1));
      }
    }),
    (Ko = ho),
    (Yo = ln));
  var zf = { usingClientEntryPoint: !1, Events: [lr, wn, Qr, Wo, Qo, ho] },
    yr = {
      findFiberByHostInstance: Zt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Rf = {
      bundleType: yr.bundleType,
      version: yr.version,
      rendererPackageName: yr.rendererPackageName,
      rendererConfig: yr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Ee.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Jo(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: yr.findFiberByHostInstance || Lf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ll.isDisabled && Ll.supportsFiber)
      try {
        ((_r = Ll.inject(Rf)), (pt = Ll));
      } catch {}
  }
  return (
    (Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zf),
    (Ue.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!No(t)) throw Error(p(200));
      return Pf(e, t, null, n);
    }),
    (Ue.createRoot = function (e, t) {
      if (!No(e)) throw Error(p(299));
      var n = !1,
        r = "",
        l = Na;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = ko(e, 1, !1, null, null, n, !1, r, l)),
        (e[St] = t.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        new Eo(t)
      );
    }),
    (Ue.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(p(188))
          : ((e = Object.keys(e).join(",")), Error(p(268, e)));
      return ((e = Jo(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Ue.flushSync = function (e) {
      return ln(e);
    }),
    (Ue.hydrate = function (e, t, n) {
      if (!jl(t)) throw Error(p(200));
      return Pl(null, e, t, !0, n);
    }),
    (Ue.hydrateRoot = function (e, t, n) {
      if (!No(e)) throw Error(p(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = Na;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = xa(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[St] = t.current),
        tr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new _l(t);
    }),
    (Ue.render = function (e, t, n) {
      if (!jl(t)) throw Error(p(200));
      return Pl(null, e, t, !1, n);
    }),
    (Ue.unmountComponentAtNode = function (e) {
      if (!jl(e)) throw Error(p(40));
      return e._reactRootContainer
        ? (ln(function () {
            Pl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[St] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Ue.unstable_batchedUpdates = ho),
    (Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!jl(n)) throw Error(p(200));
      if (e == null || e._reactInternals === void 0) throw Error(p(38));
      return Pl(e, t, n, !1, r);
    }),
    (Ue.version = "18.3.1-next-f1338f8080-20240426"),
    Ue
  );
}
var Ma;
function Hf() {
  if (Ma) return jo.exports;
  Ma = 1;
  function v() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (_) {
        console.error(_);
      }
  }
  return (v(), (jo.exports = Vf()), jo.exports);
}
var Da;
function $f() {
  if (Da) return Tl;
  Da = 1;
  var v = Hf();
  return ((Tl.createRoot = v.createRoot), (Tl.hydrateRoot = v.hydrateRoot), Tl);
}
var Bf = $f();
const Wf = Oa(Bf),
  Ia = "HIMANSHU",
  Qf = "KUMAR";
function Kf() {
  const [v, _] = q.useState(!1),
    [p, E] = q.useState(!1),
    N = q.useRef(null),
    T = q.useRef(null);
  (q.useEffect(() => {
    const M = setTimeout(() => _(!0), 100),
      F = setTimeout(() => E(!0), 300);
    return () => {
      (clearTimeout(M), clearTimeout(F));
    };
  }, []),
    q.useEffect(() => {
      const M = () => {
        if (!T.current || !N.current) return;
        const F = window.scrollY,
          ee = N.current.offsetHeight;
        if (F < ee) {
          const b = F / ee;
          T.current.style.transform = `translateY(${F * 0.15}px) scale(${1 + b * 0.05})`;
        }
      };
      return (
        window.addEventListener("scroll", M, { passive: !0 }),
        () => window.removeEventListener("scroll", M)
      );
    }, []));
  const H = (M, F = 0) =>
    M.split("").map((ee, b) =>
      d.jsx(
        "span",
        {
          className: `letter ${ee === " " ? "space" : ""} ${p ? "visible" : ""}`,
          style: { transitionDelay: `${(b + F) * 0.05}s` },
          children: ee,
        },
        b,
      ),
    );
  return d.jsxs("section", {
    className: "hero noise-bg",
    id: "hero",
    ref: N,
    children: [
      d.jsxs("div", {
        className: "hero-content",
        children: [
          d.jsxs("h1", {
            className: "hero-name",
            children: [
              d.jsx("span", {
                className: "hero-name-line hero-accent",
                children: H(Ia),
              }),
              d.jsx("span", {
                className: "hero-name-line",
                children: H(Qf, Ia.length),
              }),
            ],
          }),
          d.jsxs("p", {
            className: `hero-tagline ${v ? "visible" : ""}`,
            children: [
              "Full Stack Engineer ",
              d.jsx("span", { children: "|" }),
              " AI Systems ",
              d.jsx("span", { children: "|" }),
              " Problem Solver",
            ],
          }),
          d.jsxs("div", {
            className: `hero-cta-row ${v ? "visible" : ""}`,
            children: [
              d.jsx("a", {
                href: "#projects",
                className: "hero-btn primary",
                children: "View Projects",
              }),
              d.jsx("a", {
                href: "#contact",
                className: "hero-btn",
                children: "Get in Touch",
              }),
            ],
          }),
        ],
      }),
      d.jsx("div", {
        className: "hero-image-container",
        children: d.jsxs("div", {
          className: "hero-image-wrapper",
          children: [
            d.jsx("img", {
              src: "/hero-portrait.webp",
              alt: "Himanshu Kumar",
              className: `hero-image ${v ? "loaded" : ""}`,
              ref: T,
              loading: "eager",
              onError: (M) => {
                ((M.target.style.background =
                  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"),
                  (M.target.style.minHeight = "100%"));
              },
            }),
            d.jsx("div", { className: "hero-grid-overlay" }),
          ],
        }),
      }),
      d.jsxs("div", {
        className: "scroll-indicator",
        children: [
          d.jsx("span", { children: "Scroll" }),
          d.jsx("div", { className: "scroll-line" }),
        ],
      }),
    ],
  });
}
function be(v = {}) {
  const [_, p] = q.useState(!1),
    [E, N] = q.useState(!1),
    T = q.useRef(null);
  return (
    q.useEffect(() => {
      const H = T.current;
      if (!H) return;
      const M = new IntersectionObserver(
        ([F]) => {
          F.isIntersecting
            ? (p(!0), E || N(!0), v.once !== !1 && M.unobserve(H))
            : v.once === !1 && p(!1);
        },
        { threshold: v.threshold || 0.15, rootMargin: v.rootMargin || "0px" },
      );
      return (M.observe(H), () => M.disconnect());
    }, [v.threshold, v.rootMargin, v.once, E]),
    [T, _, E]
  );
}
function zo(v, _ = 2e3, p = !1, E = !0) {
  const [N, T] = q.useState(0),
    [H, M] = q.useState(!1),
    F = q.useRef(!1);
  return (
    q.useEffect(() => {
      if (!E || F.current) return;
      F.current = !0;
      const ee = performance.now(),
        b = 0;
      function X(B) {
        const se = B - ee,
          Pe = Math.min(se / _, 1),
          te = 1 - Math.pow(1 - Pe, 3),
          G = Math.floor(b + (v - b) * te);
        (T(G), Pe < 1 ? requestAnimationFrame(X) : (T(v), M(!0)));
      }
      requestAnimationFrame(X);
    }, [v, _, E]),
    [N, H]
  );
}
const Yf = [
    { value: 700, suffix: "+", label: "DSA Problems" },
    { value: 1681, suffix: "", label: "CodeChef Rating" },
    { value: 1406, suffix: "", label: "CodeForces Rating" },
    {
      value: 0,
      suffix: "",
      label: "Microsoft & Google Final Round",
      isText: !0,
      text: "✓",
    },
  ],
  Xf =
    "I'm a full-stack engineer driven by an obsession with building systems that scale. From architecting AI-powered SaaS platforms to conquering 700+ DSA challenges, I operate at the intersection of deep technical mastery and relentless problem-solving. My engineering philosophy is simple: write clean, performant code that solves real problems. I've been through rigorous selection rounds at Microsoft and Google, each sharpening my ability to think under pressure and deliver at the highest level.";
function Gf({
  value: v,
  suffix: _,
  label: p,
  isText: E,
  text: N,
  isInView: T,
}) {
  const [H, M] = zo(v, 2e3, !0, T);
  return E
    ? d.jsxs("div", {
        className: "stat-card",
        children: [
          d.jsx("div", {
            className: `stat-value ${T ? "glow-done" : ""}`,
            children: N,
          }),
          d.jsx("div", { className: "stat-label", children: p }),
        ],
      })
    : d.jsxs("div", {
        className: "stat-card",
        children: [
          d.jsxs("div", {
            className: `stat-value ${M ? "glow-done" : ""}`,
            children: [T ? H : 0, _],
          }),
          d.jsx("div", { className: "stat-label", children: p }),
        ],
      });
}
function Zf() {
  const [v, _] = be({ threshold: 0.2 }),
    [p, E] = be({ threshold: 0.3 }),
    [N, T] = q.useState(!1),
    H = Xf.split(" ");
  return (
    q.useEffect(() => {
      if (E) {
        const M = setTimeout(() => T(!0), H.length * 30 + 500);
        return () => clearTimeout(M);
      }
    }, [E]),
    d.jsxs("section", {
      className: "about noise-bg",
      id: "about",
      ref: v,
      children: [
        d.jsx("div", { className: "about-watermark", children: "ABOUT" }),
        d.jsx("div", {
          className: "about-image-side",
          children: d.jsxs("div", {
            className: "about-image-container",
            children: [
              d.jsx("img", {
                src: "/about-portrait.webp",
                alt: "Himanshu Kumar",
                className: "about-image",
                loading: "lazy",
                onError: (M) => {
                  ((M.target.style.background =
                    "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"),
                    (M.target.style.minHeight = "100%"));
                },
              }),
              d.jsxs("div", {
                className: "about-panels",
                children: [
                  d.jsx("div", { className: "about-panel" }),
                  d.jsx("div", { className: "about-panel" }),
                  d.jsx("div", { className: "about-panel" }),
                  d.jsx("div", { className: "about-panel" }),
                ],
              }),
            ],
          }),
        }),
        d.jsxs("div", {
          className: "about-text-side",
          ref: p,
          children: [
            d.jsx("div", { className: "about-label", children: "— About Me" }),
            d.jsxs("h2", {
              className: "about-heading",
              children: [
                "Engineering at the",
                d.jsx("br", {}),
                d.jsx("span", {
                  className: "hero-accent",
                  children: "Edge of Performance",
                }),
              ],
            }),
            d.jsx("p", {
              className: "about-paragraph",
              children: H.map((M, F) =>
                d.jsx(
                  "span",
                  {
                    className: `word ${E || N ? "visible" : ""}`,
                    style: { transitionDelay: N ? "0s" : `${F * 0.03}s` },
                    children: M,
                  },
                  F,
                ),
              ),
            }),
            d.jsx("div", {
              className: "about-stats",
              children: Yf.map((M, F) => d.jsx(Gf, { ...M, isInView: _ }, F)),
            }),
          ],
        }),
      ],
    })
  );
}
const Jf = [
  {
    company: "Physics Wallah",
    role: "Software Development Engineer",
    date: "2024 — Present",
    description: [
      "Engineered scalable backend microservices handling 100K+ concurrent users",
      "Built real-time collaborative features with WebSocket architecture",
      "Optimized database queries reducing response times by 40%",
      "Implemented CI/CD pipelines and automated testing frameworks",
    ],
    tech: ["Node.js", "React", "MongoDB", "Redis", "AWS", "Docker"],
  },
  {
    company: "ENTNT",
    role: "Full Stack Developer",
    date: "2023 — 2024",
    description: [
      "Developed enterprise-grade CRM platform serving 50+ client organizations",
      "Designed RESTful APIs with comprehensive authentication and authorization",
      "Led frontend architecture migration improving performance by 60%",
      "Mentored junior developers and conducted code reviews",
    ],
    tech: ["React", "TypeScript", "PostgreSQL", "Express.js", "Tailwind"],
  },
];
function qf({ exp: v, index: _ }) {
  const [p, E] = be({ threshold: 0.2 });
  return d.jsxs("div", {
    ref: p,
    className: `timeline-item ${E ? "visible" : ""}`,
    style: { transitionDelay: `${_ * 0.15}s` },
    children: [
      d.jsx("div", { className: "timeline-dot" }),
      d.jsxs("div", {
        className: "exp-card",
        children: [
          d.jsx("div", { className: "exp-card-date", children: v.date }),
          d.jsx("h3", { className: "exp-card-company", children: v.company }),
          d.jsx("div", { className: "exp-card-role", children: v.role }),
          d.jsx("ul", {
            className: "exp-card-desc",
            children: v.description.map((N, T) =>
              d.jsx("li", { children: N }, T),
            ),
          }),
          d.jsx("div", {
            className: "exp-badges",
            children: v.tech.map((N, T) =>
              d.jsx("span", { className: "exp-badge", children: N }, T),
            ),
          }),
        ],
      }),
    ],
  });
}
function bf() {
  const [v, _] = be({ threshold: 0.3 });
  return d.jsxs("section", {
    className: "experience noise-bg",
    id: "experience",
    children: [
      d.jsxs("div", {
        ref: v,
        className: `experience-header section-reveal ${_ ? "visible" : ""}`,
        children: [
          d.jsx("div", {
            className: "experience-label",
            children: "— Experience",
          }),
          d.jsx("h2", {
            className: "experience-title",
            children: "Where I've Delivered",
          }),
        ],
      }),
      d.jsx("div", {
        className: "timeline",
        children: Jf.map((p, E) => d.jsx(qf, { exp: p, index: E }, E)),
      }),
    ],
  });
}
const ed = [
  {
    name: "Vision Craft",
    type: "AI SaaS Platform",
    desc: "A next-generation AI-powered creative platform that transforms text into stunning visuals. Built with cutting-edge generative models and a sleek, production-grade interface designed for creators and enterprises.",
    tech: ["Next.js", "OpenAI", "Prisma", "Stripe", "Tailwind", "PostgreSQL"],
    image: "/project-visioncraft.webp",
    live: "#",
    github: "#",
  },
  {
    name: "AlgoViz",
    type: "Algorithm Visualization Engine",
    desc: "An interactive algorithm visualization tool that brings DSA concepts to life. Watch sorting algorithms race, graph traversals illuminate paths, and complex data structures animate in real-time with buttery smooth 60fps rendering.",
    tech: ["React", "Canvas API", "TypeScript", "D3.js", "CSS Animations"],
    image: "/project-algoviz.webp",
    live: "#",
    github: "#",
  },
  {
    name: "Job-Fetch",
    type: "Smart Job Aggregation Platform",
    desc: "An intelligent job aggregation system that crawls multiple platforms, applies ML-based relevance scoring, and delivers personalized job matches. Features real-time notifications and advanced filtering with a premium dashboard.",
    tech: ["Node.js", "Python", "MongoDB", "React", "Redis", "Docker"],
    image: "/project-jobfetch.webp",
    live: "#",
    github: "#",
  },
];
function td({ project: v, index: _ }) {
  const [p, E] = be({ threshold: 0.15 });
  return d.jsxs("div", {
    ref: p,
    className: `project-slide section-reveal ${E ? "visible" : ""}`,
    children: [
      d.jsxs("div", { className: "project-number", children: ["0", _ + 1] }),
      d.jsxs("div", {
        className: "project-text",
        children: [
          d.jsx("h3", { className: "project-name", children: v.name }),
          d.jsx("div", { className: "project-type", children: v.type }),
          d.jsx("p", { className: "project-desc", children: v.desc }),
          d.jsx("div", {
            className: "project-tech",
            children: v.tech.map((N, T) =>
              d.jsx("span", { className: "project-tech-tag", children: N }, T),
            ),
          }),
          d.jsxs("div", {
            className: "project-btns",
            children: [
              d.jsx("a", {
                href: v.live,
                className: "project-btn primary-btn",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Live Demo",
              }),
              d.jsx("a", {
                href: v.github,
                className: "project-btn",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "GitHub",
              }),
            ],
          }),
        ],
      }),
      d.jsxs("div", {
        className: "project-image-container",
        children: [
          d.jsxs("div", {
            className: "project-strips",
            children: [
              d.jsx("div", { className: "project-strip" }),
              d.jsx("div", { className: "project-strip" }),
              d.jsx("div", { className: "project-strip" }),
              d.jsx("div", { className: "project-strip" }),
              d.jsx("div", { className: "project-strip" }),
            ],
          }),
          d.jsx("img", {
            src: v.image,
            alt: v.name,
            className: "project-image",
            loading: "lazy",
            onError: (N) => {
              ((N.target.style.background =
                "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"),
                (N.target.style.minHeight = "100%"));
            },
          }),
        ],
      }),
    ],
  });
}
function nd() {
  const [v, _] = be({ threshold: 0.3 });
  return d.jsxs("section", {
    className: "projects noise-bg",
    id: "projects",
    children: [
      d.jsxs("div", {
        ref: v,
        className: `projects-header section-reveal ${_ ? "visible" : ""}`,
        children: [
          d.jsx("div", {
            className: "projects-label",
            children: "— Featured Work",
          }),
          d.jsx("h2", {
            className: "projects-title",
            children: "Projects That Ship",
          }),
        ],
      }),
      ed.map((p, E) => d.jsx(td, { project: p, index: E }, E)),
    ],
  });
}
const rd = [
  {
    title: "Languages",
    skills: [
      { icon: "⚡", name: "JavaScript", detail: "ES2024+" },
      { icon: "🔷", name: "TypeScript", detail: "Advanced" },
      { icon: "🐍", name: "Python", detail: "ML & Backend" },
      { icon: "☕", name: "Java", detail: "DSA & Systems" },
      { icon: "⚙️", name: "C++", detail: "Competitive" },
      { icon: "🗄️", name: "SQL", detail: "Advanced Queries" },
    ],
  },
  {
    title: "Backend & Infra",
    skills: [
      { icon: "🟢", name: "Node.js", detail: "Microservices" },
      { icon: "🚂", name: "Express", detail: "REST APIs" },
      { icon: "🍃", name: "MongoDB", detail: "Aggregation" },
      { icon: "🐘", name: "PostgreSQL", detail: "Schema Design" },
      { icon: "🔴", name: "Redis", detail: "Caching" },
      { icon: "🐳", name: "Docker", detail: "Containers" },
      { icon: "☁️", name: "AWS", detail: "EC2, S3, Lambda" },
    ],
  },
  {
    title: "System Design",
    skills: [
      { icon: "🏗️", name: "HLD", detail: "Scalable Systems" },
      { icon: "🔩", name: "LLD", detail: "OOP Patterns" },
      { icon: "📡", name: "API Design", detail: "REST & GraphQL" },
      { icon: "⚖️", name: "Load Balancing", detail: "Distribution" },
      { icon: "💾", name: "Caching", detail: "Strategy" },
      { icon: "📨", name: "Message Queues", detail: "Pub/Sub" },
    ],
  },
  {
    title: "AI / LLM",
    skills: [
      { icon: "🤖", name: "OpenAI", detail: "GPT Integration" },
      { icon: "🧠", name: "LangChain", detail: "Chaining" },
      { icon: "📊", name: "ML Basics", detail: "Scikit-learn" },
      { icon: "🎯", name: "Prompt Eng.", detail: "Optimization" },
      { icon: "🔍", name: "RAG", detail: "Retrieval Aug." },
    ],
  },
];
function ld({ category: v, index: _ }) {
  const [p, E] = be({ threshold: 0.2 });
  return d.jsxs("div", {
    ref: p,
    className: `skill-category ${E ? "visible" : ""}`,
    style: { transitionDelay: `${_ * 0.1}s` },
    children: [
      d.jsx("h3", { className: "skill-category-title", children: v.title }),
      d.jsx("div", {
        className: "skill-grid",
        children: v.skills.map((N, T) =>
          d.jsxs(
            "div",
            {
              className: "skill-card",
              children: [
                d.jsx("span", { className: "skill-icon", children: N.icon }),
                d.jsx("div", { className: "skill-name", children: N.name }),
                d.jsx("div", { className: "skill-detail", children: N.detail }),
              ],
            },
            T,
          ),
        ),
      }),
    ],
  });
}
function id() {
  const [v, _] = be({ threshold: 0.3 });
  return d.jsxs("section", {
    className: "skills noise-bg",
    id: "skills",
    children: [
      d.jsxs("div", {
        ref: v,
        className: `skills-header section-reveal ${_ ? "visible" : ""}`,
        children: [
          d.jsx("div", { className: "skills-label", children: "— Arsenal" }),
          d.jsx("h2", { className: "skills-title", children: "Tech Stack" }),
        ],
      }),
      d.jsx("div", {
        className: "skills-categories",
        children: rd.map((p, E) => d.jsx(ld, { category: p, index: E }, E)),
      }),
    ],
  });
}
const od = [
    { value: 3, suffix: "x", name: "KIMO Winner", sub: "Consecutive Years" },
    {
      value: 1,
      suffix: "",
      name: "Hackathon Finalist",
      sub: "National Level",
      isText: !0,
      text: "🏆",
    },
    {
      value: 98,
      suffix: "%",
      name: "Naukri Tech Challenge",
      sub: "Top Percentile",
    },
  ],
  ud = [
    { platform: "CodeChef", rating: 1681, rank: "3-Star (Div 2)" },
    { platform: "CodeForces", rating: 1406, rank: "Specialist" },
    { platform: "LeetCode", rating: 700, rank: "700+ Problems Solved" },
  ];
function sd({ achievement: v, index: _, isInView: p }) {
  const E = v.isText ? 0 : v.value,
    [N, T] = zo(E, 1500, !0, p);
  return d.jsxs("div", {
    className: `achievement-card ${p ? "visible" : ""}`,
    style: { transitionDelay: `${_ * 0.15}s` },
    children: [
      d.jsx("div", {
        className: `achievement-value ${T ? "glow-done" : ""}`,
        children: v.isText ? v.text : `${p ? N : 0}${v.suffix}`,
      }),
      d.jsx("div", { className: "achievement-name", children: v.name }),
      d.jsx("div", { className: "achievement-sub", children: v.sub }),
    ],
  });
}
function ad({ stat: v, index: _, isInView: p }) {
  const [E, N] = zo(v.rating, 2e3, !0, p);
  return d.jsxs("div", {
    className: `cp-card ${p ? "visible" : ""}`,
    style: { transitionDelay: `${_ * 0.12}s` },
    children: [
      d.jsx("div", { className: "cp-platform", children: v.platform }),
      d.jsx("div", {
        className: `cp-rating ${N ? "glow-done" : ""}`,
        children: p ? E : 0,
      }),
      d.jsx("div", { className: "cp-rank", children: v.rank }),
    ],
  });
}
function cd() {
  const [v, _] = be({ threshold: 0.3 }),
    [p, E] = be({ threshold: 0.2 }),
    [N, T] = be({ threshold: 0.2 });
  return d.jsxs("section", {
    className: "achievements",
    id: "achievements",
    children: [
      d.jsxs("div", {
        ref: v,
        className: `achievements-header section-reveal ${_ ? "visible" : ""}`,
        children: [
          d.jsx("div", {
            className: "achievements-label",
            children: "— Track Record",
          }),
          d.jsx("h2", {
            className: "achievements-title",
            children: "Achievements",
          }),
        ],
      }),
      d.jsx("div", {
        className: "achievements-grid",
        ref: p,
        children: od.map((H, M) =>
          d.jsx(sd, { achievement: H, index: M, isInView: E }, M),
        ),
      }),
      d.jsxs("div", {
        className: "cp-section",
        ref: N,
        children: [
          d.jsx("div", {
            className: "cp-title",
            children: "Competitive Programming",
          }),
          d.jsx("div", {
            className: "cp-grid",
            children: ud.map((H, M) =>
              d.jsx(ad, { stat: H, index: M, isInView: T }, M),
            ),
          }),
        ],
      }),
    ],
  });
}
const fd = [
  { label: "Email", href: "mailto:himanshu@example.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/himanshu-kumar" },
  { label: "GitHub", href: "https://github.com/HimanshuKumar1234" },
  { label: "Resume", href: "/resume.pdf" },
];
function dd() {
  const [v, _] = be({ threshold: 0.3 }),
    p = q.useMemo(
      () =>
        Array.from({ length: 40 }, (E, N) => ({
          id: N,
          left: `${Math.random() * 100}%`,
          size: `${1 + Math.random() * 2}px`,
          duration: `${8 + Math.random() * 12}s`,
          delay: `${Math.random() * 10}s`,
          opacity: 0.2 + Math.random() * 0.4,
        })),
      [],
    );
  return d.jsxs("section", {
    className: "contact",
    id: "contact",
    children: [
      d.jsx("div", {
        className: "contact-particles",
        children: p.map((E) =>
          d.jsx(
            "div",
            {
              className: "particle",
              style: {
                left: E.left,
                width: E.size,
                height: E.size,
                animationDuration: E.duration,
                animationDelay: E.delay,
              },
            },
            E.id,
          ),
        ),
      }),
      d.jsxs("div", {
        ref: v,
        className: `contact-content section-reveal ${_ ? "visible" : ""}`,
        children: [
          d.jsx("div", {
            className: "contact-label",
            children: "— Let's Connect",
          }),
          d.jsxs("h2", {
            className: "contact-heading",
            children: [
              "LET'S BUILD SOMETHING",
              " ",
              d.jsx("span", {
                className: "highlight",
                children: "EXCEPTIONAL",
              }),
            ],
          }),
          d.jsx("div", {
            className: "contact-links",
            children: fd.map((E, N) =>
              d.jsx(
                "a",
                {
                  href: E.href,
                  className: "contact-link",
                  target: E.href.startsWith("http") ? "_blank" : void 0,
                  rel: E.href.startsWith("http")
                    ? "noopener noreferrer"
                    : void 0,
                  children: E.label,
                },
                N,
              ),
            ),
          }),
        ],
      }),
      d.jsxs("div", {
        className: "contact-footer",
        children: [
          "© ",
          new Date().getFullYear(),
          " Himanshu Kumar. Engineered with precision.",
        ],
      }),
    ],
  });
}
const pd = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
function md() {
  const v = q.useRef(null),
    _ = q.useRef(null),
    [p, E] = q.useState(!1),
    [N, T] = q.useState(!1);
  return (
    q.useEffect(() => {
      if (window.matchMedia("(max-width: 768px)").matches) return;
      const M = (B) => {
          (p || E(!0),
            v.current &&
              ((v.current.style.left = `${B.clientX}px`),
              (v.current.style.top = `${B.clientY}px`)),
            _.current &&
              ((_.current.style.left = `${B.clientX}px`),
              (_.current.style.top = `${B.clientY}px`)));
        },
        F = (B) => {
          const se = B.target;
          (se.tagName === "A" ||
            se.tagName === "BUTTON" ||
            se.closest("a") ||
            se.closest("button") ||
            se.classList.contains("hero-image-wrapper") ||
            se.classList.contains("project-image-container") ||
            se.classList.contains("skill-card") ||
            se.classList.contains("exp-card")) &&
            T(!0);
        },
        ee = () => T(!1),
        b = () => E(!1),
        X = () => E(!0);
      return (
        document.addEventListener("mousemove", M),
        document.addEventListener("mouseover", F),
        document.addEventListener("mouseout", ee),
        document.addEventListener("mouseleave", b),
        document.addEventListener("mouseenter", X),
        () => {
          (document.removeEventListener("mousemove", M),
            document.removeEventListener("mouseover", F),
            document.removeEventListener("mouseout", ee),
            document.removeEventListener("mouseleave", b),
            document.removeEventListener("mouseenter", X));
        }
      );
    }, [p]),
    d.jsxs(d.Fragment, {
      children: [
        d.jsx("div", {
          ref: v,
          className: `custom-cursor ${p ? "visible" : ""} ${N ? "hover" : ""}`,
        }),
        d.jsx("div", {
          ref: _,
          className: `cursor-trail ${p ? "visible" : ""}`,
        }),
      ],
    })
  );
}
function hd() {
  const [v, _] = q.useState(!1),
    [p, E] = q.useState(!1);
  q.useEffect(() => {
    const T = () => {
      _(window.scrollY > 80);
    };
    return (
      window.addEventListener("scroll", T, { passive: !0 }),
      () => window.removeEventListener("scroll", T)
    );
  }, []);
  const N = () => {
    E(!1);
  };
  return d.jsxs("nav", {
    className: `nav ${v ? "scrolled" : ""}`,
    children: [
      d.jsxs("a", {
        href: "#hero",
        className: "nav-logo",
        children: [
          "H",
          d.jsx("span", { className: "logo-accent", children: "K" }),
        ],
      }),
      d.jsxs("button", {
        className: `nav-toggle ${p ? "open" : ""}`,
        onClick: () => E(!p),
        "aria-label": "Toggle menu",
        children: [d.jsx("span", {}), d.jsx("span", {}), d.jsx("span", {})],
      }),
      d.jsx("ul", {
        className: `nav-links ${p ? "open" : ""}`,
        children: pd.map((T) =>
          d.jsx(
            "li",
            {
              children: d.jsx("a", {
                href: T.href,
                onClick: N,
                children: T.label,
              }),
            },
            T.href,
          ),
        ),
      }),
    ],
  });
}
function vd() {
  const [v, _] = q.useState(!0);
  return (
    q.useEffect(() => {
      const p = setTimeout(() => _(!1), 1200);
      return () => clearTimeout(p);
    }, []),
    d.jsxs(d.Fragment, {
      children: [
        d.jsx("div", {
          className: `loading-screen ${v ? "" : "hidden"}`,
          children: d.jsx("div", { className: "loading-text", children: "HK" }),
        }),
        d.jsx(md, {}),
        d.jsx(hd, {}),
        d.jsxs("main", {
          children: [
            d.jsx(Kf, {}),
            d.jsx("div", { className: "section-divider" }),
            d.jsx(Zf, {}),
            d.jsx("div", { className: "section-divider" }),
            d.jsx(bf, {}),
            d.jsx("div", { className: "section-divider" }),
            d.jsx(nd, {}),
            d.jsx("div", { className: "section-divider" }),
            d.jsx(id, {}),
            d.jsx("div", { className: "section-divider" }),
            d.jsx(cd, {}),
            d.jsx("div", { className: "section-divider" }),
            d.jsx(dd, {}),
          ],
        }),
      ],
    })
  );
}
Wf.createRoot(document.getElementById("root")).render(
  d.jsx(Ff.StrictMode, { children: d.jsx(vd, {}) }),
);
