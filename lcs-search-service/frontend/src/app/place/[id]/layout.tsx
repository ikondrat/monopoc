'use client'

import { client } from '@/app/libs/apollo'
import { ApolloProvider } from '@apollo/client'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
