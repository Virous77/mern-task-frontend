import React from "react";
import "./Notification.css";
import { useAppContext } from "../../store/appContext";
import { AiOutlineClose } from "react-icons/ai";

const Notification = () => {
  const { notification, handleNotification } = useAppContext();

  return (
    <>
      {notification && (
        <p
          className={`notification ${
            notification.status === "error" ? "error" : "success"
          }`}
        >
          {notification.message}{" "}
          <AiOutlineClose
            color="black"
            cursor={"pointer"}
            size={20}
            onClick={() => handleNotification("")}
          />
        </p>
      )}
    </>
  );
};

export default Notification;
