import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 2em;
  font-weight: 600;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
  color: #f96167;
  margin-bottom: 20px;
`;
export const List = styled.ul`
  list-style: none;
  width: 400px;
  min-height: 40vh;
  overflow: hidden;
  overflow-y: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 15px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px black;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #f96167;
    border-radius: 10px;
  }
`;

export const ListItem = styled.li`
  color: #eee;
  background-color: #f96167;
  border-radius: 30px;
  padding: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  width: 350px;
  display: flex;
  justify-content: space-between;
`;
export const ListItemText = styled.span`
  width: 200px;
  font-size: 0.9;
  font-weight: bold;
  letter-spacing: 0.3rem;
`;
export const ListItemButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  text-shadow: rgba(0, 0, 0, 0.5);
  margin: 0 1rem;
`;
