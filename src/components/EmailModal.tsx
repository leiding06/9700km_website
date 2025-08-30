// components/ConnectModal.tsx
'use client';

import React from 'react';

interface EmailModalProps {
    isOpen: boolean;
    onClose: () => void;
    }

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h2>
            <p className="text-gray-600 mb-4">Send your ideas to: 9700kmStudio@gmail.com</p>
            <button
            onClick={onClose}
            className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
            >
            Close
            </button>
        </div>
        </div>
    );
    };

export default EmailModal;