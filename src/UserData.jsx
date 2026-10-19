function UserData(){
  const user = {first: 'Matt', last: 'Serrao', age: '19'};
  return(
    <div>
      <ul>
        User Data:
        <li>First: {user.first}</li>
        <li>Last: {user.last}</li>
        <li>Age: {user.age}</li>
      </ul>
    </div>
  );
}

export default UserData;