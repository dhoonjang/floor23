import {default as Acc} from './Acc';
import {default as Book} from './Book';
import {default as Bottom} from './Bottom';
import {default as DesignItem} from './DesignItem';
import {default as Photo} from './Photo';
import {default as Top} from './Top';
import {default as Video} from './Video';

const Pages = [
  {
    path: "/photo",
    component: Photo
  },
  {
    path: "/Acc",
    component: Acc
  },
  {
    path: "/video",
    component: Video
  },
  {
    path: "/Top",
    component: Top
  },
  {
    path: "/bottom",
    component: Bottom
  },
  {
    path: "/design item",
    component: DesignItem
  },
  {
    path: "/book",
    component: Book
  }
]

export default Pages;
