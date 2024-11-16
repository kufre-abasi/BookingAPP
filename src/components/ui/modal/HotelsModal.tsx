'use client';
import React, { useState, useEffect, useRef } from 'react';
type WalletProps = {
  handleToggle: () => void;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
// import { useFormStore } from '@/Store/waitlist';
// import { useToast } from '@/components/ui/use-toast';

// import { useWalletStore } from '~/app/Store/slices/walletSlice';
// import { useToast } from '~/components/ui/use-toast';
// import Button from '@/components/ui/Button';
// import Loading from '~/components/ui/loading';
import CustomModal from './CustomModal';
// import AuthInput from '@/components/ui/input/AuthInput';
// import AuthSelect from '@/components/ui/input/AuthSelect';
// import { joinWaitList } from '@/service/auth';

const Modal: React.FC<WalletProps> = ({ handleToggle, onClick }) => {
  // const { formData, formErrors, handleInputChange } = useFormStore();
  // const { toast } = useToast();

  const modalRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleToggle();
    }
  };
  // const Submit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   try {
  //     setLoading(true);
  //     const result: any = await joinWaitList(formData);
  //     // console.log(result);
  //     if (result?.success === true) {
  //       toast({
  //         title: 'Success',
  //         description: ` ${result?.message}`,
  //         variant: 'default'
  //       });

  //       handleToggle();
  //         formData.fullName = '';
  //         formData.email = '';
  //         formData.interest = '';
  //     }
  //     return result;
  //   } catch (error: any) {
  //     const errorMessage =
  //       (error as any)?.response?.data?.message ||
  //       'An unexpected error occurred.';
  //     toast({
  //       title: errorMessage,
  //       description: `${errorMessage}`,
  //       variant: 'destructive'
  //     });
  //     setLoading(false);
  //   }
  // };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const [isStepValid, setIsStepValid] = useState(true);

  return (
    <CustomModal width="modal-lg" closeModal={handleToggle}>
      <div className="relative bg-white ">
        <div className="flex absolute right-5 justify-end items-end flex-row">
          <button
            className="bg-brand/90 rounded-full text-[30px] text-white font-normal leading-[20.3px] p-[8px]"
            onClick={handleToggle}
          >
            X
          </button>
        </div>
        <div className="flex justify-center text-center items-center w-full py-10 flex-row">
          <h3 className="text-[#4C4C4C]  text-center font-BricolageGrotesque !font-semibold  text-[15.17px] lg:text-[24px] leading-[23.2px]">
          </h3>
        </div>{' '}
        <form  className="flex flex-col gap-4">
          <div className="">
            {/* <div className="flex lg:flex-row flex-col w-full gap-[32px]">
              <AuthInput
                id="fullName"
                label="Full Name"
                type="text"
                placeholder=""
                value={formData.fullName || ''}
                onChange={handleInputChange}
                required={true}
              />
            </div>{' '}
            <div className="flex lg:flex-row flex-col w-full gap-[32px]">
              <AuthInput
                id="email"
                label="Email"
                type="email"
                placeholder=""
                value={formData.email || ''}
                onChange={handleInputChange}
                required={true}
              />
            </div>
            <div className="flex lg:flex-row flex-col w-full gap-[32px]">
              <AuthSelect
                id="interest"
                label="Interest"
                value={formData.interest || ''}
                options={[
                  { value: 'I wan de Sell', label: 'I wan de Sell' },
                  { value: 'I wan invest', label: 'I wan invest' },
                  {
                    value: 'I wan join body Buy',
                    label: ' I wan join body Buy'
                  }
                ]}
                onSelect={handleInputChange}
                required={true}
              />
            </div> */}
          </div>

          <button
            className={`btn-brand text-white ${
              !isStepValid ? '!bg-gray-400 cursor-not-allowed' : ''
            }`}
            disabled={!isStepValid}
          >
            {loading ? 'loading...' : 'Submit'}
          </button>
        </form>
        <div></div>
      </div>
    </CustomModal>
  );
};

export default Modal;
