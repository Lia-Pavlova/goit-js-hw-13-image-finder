import { getContent } from './getContent'
import { buildGallery } from './buildGallery'
import Notiflix from "notiflix";

export const getAndInsertContent = (current, page, tag) => {
   Notiflix.Loading.circle();
   return getContent(current, page)
       .then(pictures => {
           Notiflix.Loading.remove();
          return buildGallery(pictures, page, tag);
        })
          .catch(error => {
           Notiflix.Loading.remove();
           console.log(error);
       })
};