
interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private createSpecification ) { }

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.createSpecification.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error('Specification already exists');
        }

        this.createSpecification.create({ name, description });
    }
}

export { CreateSpecificationService };