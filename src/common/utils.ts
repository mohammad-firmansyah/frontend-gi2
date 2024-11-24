export function openSidebar() {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.setProperty('--SideNavigation-slideIn', '1');
    }
  }
  
  export function closeSidebar() {
    if (typeof window !== 'undefined') {
      document.documentElement.style.removeProperty('--SideNavigation-slideIn');
      document.body.style.removeProperty('overflow');
    }
  }
  
  export function toggleSidebar() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const slideIn = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--SideNavigation-slideIn');
      if (slideIn) {
        closeSidebar();
      } else {
        openSidebar();
      }
    }
  }

export const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file); // Converts the file to a base64 string
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};

export function getRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}