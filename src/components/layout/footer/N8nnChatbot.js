
"use client";

import { useEffect } from "react";
import '@n8n/chat/style.css';

const N8nChatbot = () => {
  useEffect(() => {
    let chatInstance;

    import("@n8n/chat").then(({ createChat }) => {
      chatInstance = createChat({
        webhookUrl: "https://n8n.uniquepact.com/webhook/d382103d-f4c4-4cd8-bb19-a3f8b5aa8469/chat",
        mode: "window",
        defaultLanguage: "en",
        initialMessages: [
          "Hi there! 👋",
          

        ],  
        position: "bottom-right",
        openIcon: `<span style="color: #1e90ff; font-size: 24px;">💬</span>`,
        closeIcon: "✖️",
      });
    });

    return () => {
      if (chatInstance && chatInstance.unmount) {
        chatInstance.unmount();
      }
    };
  }, []);

  return (
    <>
      <style>
        {`
          :root {
            --chat--color--primary: #0075ff;
            --chat--color--primary-shade-50: #0075ff;
            --chat--color--primary--shade-100: #0075ff;
            --chat--color--secondary: #20b69e;
            --chat--color-secondary-shade-50: #1ca08a;
            --chat--color-white: #ffffff;
            --chat--color-light: #f2f4f8;
            --chat--color-light-shade-50: #e6e9f1;
            --chat--color-light-shade-100: #c2c5cc;
            --chat--color-medium: #d2d4d9;
            --chat--color-dark: #101330;
            --chat--color-disabled: #777980;
            --chat--color-typing: #404040;
          }
        `}
      </style>
    </>
  );
};

export default N8nChatbot;
