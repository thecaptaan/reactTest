export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is a protected page accessible after login.</p>

      <h3>User Information</h3>
      <p>ID: {user.id}</p>
      <p>username: {user.username}</p>
      <p>email: {user.email}</p>
    </div>
  );
}
