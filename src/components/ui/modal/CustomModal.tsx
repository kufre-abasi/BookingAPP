  import { useEffect, useRef } from 'react';

type ModalProps = {
  width?: 'modal-sm' | 'modal-lg' | 'modal-xl' | undefined;
  closeModal: () => void;
  children: React.ReactNode;
};

const CustomModal: React.FC<ModalProps> = ({
  width,
  closeModal,
  children
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);

  // Function to get width classes based on modal size
  const getWidth = () => {
    switch (width) {
      case 'modal-sm':
        return 'lg:w-[300px]';
      case 'modal-lg':
        return 'lg:w-[800px]';
      case 'modal-xl':
        return 'lg:w-[1140px]';
      default:
        return 'lg:w-[500px]';
    }
  };

  // Add animation on mount
  useEffect(() => {
    setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.classList.remove('scale-75');
      }
      if (blurRef.current) {
        blurRef.current.classList.add('backdrop-blur');
      }
    }, 50);
  }, []);

  // Close modal function
  const handleCloseModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.add('scale-75');
    }
    if (blurRef.current) {
      blurRef.current.classList.remove('backdrop-blur');
    }
    setTimeout(() => {
      closeModal();
    }, 50);
  };

  return (
    <section className="fixed top-0 z-50 left-0">
      <div
        onClick={handleCloseModal}
        ref={blurRef}
        className="h-full w-full fixed bg-black/40"
      ></div>
      <div className="min-h-screen w-screen flex justify-center items-center ">
        <div
          className={`bg-white rounded-[16px] blur-none p-6 w-full mx-3 lg:mx-0 transition z-10 scale-75 duration-50 ease-out ${getWidth()}`}
          ref={modalRef}
        >
          <div className="my-4">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default CustomModal;
