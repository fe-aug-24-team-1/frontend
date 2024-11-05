import React from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Notification: React.FC = () => {
  const navigate = useNavigate();

  const notify = (
    type: 'success' | 'warning' | 'error',
    message: string,
    position: ToastOptions['position'],
    duration: number,
    redirectUrl: string
  ) => {
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
    };

    if (type === 'success') {
      toast.success(message, options);
    } else if (type === 'warning') {
      toast.warning(message, options);
    } else if (type === 'error') {
      toast.error(message, options);
    }
  };

  return (
    <div>
      <button
        onClick={() =>
          notify(
            'success',
            'Your purchase was successful!',
            'bottom-left',
            3000,
            '/phones'
          )
        }>
        Complete Purchase
      </button>
      <button
        onClick={() =>
          notify('warning', 'Warning!', 'bottom-left', 3000, '/phones')
        }>
        Show Warning
      </button>
      <button
        onClick={() =>
          notify('error', 'Error!', 'bottom-left', 3000, '/phones')
        }>
        Show Error
      </button>
      <ToastContainer />
    </div>
  );
};

export default Notification;
