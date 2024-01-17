import React, { createContext, useState, useRef, useEffect } from 'react';
import Notification from '../Components/Notification';

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const removeNotification = (id) => {
    // eslint-disable-next-line no-shadow
    setNotifications((notifications) => notifications.filter((n) => n.id !== id));
  };

  const addNotification = (message, type, duration = 3000) => {
    const id = Date.now().toString();
    const newNotification = { id, message, type };
    // eslint-disable-next-line no-shadow
    setNotifications((notifications) => [...notifications, newNotification]);

    setTimeout(() => {
      removeNotification(id);
    }, duration);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <div className="notification-container">
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            message={notification.message}
            type={notification.type}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider };
