import {Router} from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoreisRoutes = Router();

const categoriesRepository = new CategoriesRepository();


categoreisRoutes.post('/', (request, response) => {
  const {name, description} = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({name, description});

  return response.status(201).send();
});

categoreisRoutes.get('/', (request, response) => {
  const allCategories = categoriesRepository.list()

  return response.json(allCategories);
})

export {categoreisRoutes};
