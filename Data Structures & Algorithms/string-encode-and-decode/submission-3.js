class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {


        return strs.map(s => `${s.length}#${s}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            // 1. 找到 '#' 的位置
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            // 2. 提取长度（可能有多位数字）
            const length = parseInt(str.substring(i, j), 10);
            // 3. 跳过 '#'
            i = j + 1;
            // 4. 截取长度个字符作为原字符串
            const s = str.substring(i, i + length);
            result.push(s);
            // 5. 移动指针到下一个编码的起始位置
            i += length;
        }

        return result;
    }
}
