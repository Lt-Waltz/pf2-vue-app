import express, { Application, Request, Response } from "express";


const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({message: "Some random text"})
})


interface StackNode<T> {
    value: T | null
    next: StackNode<T> | null
  }
  
  class StackNode<T> implements StackNode<T> {
    constructor(val: T) {
      this.value = val
      this.next = null
    }
  }
  
  interface Stack<T> {
    size: number
    top: StackNode<T> | null
    bottom: StackNode<T> | null
    push(val: T): number
    pop(): StackNode<T> | null
  }
  
  
  
  class Stack<T = string> implements Stack<T> {
    constructor() {
      this.size = 0
      this.top = null
      this.bottom = null
    }
  
    push(val: T) {
      const node = new StackNode(val)
      if (this.size === 0) {
        this.top = node
        this.bottom = node
      } else {
        const currentTop = this.top
        this.top = node
        this.top.next = currentTop
      }
  
      this.size += 1
      return this.size
    }
  
  
    pop(): StackNode<T> | null {
      if (this.size > 0) {
        const nodeToBeRemove = this.top as StackNode<T>
        this.top = nodeToBeRemove.next
        this.size -= 1
        nodeToBeRemove.next = null
        return nodeToBeRemove
      }
      return null
    }
  }

  const stack = new Stack<string>()

  console.log("HERE FIRST")
  console.log(stack);

  stack.push("a")
  stack.push("b")
  stack.push("c")
  stack.push("d")
  stack.push("e")
  stack.push("f")

  
  const popData = stack.pop()
  
  console.log(popData)
  
  console.log(stack)

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port: ${port}`)
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`)
}