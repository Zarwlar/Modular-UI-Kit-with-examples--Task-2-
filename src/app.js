function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./vendor', true, /\.(js|css)$/));
requireAll(require.context('./', true, /\.(styl|css)$/));
requireAll(require.context('./', true, /\.js$/));
requireAll(require.context('./', true, /\.(jpe?g|png|gif|svg)$/i));