# appverse-db

## Usage

``` js
const setupDatabase = require('appverse-db')

setupDabase(config).then(db => {
    const { Agent , Metric } = db

}).catch(err => console.error(err))
```
