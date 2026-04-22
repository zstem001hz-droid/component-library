import { useState } from "react";
import { AlertBox } from "./components/AlertBox/AlertBox";

function App() {
  const [showAlert, setShowAlert] = useState(true);

  console.log("App rendered — showAlert:", showAlert);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Component Library</h1>

      {showAlert && (
        <AlertBox
          type="success"
          message="Your profile has been updated successfully!"
          onClose={() => {
            console.log("AlertBox closed");
            setShowAlert(false);
          }}
        >
          <p className="text-sm mt-2">
            You can now continue using the application.
          </p>
        </AlertBox>
      )}
    </div>
  );
}

export default App;
