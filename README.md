grunt-apiary-blueprint
======================

A grunt setup for dealing with apiary blueprints. Makes the workflow much easier, by concatonating multiple blueprints in the
source folder to a single file - dist/built.apib and also publishing.

## Instructions

1. Install the [Apiary Client](http://client.apiary.io/)
2. Clone the repo, then install dependencies

``` 
cd grunt-apiary-blueprint/
npm install
```

3. Copy `config.example.js` to `config.js` and set the `name` to match `apiary publish --api-name=name`
and `key` the apiary api key you would normally export to a enviroment variable `APIARY_API_KEY`

4. Start grunt in bash ``` grunt ```
5. Save your blueprints inside /source as `\*.apib` files
6. Repeat **Step 5**
