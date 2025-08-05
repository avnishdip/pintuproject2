import React, { useState, useEffect } from 'react';
import RobeMeter from './components/RobeMeter';
import Login from './components/Login';
import MoviePopup from './components/MoviePopup';
import MovieDateInvitation from './components/MovieDateInvitation';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMovieInvitation, setShowMovieInvitation] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Auth state changed:', user);
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('Logged out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If showing movie invitation, render that instead
  if (showMovieInvitation) {
    return (
      <MovieDateInvitation onBack={() => setShowMovieInvitation(false)} />
    );
  }

  return (
    <div className="App relative">
      {user ? (
        <div className="relative">
          <button
            onClick={handleLogout}
            className="fixed top-4 right-4 z-50 bg-white text-pink-500 px-4 py-2 rounded-md hover:bg-pink-50 transition-colors border border-pink-500"
          >
            Logout
          </button>
          <RobeMeter />
          
          {/* Movie Popup */}
          <MoviePopup 
            onClose={() => {}} 
            onAccept={() => setShowMovieInvitation(true)} 
          />
        </div>
      ) : (
        <Login onLogin={() => setUser(auth.currentUser)} />
      )}
    </div>
  );
}

export default App;
