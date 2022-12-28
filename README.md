# Resume

This is a complete rewrite of my resume. Why? I don't know. The old one felt old. Can't we just clean dust sometimes?

I've been using [Astro](https://astro.build) for this task, which honestly still feels a bit overkill compared to the v1 (which was using a custom SSR build on top of Vue 2.6).

I've moved away from using a single source of truth (a json file) for content since i gave up on i18n resume already. maybe it'll come back when i write the v3 with next.js, who knows? Meanwhile you'll have to know which section holds what and edit that accordingly - it shouldn't be that hard tho.

Feature wise, there's a couple of changes (same, added, removed):
- [same] random theme in light mode
- [same] dark mode
- [same] responsive design
- [same] printable on a single A4
- [removed] client-side i18n (that's an improvement)
- [added] random theme in dark mode
- [added] CI now using github environments

Prior implementations are stored in the `archives/*` tags, which won't be maintained over time. This is purely for comparison purpose.

**If you are interested into forking/reusing this, be my guest - just please don't steal my logo 🧐?** and don't forget the page title and favicon, _please_.

There'll a bit of setup here and there in your github repo. Mainly, activate github pages if you want to deploy there and set the "Build and Deployment > Source" to be "Github Actions".
