import NewComponent from "@/app/_components/new-component";

export default function Rota() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Rota</h1>
      <p>Usando o global css apenas</p>
      <NewComponent />
    </main>
  )
}