class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if(this.stack.length){
            return this.stack[this.stack.length - 1];
        }
    }

    /**
     * @return {number}
     */
    getMin() {
        let min = null;
        for(let i = 0; i < this.stack.length; i ++){
            if(this.stack[i] < min || min === null){
                min = this.stack[i];
            }
        }

        return min;
    }
}
