import React, { useState } from 'react';
import gruposData from '../data/grupos.json';
import '../Grupos.css'

const Grupos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div>
      <div className="left-column">
        <input
          type="text"
          placeholder="Pesquisar grupo"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <ul>
          {gruposData.map((group) => (
            <li
              key={group.id}
              onClick={() => handleGroupClick(group)}
              className={selectedGroup === group ? 'selected' : ''}
            >
              {group.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="right-column">
        {selectedGroup ? (
          <div>
            <h2>{selectedGroup.name}</h2>
            <ul>
              {selectedGroup.users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Selecione um grupo à esquerda para ver os detalhes.</p>
        )}
      </div>
    </div>
  );
};

export default Grupos;
