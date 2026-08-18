class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let arr = []
        if(this.keyStore.get(key)){
            arr = this.keyStore.get(key);
        }
        arr[timestamp] = value
        this.keyStore.set(key, arr);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.get(key)) return "";

        const arr = this.keyStore.get(key);

        let result = null
        for(let i = 0; i <= timestamp; i++){
            if(arr[i]) result = arr[i];
        }

        return result ? result: "";
    }
}
