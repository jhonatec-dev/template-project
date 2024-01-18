import NewComponent from '../_components/new-component'
import styles from './page.module.css'

export default function Estilizada() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={styles.title}>Estilizada</h1>
      <NewComponent />
    </main>
  )
}