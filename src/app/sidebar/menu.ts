import { Deserializable } from "../deserializable";

export class Menu implements Deserializable {
    private text : string;
        private description : string;
        private parentId : number;
        private roleTypeId : number;
        private url : string;
        private uurl : string;
        private statusId : number;
        private submenu : [Menu];
    
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }

    }
}
