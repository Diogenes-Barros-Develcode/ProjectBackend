import {Router} from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategories';

const categoreisRoutes = Router();

categoreisRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoreisRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
})

export {categoreisRoutes};
