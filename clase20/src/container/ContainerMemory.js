class ContainerMemory {
    constructor() {
        this.elements = [];
    }

    getAll() {
        return this.elements;
    }

    save(element) {
        element.id =
            this.elements.length === 0
                ? 1
                : this.elements[this.elements.length - 1].id + 1;
        this.elements.push(element);
        return element;
    }

    getById(id) {
        const productById = this.elements.find((element) => element.id === id);
        return productById;
    }
    updateById(id, newData) {
        const elementIndex = this.elements.findIndex(
            (element) => element.id == id
        );

        if (elementIndex === -1) return null;

        const foundElement = this.elements[elementIndex];

        this.elements[elementIndex] = {
            ...this.elements[elementIndex],
            ...newData,
        };

        return this.elements[elementIndex];
    }

    deleteById(id) {
        this.elements.filter((element) => element.id != id);
        return { success: true };
    }
}

export default ContainerMemory;
