import { useState } from 'react';

const useModal = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return {
    closeModal,
    isOpen,
    openModal,
    toggleModal
  }
}

export default useModal;