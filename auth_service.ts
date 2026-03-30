// auth_service.ts (After)
import jwt from 'jsonwebtoken';

// 環境変数からシークレットキーを取得（新規追加）
const JWT_SECRET = process.env.JWT_SECRET;

export const login = (user: User) => {
  // セッション方式からJWT方式へ変更
  const token = jwt.sign(
    { userId: user.id }, 
    JWT_SECRET, 
    { expiresIn: '1h' }
  );
  
  return {
    accessToken: token,
    tokenType: "Bearer"
  };
};

export const logout = () => {
  // クライアント側でトークンを破棄するため、サーバー処理を廃止
  return "Please delete token on client side";
};
