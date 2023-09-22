export type Task = {
  id: number
  content: string
  dueDate: string
  check: boolean
}

export type AllTask = {
  tasks: Task[]
}

export type TestStringMessage = {
  message: string
}

export interface changeProps  {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}