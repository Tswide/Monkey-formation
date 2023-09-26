import { Seo } from '@/ui/components/seo'
import { Button } from '@/ui/design-system/button'
import { Spinner } from '@/ui/design-system/spinner'
import { Typography } from '@/ui/design-system/typography'

export default function Home() {
  return (
    <>
      <Seo title='gorudofy' description='The best api spotify player music'/>
      <Typography variant='display' component='h1' theme='primary'>
        The best app web
      </Typography>
      <Button size='small'>Ajouter</Button>
      <Button variant='secondary'>Ajouter</Button>
      <Button variant='outline'>Ajouter</Button>
      <Button variant='disabled'>Ajouter</Button>
      <Spinner />
    </>
  )
}
