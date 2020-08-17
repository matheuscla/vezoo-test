export const filterTree = (tree, fn) => {
  return tree.reduce((r, o) => {
    const children = filterTree(o.children || [], fn);

    if (fn(o) || children.length) {
      r.push(Object.assign({}, o, children.length && { children }))
    }

    return r;
  }, []);
}