import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background-color: #00b5ad;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    list-style-type: none;
    color: inherit;
    text-decoration: none;
    padding: 0.5rem;
    border-bottom: 3px solid transparent;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserName = styled.p`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  background-color:rgb(134, 201, 219);
  border-radius: 5px;
  padding: 5px;
  color: black;
  text-align: left;

  ${ProfileContainer}:hover & {
    opacity: 1;
  }
`;

interface UserImageProps {
  src?: string | null | undefined;
}

export const UserImage = styled.img<UserImageProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 20px;
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: #cb6e18;
  }
`;

export const LogintButton = styled.button`
  background-color: #cb6e18;
  padding: 8px;
  border-radius: 16px;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &:hover {
    color: #ffffff;
  }
`;
