import React, { useContext, useEffect, useRef, useState } from 'react';

import style from './ChatModule.module.scss';
import { Icon } from '@/components/icon/Icon.tsx';
import { BiMessageAltDots } from 'react-icons/bi';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks.ts';
import ebobot from '@/assets/images/aiBot/ebobot.png';
import user from '@/assets/images/aiBot/kyrylo.jpg';
import { addChatHistory } from '@/features/AISlice/aiSlice.ts';
import { setNotification } from '@/features/notification/notificationSlice.ts';
import { ThemeStateContext } from '@/app/providers/ThemeProvider/ThemeContext.ts';
import { ButtonCommon } from '@/components/ButtonCommon';

const key =
  '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';

export const ChatModule: React.FC = () => {
  const { theme } = useContext(ThemeStateContext);
  const [isOpen, setIsOpen] = useState(true);
  const [userMessage, setUserMessage] = useState('');

  const { chatHistory } = useAppSelector((state) => state.aiHistory);
  const dispatch = useAppDispatch();

  const sendMessage = async () => {
    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${key}`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userMessage }],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const botResponse = data.choices[0].message.content;

      dispatch(
        addChatHistory({
          author: 'bot',
          text: botResponse,
        })
      );
      return botResponse;
    } catch {
      dispatch(setNotification(['something went wrong', 'error']));
      return 'Щось пішло не так, спробуйте ще раз.';
    }
  };

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleAddMessage = (author: 'bot' | 'user', text: string) => {
    dispatch(
      addChatHistory({
        author,
        text,
      })
    );
  };

  return (
    <div className={style[`widget`]}>
      {isOpen ? (
        <div className={style[`modal`]}>
          <div className={style[`modal__top`]}>
            <div className={style[`modal__title`]}>Ebobot prime</div>
            <div
              onClick={() => setIsOpen(false)}
              className={style[`modal__close`]}>
              <Icon.Close />
            </div>
          </div>
          <div className={style[`modal__chat`]}>
            {chatHistory.map((message) => (
              <div
                className={`${style[`modal__message`]} ${message.author === 'user' ? style[`modal__message--user`] : ''}`}>
                <div className={style[`modal__message-logo`]}>
                  <img
                    src={message.author === 'bot' ? ebobot : user}
                    alt="subject"
                  />
                </div>
                <p className={style[`modal__message-text`]}>{message.text}</p>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div>
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}>
              <textarea
                onKeyDown={(e) => {
                  if (e.code === 'Enter') {
                    e.preventDefault();
                    handleAddMessage('user', userMessage);
                    setUserMessage('');
                    sendMessage();
                  }
                }}
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className={style[`modal__text`]}
                placeholder={'Ask to ebobot...'}
              />
              <div
                onClick={() => {
                  handleAddMessage('user', userMessage);
                  setUserMessage('');
                  sendMessage();
                }}>
                <ButtonCommon className={style.widget__button}>
                  Send
                </ButtonCommon>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div
        onClick={() => setIsOpen((current) => !current)}
        className={style.ebobot__wrapper}>
        <BiMessageAltDots
          fill={theme === 'dark' ? 'white' : 'black'}
          size={20}
        />
      </div>
    </div>
  );
};
