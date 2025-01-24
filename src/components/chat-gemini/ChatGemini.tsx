import React, { useState, useEffect } from "react";
import * as S from "./styles";
import avatar from "../../assets/avatar-chat.png";
import { AiOutlineMessage } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import axios from "axios";
import { IoIosCloseCircle } from "react-icons/io";
import http from "../../http";

const ChatGemini = ({ despesas }: { despesas: any[] }) => {
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  // Extrai o primeiro nome do usuário
  const getShortenedName = (fullName: string | null | undefined): string => {
    if (!fullName) return "";
    const words = fullName.split(" ");
    return words.slice(0, 1).join(" ");
  };
  

  const userName = getShortenedName(user?.displayName);

  // Alternar visibilidade do chat
  const toggleChat = () => setIsOpen(!isOpen);

  // Criar a sessão no backend
  useEffect(() => {
    if (user?.uid) {
      createSession(); // Cria a sessão ao carregar o componente
    }
  }, [user]);

  const createSession = async () => {
    try {
      const response = await http.post("/chat", {
        uid: user?.uid,
        message: "Iniciando conversa",
        userName, // Envia o nome do usuário
      });

      // Atualiza mensagens do estado
      setMessages([
        ...response.data.messages.map((msg: any) => ({
          sender: msg.sender,
          text: msg.content,
        })),
      ]);
    } catch (error) {
      console.error("Erro ao criar a sessão:", error);
    }
  };

  // Envia mensagem do usuário
  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");

    try {
      const response = await http.post("chat", {
        uid: user?.uid,
        message: input, // Mensagem do usuário
      });

      const botMessage =
        response.data.messages?.[response.data.messages.length - 1]?.content;

      if (botMessage) {
        setMessages((prev) => [...prev, { sender: "bot", text: botMessage }]);
      }
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
    }
  };

  return (
    <>
      {/* Ícone para abrir/fechar o chat */}
      <S.ChatIcon onClick={toggleChat} title="Fale com a Gal">
        <AiOutlineMessage size={32} />
      </S.ChatIcon>

      {isOpen && (
        <S.ChatContainer>
          {/* Cabeçalho do chat */}
          <S.ChatHeader>
            <S.Avatar
              src={avatar}
              alt="Avatar da Conselheira Financeira"
            />
            
              <span>Conselheira Financeira</span>
              
            
            <IoIosCloseCircle size={24} onClick={toggleChat} />
          </S.ChatHeader>

          {/* Corpo do chat */}
          <S.ChatBody>
            {messages.map((msg, index) => (
              <S.Message key={index} sender={msg.sender}>
                {msg.text}
              </S.Message>
            ))}
          </S.ChatBody>

          {/* Rodapé do chat */}
          <S.ChatFooter>
            <S.Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem"
            />
            <S.SendButton onClick={sendMessage}>Enviar</S.SendButton>
          </S.ChatFooter>
        </S.ChatContainer>
      )}
    </>
  );
};

export default ChatGemini;
