"use client";

import { useAuth } from "../lib/hooks/useAuth";
import SignInWithGoogle from "./SignInWithGoogle";

export const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="w-full bg-white/80 backdrop-blur-md p-3 rounded-lg shadow-sm mb-6 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-gray-800">ILUMAi</h1>
      </div>
      
      <div>
        {user ? (
          <div className="flex items-center gap-3">
            <span className="text-sm hidden md:inline">{user.displayName}</span>
            <button 
              onClick={signOut}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm transition-colors"
            >
              Sair
            </button>
          </div>
        ) : (
          <SignInWithGoogle />
        )}
      </div>
    </header>
  );
}; 