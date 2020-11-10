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
var boardme = require("boardme");

var guide =  boardme.renderGuide( "guide-identifier" );

// Event listeners

guide.onSubmit(function() {
  console.log( "Guide has been submitted" );
});

guide.onSubmit(function() {
  console.log( "Guide has been dismissed" );
});
```


### TypeScript
As library
```typescript
import * as boardme from "boardme";

const guide = boardme.renderGuide( "guide-identifier" );

// Event listeners

guide.onSubmit( () => console.log( "Guide has been submitted" ) );

guide.onDismiss( () => console.log( "Guide has been dismissed" ) );
```

As utility function
```typescript
import { renderGuide } from "boardme";

const guide = renderGuide( "guide-guid" );

// Event listeners

guide.onSubmit( () => console.log( "Guide has been submitted" ) );

guide.onDismiss( () => console.log( "Guide has been dismissed" ) );
```

### AMD
```javascript
define(function(require,exports,module){
  var boardme = require('boardme');
});
