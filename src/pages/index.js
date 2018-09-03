import {default as Acc} from './Acc';
import {default as Book} from './Book';
import {default as Bottom} from './Bottom';
import {default as DesignItem} from './DesignItem';
import {default as Photo} from './Photo';
import {default as Top} from './Top';
import {default as Video} from './Video';
import {default as Home} from './Home';

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
    path: "/goods",
    component: DesignItem
  },
  {
    path: "/book",
    component: Book
  },
  {
    path: "/",
    component: Home
  }
]

export default Pages;
