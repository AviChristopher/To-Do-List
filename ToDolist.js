const toDoList =[
'Make my bed',
'Make Breakfast',
'Study for 2 hours',
'Learn a foreign Language',
'Practice Javascript',
'Workout',
'Make Dinner'
  ];

function createListItems(arr){
let items='';
for(let i = 0; i < arr.length; i++){
  items += `<li>${arr[i]} </li>`;

}
  return items;
}
document.querySelector('main').innerHTML =`
<ol>${createListItems(toDoList)}
</ol>

`;
