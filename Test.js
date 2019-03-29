const icon = "https://github.com/TheGLander/Scratch3Addon/blob/master/char-g-md.ico"
class Test {
    constructor() {}
    getInfo() {
        return{
            id: 'Test',
            name: "G's extension test",
            menuIconURI: icon
        }
    }
}
Scratch.extensions.register(new Test());