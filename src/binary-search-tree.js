const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.tree = null;
  }

  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.tree
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const addelem = (tree, elem) =>{
      if(elem.data < tree.data){
          if (tree.left === null)
              tree.left = elem;
          else
              addelem(tree.left, elem);
      }
      else{
          if (tree.right === null)
              tree.right = elem;
          else
              addelem(tree.right, elem);
      }
    }
    let element = new Node(data);
    if(this.tree === null){
      this.tree = element;
    }
    else{
      addelem(this.tree, element)
    }
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return (this.find(data) === null) ? false : true
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const finddata = (tree, data) =>{
      if (tree === null)
          return null
      else if (tree.data === data)
          return tree
      else {
          if (data < tree.data)
              return finddata(tree.left, data)
          else 
              return finddata(tree.right, data)
      }
    }
    return finddata(this.tree, data)
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const removedata = (tree, data) => {
      if (tree.data === data){
          if(tree.left === null && tree.right === null){
              return tree = null
          }
          else if (tree.left === null) 
              return tree.right
          else if (tree.right === null) 
              return tree.left
          else {
              tree.data = this.min(tree.right);
              tree.right = removedata(tree.right, tree.data);  
          }
      }
      else{
          if(data < tree.data) 
              tree.left = removedata(tree.left, data)
          else{
              tree.right = removedata(tree.right, data)
          }
      }
      return tree
    }
    if(this.find(data) !== null){
      removedata(this.tree, data)
    }
  }

  min(temp = this.tree) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(temp === null)
        return null
    else{
        while(temp.left !== null)
            temp = temp.left;
    }
    return temp.data
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let temp = this.tree; 
    if(temp === null)
        return null
    else{
        while(temp.right !== null)
            temp = temp.right;
    }
    return temp.data
  }
}

module.exports = {
  BinarySearchTree
};