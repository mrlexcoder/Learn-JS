const users = [
    { id: 1, name: 'Alice', age: 28, city: 'New York' },
    { id: 2, name: 'Bob', age: 34, city: 'San Francisco' },
    { id: 3, name: 'Charlie', age: 25, city: 'Los Angeles' },
    { id: 4, name: 'David', age: 30, city: 'Chicago' },
    { id: 5, name: 'Eve', age: 22, city: 'Miami' }
  ];
  

  const modifiedUsers = users.map(user => ({
    ...user,
    isAdult: user.age >= 18
  }));
  console.log(modifiedUsers);
  /*
  Output:
  [
    { id: 1, name: 'Alice', age: 28, city: 'New York', isAdult: true },
    { id: 2, name: 'Bob', age: 34, city: 'San Francisco', isAdult: true },
    { id: 3, name: 'Charlie', age: 25, city: 'Los Angeles', isAdult: true },
    { id: 4, name: 'David', age: 30, city: 'Chicago', isAdult: true },
    { id: 5, name: 'Eve', age: 22, city: 'Miami', isAdult: true }
  ]
  */
  