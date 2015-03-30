grunt-apiary-blueprint
======================

A grunt setup for dealing with apiary blueprints. Makes the workflow much easier, by concatonating multiple blueprints in the
source folder to a single file - dist/apiary.apib and also publishing through the apiaryio gem.

**Note**: Publishing from command line overwrites any changes made online,

## Instructions

1) Clone the repo, then install dependencies

``` 
cd grunt-apiary-blueprint/
npm install
```

2) As part of the install process you will be asked your password to install the apiaryio gem. You can also run this manually using `sudo gem install apiaryio` if you wish.

3) Copy `config.example.js` to `config.js` and set the `name` to match your API blueprint name
and `key` the apiary api key obtained from https://login.apiary.io/tokens

4) Start grunt in bash ``` grunt ```

5) Save your blueprints inside /source as `\*.apib` files

6) Repeat **Step 5**

## Publishing specifics
You can configuring different environements to deploy to, for example if you had a shared and a personal blueprint.

Add a new grunt env, and specify the new apiary key (through config.js, or directly). Publish to this new environment from the cli using
` grunt publish --env=shared ` (where shared is the name of the environment in your grunt file)
