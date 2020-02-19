'use strict'
// React-Native Android doesn't support contentOffset prop
// (see: https://github.com/facebook/react-native/issues/6849)
//
// So this component waits until after render, calls scrollTo(props.contentOffset), then makes itself visible
//
// Also adds a new prop — `startAtEnd (boolean, default: false)` — to set the initial scroll position to the end.
// Note: `startAtEnd` overrides the `contentOffset` prop.
//
// Supports all other props from the default ScrollView.
//
// Use this component in place of ScrollView for cross-compatibility.
//
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
exports.__esModule = true
var react_1 = require('react')
var react_native_1 = require('react-native')
function ScrollViewOffset(props) {
  var scrollViewRef = react_1.useRef(null)
  var _a = react_1.useState(0),
    opacity = _a[0],
    setOpacity = _a[1]
  // Scroll to end after init render
  react_1.useEffect(
    function() {
      react_native_1.InteractionManager.runAfterInteractions(function() {
        if (props.startAtEnd) {
          scrollViewRef.current.scrollToEnd({ animated: false })
        } else if (props.contentOffset) {
          scrollViewRef.current.scrollTo(__assign(__assign({}, props.contentOffset), { animated: false }))
        }
        // Then make visible, to avoid jumping
        setTimeout(function() {
          setOpacity(1)
        }, 1)
      })
    },
    [props.contentOffset, props.startAtEnd],
  )
  return (
    <react_native_1.View style={{ opacity: opacity }}>
      <react_native_1.ScrollView {...props} ref={scrollViewRef} />
    </react_native_1.View>
  )
}
exports['default'] = ScrollViewOffset
