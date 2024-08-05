import { MainView } from "@app/auth/MainView";
import { SignUpForm } from "@app/auth/SignUpForm";
import { useAuthContext } from "@app/context/auth";
import { StarryBackground } from "@ui/background/StarryBackground";

function App() {
  const { isAuthenticated } = useAuthContext();

  return (
    <div className="relative bg-gradient-to-b from-[#F4F9FF] to-[#E0EDFB] h-lvh">
      <StarryBackground />
      {!isAuthenticated && (
        <div className="flex justify-center pt-24">
          <SignUpForm />
        </div>
      )}
      {isAuthenticated && (
        <div className="flex justify-center pt-24">
          <MainView />
        </div>
      )}
    </div>
  );
}

export default App;
