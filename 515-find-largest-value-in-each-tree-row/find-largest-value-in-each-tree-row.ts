/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function largestValues(root: TreeNode | null): number[] {
    if (!root) return [];

    const result: number[] = [];
    const queue: TreeNode[] = [root];
    let head = 0;

    while (head < queue.length) {
        const levelSize = queue.length - head;
        let maxValue = -Infinity;

        for (let i = 0; i < levelSize; i++) {
            const node = queue[head++];
            maxValue = Math.max(maxValue, node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(maxValue);
    }

    return result;
}