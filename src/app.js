function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./', true, /\.styl$/));
requireAll(require.context('./', true, /\.js$/));