console.log('bobbyhadz.com');

// 👇️ if you need to clear localStorage
// localStorage.clear();

localStorage.setItem('site', 'bobbyhadz.com');
localStorage.setItem('topic', 'JavaScript');
localStorage.setItem('foo', 'bar');

Object.keys(localStorage).forEach(key => {
  console.log(`${key} - ${localStorage.getItem(key)}`);
});
