import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const HomePage = () => {
  return (
    <Stack spacing={2} direction="column">
      <Button variant="text" href="/projects">Text</Button>
      <Button variant="contained">
        <a
          target='_blank'
          rel='noopener noreferrer'
          href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">
          Policies
        </a>
      </Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  )
}

export default HomePage
