let timeoutRef = null;

export const isAuthenticated = () => {
  const data = localStorage.getItem("userData");
  try {
    const user = JSON.parse(data);
    return !!user?.role && !!user?.name;
  } catch {
    return false;
  }
};

const logoutUser = (navigate) => {
  localStorage.removeItem("userData");
  if (navigate) navigate("/auth/login");
};

export const startInactivityTimer = (navigate, duration = 30 * 60 * 1000) => {
  if (timeoutRef) clearTimeout(timeoutRef);
  timeoutRef = setTimeout(() => {
    logoutUser(navigate);
  }, duration);
};

export const clearInactivityTimer = () => {
  if (timeoutRef) clearTimeout(timeoutRef);
};

export const handleVisibilityChange = (navigate) => {
  if (document.hidden) {
    startInactivityTimer(navigate);
  } else {
    clearInactivityTimer();
  }
};
