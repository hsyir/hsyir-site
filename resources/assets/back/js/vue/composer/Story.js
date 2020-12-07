export default class Story {
    constructor() {
        this.story = [];
        this.cursor = -1;
    }

    push(state) {
        this.cursor++;
        this.story[this.cursor] = _.cloneDeep(state);
        console.log(this.cursor,this.story);
    }

    back() {
        if(this.cursor > 0) --this.cursor;
        return this.story[this.cursor];
    }


}
