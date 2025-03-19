let arr = [1,4,5,3]
console.log(arr)

for(let i=0;i<arr.length;i++){
	console.log(arr[i])
}

arr.forEach((a) =>{
	console.log(a)
})

//Find the max number in the array using forEach
let a = [10,100,120,50]
let max = 0
a.forEach((n) =>{
	if(max < n)
	{
		max = n 
	}
	
	//(max < n) && (max = n)
})
console.log("Max is: " + max)



/*Print the nested array
[[1,2,30],[5,6],8,5,3]] */
let arr2 = [[1,2,30],[5,6],[8,5,3]]
arr2.forEach((n) =>{
	n.forEach((i) =>{
		console.log(i)
	})
})

/*a = [4,5,6,3,7]
b = [8,3,2,1,5]
Find the commomn elements between a and b 
*/
let c = [4,5,6,3,7]
let b = [8,3,2,1,5]

for(let i=0; i<c.length; i++){
	for(let j=0; j<b.length; j++){
		if(c[i] == b[j])
		{
			console.log("Common elements: " + c[i])
		}
	}
}



/*array = [1,2,3,4,5,6]
target = 7
write a code to find the all pairs that sum up to the target
*/
let array = [1,2,3,4,5,6]
let target = 7
let mid = parseInt(target/2)+1
let max1 = target-1
let srt = 1

for(let i=srt; i<mid; i++){
	for(let j=max; j>mid; j--){
		if(i+j == target)
		{
			console.log("pair" + i + "," + j)
		}
	}
}

/*[4,8,3,4,3,2,1,8,4]
Find the most frequent element in the array
*/



/*Array operation
push
*/
arr3 = ['a','b','d']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)

/*Reverse the array using push and pop
a b c d -> d b c a 
*/
arr4 = ['a','b','c','d']
console.log(arr4)

//JSON
//{key:value} 
let student = {regno:'2021/ICT/121', name:'James', age:22, course: 'IT', skills:['Java',"JS",'c++']}
console.log(student)
console.log(student.name)
let std = [
	{regno:'2021/ICT/121', name:'James', age:22, course:'IT'},
	{regno:'2021/ICT/122', name:'Ravi', age:22, course:'IT'},
	{regno:'2021/ICT/123', name:'Gaya', age:23, course:'IT'},
]
console.log(std)

//Define 10 student JSON
//Store it in an array
let students = [
  { name: "John", gender: "Male", course: "IT", gpa: 3.5 },
  { name: "Alice", gender: "Female", course: "Math", gpa: 3.8 },
  { name: "Sara", gender: "Female", course: "IT", gpa: 3.9 },
  { name: "Michael", gender: "Male", course: "Science", gpa: 3.2 },
  { name: "Emma", gender: "Female", course: "IT", gpa: 4.0 },
  { name: "James", gender: "Male", course: "History", gpa: 2.8 },
  { name: "Sophia", gender: "Female", course: "Literature", gpa: 3.6 },
  { name: "David", gender: "Male", course: "IT", gpa: 3.3 },
  { name: "Olivia", gender: "Female", course: "Engineering", gpa: 3.7 },
  { name: "Daniel", gender: "Male", course: "IT", gpa: 3.1 }
];

//Find the female students
let femaleStudents = students.filter(student => student.gender === "Female");
console.log("Female Students:", femaleStudents);

//Find the students who are following IT course
let itStudents = students.filter(student => student.course === "IT");
console.log("IT Students:", itStudents);

//Find the max and GPA average
let gpas = students.map(student => student.gpa);
let maxGPA = Math.max(...gpas);
let averageGPA = gpas.reduce((sum, gpa) => sum + gpa, 0) / gpas.length;

console.log("Max GPA:", maxGPA);
console.log("Average GPA:", averageGPA.toFixed(2));
