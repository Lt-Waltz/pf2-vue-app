/**
 * Node interface.
 */
interface INode<T> {
    val: T,
    left: INode<T> | null
    right: INode<T> | null
}

export default class BinaryTree<T> {

    private root: INode<T> | undefined

    createNewNode = (val: T): INode<T> => {
        return {
            val,
            left: null,
            right: null
        }
    }

    insert = (val: T) => {
        const currentNode = this.createNewNode(val);
        if (!this.root) {
            this.root = currentNode
        } else {
            this.insertIntoCurrentNode(currentNode);
        }
        return this
    }

    private insertIntoCurrentNode = (currentNode: INode<T>) => {
        const { val } = currentNode;
        const traverse = (node: INode<T>) => {
            if (val > node.val) {
                if(!node.right) {
                    node.right = currentNode;
                } else 
                traverse(node.right);
            } else if (val < node.val) {
                if(!node.left) {
                    node.left = currentNode;
                } else
                traverse(node.left);
            }
        }
        traverse(this.root as INode<T>);
    }
}

const bt = new BinaryTree();

bt.insert(10).insert(15).insert(20).insert(5).insert(6)

