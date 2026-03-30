// auth_service.ts (Before)
export const login = (user: User) => {
  // セッションにユーザー情報を保存
  session.save({
    userId: user.id,
    isLoggedIn: true
  });
  return "Session created";
};

export const logout = () => {
  session.destroy();
};
