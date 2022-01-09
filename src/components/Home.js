import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect } from "react-router-dom";
import { auth } from "../firebase";
import ServerIcon from "./ServerIcon";

function Home() {
  const [user] = useAuthState(auth);
  return (
    <>
      {!user && <Redirect to="/" />}
      <div>
        <div>
          <div>
            <img src="https://rb.gy/kuaslg" alt="" className="h-5" />
          </div>
          <hr className="border-gray-700 border w-8 mx-auto" />
          <ServerIcon image="https://rb.gy/zxo0lz" />
          <ServerIcon image="https://rb.gy/zxo0lz" />
          <ServerIcon image="https://rb.gy/zxo0lz" />
          <ServerIcon image="https://rb.gy/zxo0lz" />
        </div>
      </div>
    </>
  );
}

export default Home;
