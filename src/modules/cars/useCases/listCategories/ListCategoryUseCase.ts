import { Category } from "../../model/Category";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

class ListCategoryUseCase {
    constructor(private categoriesRepository: ICategoryRepository) {}

    execute(): Category[] {
        return this.categoriesRepository.list();
    }
}

export { ListCategoryUseCase };