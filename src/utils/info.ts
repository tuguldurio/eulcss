import pkg from '~/package.json'

export default function() {
  return {
    title: pkg.title,
    version: pkg.version
  }
}