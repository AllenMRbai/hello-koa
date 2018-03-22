/**
 * 实例化一个nunjucks.Environment，
 * 并在ctx
 */
const path = require('path');
const nunjucks = require('nunjucks')

function createEnv(path, opts) {
    let
        autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader(path, {
                noCache: noCache,
                watch: watch
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (let f in opts.filters) {
            env.addFilter(f, opts.filters[f])
        }
    }
    return env;
}

function templating(path, opts, app) {
    let env = createEnv(path, opts);
    app.context.render = function (view, model) {
        return env.render(view, model);
    }
}

module.exports = templating;