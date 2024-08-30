import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

const authOptions = {
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
      return true;
    },
    async session({ session, token, user }) {
      console.log('Session:', session);
      return session;
    },
    async jwt({ token, user, account, profile }) {
      console.log('JWT Token:', token);
      return token;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl; // Kullanıcıyı ana sayfaya yönlendir
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
