// components/ConnectModal.tsx
'use client';

import React from 'react';

interface ConnectModalProps {
    isOpen: boolean;
    onClose: () => void;
    }

const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const teamMembers = [
    {
        name: "Lei Ding",
        linkedin: "https://linkedin.com/in/lei-ding-92117b1b9",
        role: "Co-Founder and main developer"
        },
        {
        name: "Wei Wu", 
        linkedin: "https://linkedin.com/in/唯-呉-462a82371",
        role: "Co-Founder and main system engineer"
        }
    ];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect With Our Team</h2>
            
            <div className="space-y-4">
            {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                </div>
                <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                >
                    LinkedIn
                </a>
                </div>
            ))}
            </div>

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

export default ConnectModal;