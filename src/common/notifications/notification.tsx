import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { selectError } from "@DATA/dataSlices/error.slice";

export interface IConfig {
  variant: string;
  message: string;
  type: "successs" | "warning" | "error";
}
/**
 * notificationControll
 * @param config: {variant: string, message: string, type: notificationType  } || undefined
 * @returns {Notification}
 */
export const triggerNotification = (config?: IConfig) => {
  const error = selectError(selectError);
  let message: string, variant: string, type: string;
  if (config) {
    message = config.message;
    variant = config.variant;
    type = config.type;
  } else {
    message = error.message;
    variant = error.variant;
    type = error.type;
  } // allow override of the redux flow, if a config is passed in, it will be used.
  const [trigger, setTrigger] = useState(false);
  if (trigger) {
    return (
      <Alert
        variant={message}
        onClose={() => {
          setTrigger(false);
        }}
        dismissible
        style={{ zIndex: "9", position: "absolute", left: "50%", top: "50%" }}
      >
        <Alert.Heading>{type}</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }
};
