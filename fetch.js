class Javascript {
    getInfo() {
        return {
            "id": "Javascript",
            "name": "Javascript",
            "blocks": [{
                    "opcode": "eval",
                    "blockType": "reporter",
                    "text": "eval [string]",
                    "arguments": {
                        "string": {
                            "type": "string",
                            "defaultValue": 'alert("Hello World!")'
                        }
                    }
                },
            }],
        "menus": { //we will get back to this in a later tutorial
        }
    }
    eval({string}) {
        return eval(string)
    }
}
Scratch.extensions.register(new Javascript());
