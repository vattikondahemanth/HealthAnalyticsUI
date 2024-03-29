import React, { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Test from "./Test";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
// import { Column } from "./Column";

const Fetch = () => {
  let [users, setUsers] = useState(null);
  let locate = useLocation();
  let userID = locate.state.user;
  let url = `http://127.0.0.1:8000/get_medical_records?user_id=${userID}`;

  let test = async function () {
    try {
      let response = await axios.get(url);
      let userdata = await response.data.data;
      //   console.log(userdata);

      setUsers(userdata);
    } catch {
      console.log("erro");
    }
  };
  useEffect(() => {
    test();
  }, []);
  let column = useMemo(() => [{ Header: "Value", accesser: "Value" }], []);

  return <div>{users && <Test userData={users} column={column} />}</div>;
};
export default Fetch;
