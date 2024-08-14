// ProfileImageContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";

interface ProfileImage {
  [userId: string]: string | undefined;
}

interface ProfileImageContextType {
  updateProfileImage: (userId: string, image: string) => void;
  getProfileImage: (userId: string) => string | null;
}

const ProfileImageContext = createContext<ProfileImageContextType | undefined>(undefined);

export const useProfileImage = () => {
  const context = useContext(ProfileImageContext);
  if (!context) {
    throw new Error("useProfileImage must be used within a ProfileImageProvider");
  }
  return context;
};

interface ProfileImageProviderProps {
  children: ReactNode;
}

export const ProfileImageProvider: React.FC<ProfileImageProviderProps> = ({ children }) => {
  const [profileImages, setProfileImages] = useState<ProfileImage>({});

  useEffect(() => {
    // Load profile images from local storage when component mounts
    const storedProfileImages = localStorage.getItem("profileImages");
    if (storedProfileImages) {
      setProfileImages(JSON.parse(storedProfileImages));
    }
  }, []);

  const updateProfileImage = (userId: string, image: string) => {
    // Update profile image in state
    setProfileImages((prevImages) => ({
      ...prevImages,
      [userId]: image,
    }));

    // Store updated profile images in local storage
    localStorage.setItem("profileImages", JSON.stringify({ ...profileImages, [userId]: image }));
  };

  const getProfileImage = (userId: string) => {
    return profileImages[userId] || null;
  };

  return (
    <ProfileImageContext.Provider value={{ updateProfileImage, getProfileImage }}>
      {children}
    </ProfileImageContext.Provider>
  );
};
