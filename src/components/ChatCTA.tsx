
import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChatCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block">
      <a 
        href="https://wa.me/918884544443" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center bg-accent hover:bg-accent/90 text-black py-3 px-5 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="h-5 w-5 mr-2" />
        <span>Chat with our expert</span>
      </a>
    </div>
  );
};

export default ChatCTA;
