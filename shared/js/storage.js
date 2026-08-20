window.educationalStorage = {
  save(appId, value) {
    const key = `edu-app:${appId}`;
    localStorage.setItem(key, JSON.stringify(value));
  },

  load(appId, fallback = null) {
    const key = `edu-app:${appId}`;
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  },

  clear(appId) {
    localStorage.removeItem(`edu-app:${appId}`);
  },
};
