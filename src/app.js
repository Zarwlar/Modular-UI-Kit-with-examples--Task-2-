function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./', true, /\.(styl|css)$/));
requireAll(require.context('./', true, /\.js$/));