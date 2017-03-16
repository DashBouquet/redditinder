import { compose, invoker, map, Lens, path, pick, prop, pathOr, tail } from 'ramda';
import { Item } from './interfaces';

const BASE_API = "https://www.reddit.com";

const pathDot = (p: string) => path(p.split('.'))
const pathOrDot = (def: string, p: string) => pathOr(def, p.split('.'))
const toJson = (o: any) => o.json();
const processUrl = (s: string) => s.replace(/&amp;/, '&');

const debug = (o: any) => {
  console.log(o);
  return o;
}

const responseToItems = compose(
  map( o => ({
    ...pick(['id', 'score', 'author', 'title', 'url', 'thumbnail'], o),
    preview: processUrl(pathOrDot('', 'preview.images.0.source.url')(o)) // Fix urls
  })),
  <any>tail, // Skip first
  map(prop('data')),
  pathDot('data.children')
);

export
const fetchItems = (): Promise<Item[]> => 
  fetch(`${BASE_API}/r/aww.json`)
    .then(toJson)
    .then(responseToItems)
    .then(debug)
