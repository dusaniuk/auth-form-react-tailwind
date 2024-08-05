import { useAuthContext } from "@app/context/auth";
import { Button } from "@ui/components/Button";
import { Text } from "@ui/components/Text";

export function MainView() {
  const { logout } = useAuthContext();

  function handleLogout() {
    logout();
  }

  return (
    <div className="flex flex-col gap-4 items-center z-10">
      <Text size="h1">Welcome to the app!</Text>
      <Button variant="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );

  return <div>MainView</div>;
}
