const icon = "./G.png"
class Test {
    constructor() {}
    getInfo() {
        return{
            id: 'Test',
            name: "G's extension test",
            menuIconURI: icon,
            blocks: [
                {
                    opcode: 'test',
                    text: 'test [TEXT]',
                    blockType: Scratch.BlockType.COMMAND,
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello, world!"
                        }
                    }
                 },
            ]
        }
    }
}
Scratch.extensions.register(new Test());