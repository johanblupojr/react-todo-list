# react-todo-list app

Solution for Question #2 of the Quiz:

Problem:
Change it so that it's more like the todo list app

1. Add checkboxes
2. Put a line-through if the checkbox is checked

Solution

1.Change the input type of setTodos from text to checkbox.
2.Add a function in handleFormSubmit to handle changes to the input value and sets the inputValue state variable to the new value of the input field. (line 17-21)
  Create a function to handle checking off a to-do item. This creates a copy of the todos array using the map method, updates the isDone property of the item at the specified index based on the checked 
  status of the checkbox, and updates the todos state variable with the new array. (line 29-38) 

Answer to Question #3 of the Quiz:

The initial code creates a TodoList which renders a to-do list with the ability to add and delete items.
The code imports the useState hook from React then a TodoList function is defined with two state variables using the useState hook. The todos variable is initialized as an empty array while the inputValue is initialized as an empty string. 

It then creates a handleInputChange function which updates the inputValue state whenever the input field changes.
After that, make handleFormSubmit to check if there are a whitespaces on the text input and make sure that the input value is not empty. This function also adds the input value to the todos array using the setTodos function and then it clears the input state variable to reuse the text input.
A handleTodoDelete function is which creates a new array with the same elements as todos except for the one at the given index, and updates the todos state variable with the new array. 

This will return a form with an input field and a submit button, an unordered list element containing a list of todos. The input value and the handleInputChange function are passed as props to the input field, and the handleFormSubmit and handleTodoDelete functions are used to handle the form submission and the delete button clicks respectively. The todos array is mapped to a list of <strong>li</strong> elements with a delete button for each item. The key prop is set to the index of each item in the array.

   
