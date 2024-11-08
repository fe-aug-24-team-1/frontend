import React from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

interface NotificationProps {
  type: 'success' | 'warning' | 'error';
  message: string;
  position: ToastOptions['position'];
  duration: number;
  redirectUrl: string;
}

const Notification: React.FC<NotificationProps> = ({
  type,
  message,
  position,
  duration,
  redirectUrl,
}) => {
  const navigate = useNavigate();

  const notify = () => {
    const options: ToastOptions = {
      position: position,
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      onClose: () => {
        navigate(redirectUrl);
      },
      style: {
        background: '#1a73e8',
        color: '#fff',
      },
    };

    switch (type) {
      case 'success':
        toast.success(message, options);
        break;
      case 'warning':
        toast.warning(message, options);
        break;
      case 'error':
        toast.error(message, options);
        break;
      default:
        toast.info(message, options);
        break;
    }
  };

  return (
    <div>
      <button onClick={notify}>Show Notification</button>
      <ToastContainer />
    </div>
  );
};

export default Notification;
