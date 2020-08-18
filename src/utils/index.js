import { toast } from 'react-toastify'

export const filterTree = (tree, fn) => {
  return tree.reduce((r, o) => {
    const children = filterTree(o.children || [], fn);

    if (fn(o) || children.length) {
      r.push(Object.assign({}, o, children.length && { children }))
    }

    return r;
  }, []);
}

const defaultOptions = {
  autoClose: 3000,
  closeOnClick: true,
  position: toast.POSITION.TOP_RIGHT
}

export const renderToast = (type, msg, options = defaultOptions) => {
  return toast[type](msg, options)
}
