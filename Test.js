class Test {
    constructor() {}
    getInfo() {
        return{
            id: 'Test',
            name: "G's extension test",
        }
    }
}
Scratch.extensions.register(new MyExtension());