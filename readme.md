# react-native-scrollview-offset

React-Native Android doesn't support `contentOffset` prop
(see: https://github.com/facebook/react-native/issues/6849)

#### Use this component as a drop-in ScrollView replacement for `contentOffset` cross-compatibility.

To avoid jumping, this component waits with `opacity:0` until after render, then calls `scrollTo(props.contentOffset)`, then sets itself to `opacity:1`.

## Usage:

```jsx
import ScrollViewOffset from 'react-native-scrollview-offset'

function App() {
  return (
    <>
      <ScrollViewOffset contentOffset={{ x: 0, y: 50 }}>
        <Text>I'm in a ScrollView that loads with an intial scroll position 50 pixels down.</Text>
        <Text>Even in Android (wow!)</Text>
      </ScrollViewOffset>
    </>
  )
}
```

### It also offers a new prop — `startAtEnd` (boolean, default: `false`) — to set the initial scroll position to the end.

_Note: `startAtEnd` overrides the `contentOffset` prop._

Supports all other props from the default ScrollView.
