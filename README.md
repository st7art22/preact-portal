# preact-portal

[![NPM](https://img.shields.io/npm/v/preact-portal.svg?style=flat)](https://www.npmjs.org/package/preact-portal)
[![travis-ci](https://travis-ci.org/developit/preact-portal.svg?branch=master)](https://travis-ci.org/developit/preact-portal)

> Render [Preact] components somewhere in [a different] space.

Use this if you have a component that needs to render children into some other place in the DOM.

An example of this would be modal dialogs, where you may need to render `<Dialog />` into `<body>`.


**[JSFiddle Demo](http://jsfiddle.net/developit/f1jmxtvg/)**


---


## Installation

Via npm:

`npm install --save preact-portal`



## Usage

```js
import { h, Component, render } from 'preact';
import Portal from 'preact-portal';

class Thumbnail extends Component {
  open = () => this.setState({ open:true });
  close = () => this.setState({ open:false });

  render({ url }, { open }) {
    return (
      <div class="thumb" onClick={this.open}>
        <img src={url} />

        { open ? (
          <Portal into="body">
            <div class="popup" onClick={this.close}>
              <img src={url} />
            </div>
          </Portal>
        ) : null }
      </div>
    );
  }
}

render(<Thumbnail url="//i.imgur.com/6Rp4hbs.gif" />, document.body);
```


---


Or, wrap up a very common case into a simple high order function:

```js
const Popup = ({ open, into="body", children }) => (
  open ? <Portal into={into}>{ children }</Portal> : null
);

// Example: show popup on error.
class Form extends Component {
  render({}, { error }) {
    return (
      <form>
        <Popup open={error}>
          <p>Error: {error}</p>
        </Popup>
        ...etc
      </form>
    );
  }
}
```


[preact]: https://github.com/developit/preact
