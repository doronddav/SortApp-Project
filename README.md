# SortApp-Project
choose number for sorting

 ## Description
This app will sort number that you choose or random number.
the sorting will be by bubbleSort
```let bubbleSort = () => {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
};```

 
## How to use the Project
The user can choose and write numbers in a text box or get random numbers by the range input.
there are two adding buttons.
there is a button for the sort and another one if the user want to sort theme to gouops (0-30/   31-60  /61-100)
by button Clear the user can start over sorting and clear data.

for this project to have to use ```live-server`` on terminal and use sass extension("Live Sass Compiler")




