'use client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Search } from './components/Search'
import { Container, Grid, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import { useState } from 'react'
import { client } from './libs/apollo'

const theme = createTheme({
  palette: {
    mode: 'light'
  }
})

export default function Home() {
  const [value, setValue] = useState('')

  return (
    <ThemeProvider theme={theme}>
      <main>
        <ApolloProvider client={client}>
          <Container maxWidth="lg">
            <Grid container spacing={2} direction="column">
              <Grid item>
                <Typography variant="h1">Search the places</Typography>
              </Grid>
              <Grid item>
                <TextField
                  size="medium"
                  name="search"
                  placeholder="Type text to see results"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  fullWidth
                  id="outlined-basic"
                />
              </Grid>
              <Grid item>
                <Search value={value} />
              </Grid>
            </Grid>
          </Container>
        </ApolloProvider>
      </main>
    </ThemeProvider>
  )
}
