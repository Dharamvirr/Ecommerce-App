import { useState, useEffect } from "react";
import { useAuth } from "../../context/Auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("http://localhost:8080/admin-auth"
        // , {
        //   headers: {
        //     Authorization: auth?.token,
        //   },
        // }
    );
    console.log("first")
         
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (err) {
        console.error("Authentication check failed:", err);
        setOk(false);
      }
    };
     

    if (auth?.token) authCheck();
  }, [auth?.token]);
 
  return ok ? <Outlet /> : <Spinner path=''/>;
}
