import styled, { keyframes } from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";


// Animação para o ícone
const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const ChatIcon = styled.div`
  position: fixed;
  bottom: 60px;
  right: 16px;
  cursor: pointer;
  background: #cb6e18;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, background-color 0.3s ease;

  /* Animação ao carregar */
  animation: ${bounceAnimation} 1s ease infinite;

  &:hover {
    background: #ff8c00; /* Cor de destaque ao passar o mouse */
    transform: scale(1.1); /* Aumenta o tamanho */
  }

  &:hover > span {
    visibility: visible;
    opacity: 1;
  }
`;

export const ChatText = styled.span`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: 60px; /* Acima do ícone */
  left: 10%;
  transform: translateX(-50%);
 background-color:rgb(134, 201, 219);
  color:rgb(10, 10, 10);
  text-align: center;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 80px;
  right: 16px;
  width: 300px;
  max-height: 400px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;


  export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;


export const ChatHeader = styled.div`
  background: #cb6e18;
  color: white;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;


export const ChatCloseIcon = styled(IoIosCloseCircle)`
  font-size: 24px;
  color: #525252;
  cursor: pointer;
`;

export const ChatBody = styled.div`
  flex: 1;
  padding: 8px;
  overflow-y: auto;
`;

export const ChatFooter = styled.div`
  display: flex;
  padding: 8px;
  border-top: 1px solid #ccc;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
`;

export const SendButton = styled.button`
  background: #cb6e18;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #1f8c12;
  }
`;

export const Message = styled.div<{ sender: string }>`
  padding: 8px;
  margin: 4px 0;
  background: ${({ sender }) => (sender === "user" ? "#e0f7fa" : "#fce4ec")};
  border-radius: 8px;
  align-self: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};
  max-width: 80%;
  word-wrap: break-word;
`;
