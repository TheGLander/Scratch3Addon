const icon = "https://raw.githubusercontent.com/TheGLander/Scratch3Addon/master/G.png"
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