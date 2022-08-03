import { Specification } from '../model/Specification';
import { ICreateSpecificationDTO, ISpecificationRepository } from './ISpecificationRepository';



class SpecificationRepository implements ISpecificationRepository {
  private specification: Specification[];

  constructor() {
    this.specification = [];
  }

  create({name, description}: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      create_at: new Date(),
    });

    this.specification.push(specification);
  }

  list(): Specification[] {
    return this.specification;
  }

  findByName(name: string): Specification {
    return this.specification.find(category => category.name === name);
  }
}

export {SpecificationRepository};
