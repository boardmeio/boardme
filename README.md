# boardme

A client side library for using the boardme API.

## Installation 

With npm
```sh
npm install boardme --save
```

With yarn
```sh
yarn add boardme
```

With bower
```sh
bower install boardme --save
```

## Usage

### Javascript

```javascript
var boardme = require('boardme');

boardme.renderGuide( "guide-guid" )
```


### TypeScript
```typescript
import { renderGuide } from 'boardme';

renderGuide( "guide-guid" );
```

### AMD
```javascript
define(function(require,exports,module){
  var boardme = require('boardme');
});
