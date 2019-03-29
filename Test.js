const icon = "https://raw.githubusercontent.com/TheGLander/Scratch3Addon/master/G.png"
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
test({TEXT}) {
    sayedtxt = TEXT;
    var msg = new SpeechSynthesisUtterance(TEXT);
    self.speechSynthesis.speak(msg);
}
Scratch.extensions.register(new Test());