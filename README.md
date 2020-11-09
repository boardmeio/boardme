# boardme

A client side library for using the boardme API.


[boardme](https://boardme.io) is a user onboarding SaaS that integrates seamlessly with any website or application. It helps users learn how an app works and guides them to immediate value.
It is a plug-and-play solution and it doesn't require technical skills to operate. As long as you are technical enough to copy and paste, you are qualified to create and run user onboarding Flows on your website.


Check out the [documentation](https://andreigaspar.gitbook.io/boardme/) for more information!

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
As library
```typescript
import * as boardme from "boardme";

boardme.renderGuide( "guide-guid" );
```

As utility function
```typescript
import { renderGuide } from 'boardme';

renderGuide( "guide-guid" );
```

### AMD
```javascript
define(function(require,exports,module){
  var boardme = require('boardme');
});
