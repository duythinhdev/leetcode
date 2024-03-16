var array = [1, 2, 6, 5, 222, 3, 2, 6 ,3 , 222];

console.log(...new Set(array))

console.log(
  array.filter((item , index ) => array.indexOf(item) === index)
)

// Sử dụng reduce
console.log(
  array.reduce((uniq, item) => uniq.includes(item) ? uniq : [...uniq, item], []
  )
)