# Observer Pattern

> Use observables to notify subscribers when an event occurs.


With the observer pattern, we can subscribe certain objects, the **observers**, to another object, called the **observable**. Whenever an event occurs, the observable notifies all its observers!
It is a good choice in many cases. For instance, when multiple elements in an app, need to be informed about a state change or in general when something happened.
![image](https://user-images.githubusercontent.com/6850977/161396025-f3e29d72-fdbb-4e49-8078-95faaf13e17f.png)


## Anatomy of an observable
An observable object usually contains 3 important parts:

- `observers`: an array of observers (functions), that will get notified whenever a specific event occurs.
- `subscribe()`: a method in order to add an observer to the observers list.
- `unsubscribe()`: a method to remove a observer from the observers list.
- `notify()`: a method to notify all observers whenever a specific event occurs.

![image](https://user-images.githubusercontent.com/6850977/161395238-8e924de0-034b-4697-8da6-b89e2054bd7f.png)

You find an example implemetation in [/assets/index.js](/assets/index.js)


## Install the sample application
> ✨ Bootstrapped with Create Snowpack App (CSA).
```
git clone https://github.com/hkfrei/observer-pattern.git
cd observer-pattern
npm install
```

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.mjs` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.
