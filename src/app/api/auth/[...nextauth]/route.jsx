import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: { params: { scope: 'identify email' } },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('User:', user);
      console.log('Account:', account);
      console.log('Profile:', profile);
      return true; // Eğer false döndürürseniz, oturum açma engellenir
    },
    async session({ session, token, user }) {
      console.log('Session:', session);
      return session; // Burada döndürülen session, istemciye gönderilir
    },
    async jwt({ token, user, account, profile }) {
      console.log('JWT Token:', token);
      return token; // Token'ı istediğiniz gibi değiştirebilirsiniz
    },
    async redirect({ url, baseUrl }) {
      return baseUrl; // Bu, kullanıcıyı ana sayfaya yönlendirecektir
    },
  },
  pages: {
    signIn: '/auth/signin', // Özel bir giriş sayfası oluşturabilirsiniz
  },
};

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
